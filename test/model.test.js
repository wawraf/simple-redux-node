const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const should = chai.should()
const dotenv = require('dotenv')

dotenv.config({path: '.env'})

import { Articles, User } from '../server/models'

describe('/// MONGOOSE MODEL TEST ///', function () {
  
  /* Article model test */ 
  describe('1. Article', function(){
    it('Article model mongoose is a function', function(){
      expect(Articles).to.be.a('function', 'This is not a function')
    })
    
    const article = new Articles()
    it('New Article is an object', function(){
      expect(article).to.be.an('object', 'This is not an object')
    })
    it('New Article contains title, text and author props by default', function(){
      expect(article).to.have.property('title').that.equals('Article title')
      expect(article).to.have.property('text').that.equals('Article text')
      expect(article).to.have.property('author').that.equals('Unknown author')
    })
    
    const title = 'This is title'
    const text = 'This is text'
    const author = 'The author'
    const bug = 'This is not expected'
    const newArticle = new Articles({title, text, author, bug})
    it('New custom Article is created properly', function(){
      expect(newArticle).to.have.property('title').that.equals(title)
      expect(newArticle).to.have.property('text').that.equals(text)
      expect(newArticle).to.have.property('author').that.equals(author)
      expect(newArticle).to.not.have.property('bug')
    })
  })
  
  /* User model test */ 
  describe('2. User', function(){
    it('User model mongoose is a function', function(){
      expect(User).to.be.a('function', 'This is not a function')
    })
    
    const user = new User()
    it('New User is an object', function(){
      expect(user).to.be.an('object', 'This is not an object')
    })
    it('New User contains local and github props by default', function(){
      expect(user).to.have.property('local').that.is.an('object')
      expect(user).to.have.property('github').that.is.an('object')
      expect(user.local).to.have.property('username')
      expect(user.local).to.have.property('password')
      expect(user.github).to.have.property('username')
      expect(user.github).to.have.property('id')
    })
    
    const bug = 'This is not expected'
    const username = 'userTest'
    const password= 'passTest'
    const newLocalUser = new User({local: {username, password, bug}, bug})
    it('New custom local User is created properly', function(){
      expect(newLocalUser).to.have.property('local').that.is.an('object')
      expect(newLocalUser).to.not.have.property('bug')
      expect(newLocalUser.local).to.have.property('username').that.equals(username)
      expect(newLocalUser.local).to.have.property('password').that.equals(password)
      expect(newLocalUser.local).to.not.have.property('bug')
    })
    
    const id = 'test_id'
    const newGithubUser = new User({github: {username, id, bug}, bug})
    it('New custom github User is created properly', function(){
      expect(newGithubUser).to.have.property('github').that.is.an('object')
      expect(newGithubUser).to.not.have.property('bug')
      expect(newGithubUser.github).to.have.property('username').that.equals(username)
      expect(newGithubUser.github).to.have.property('id').that.equals(id)
      expect(newGithubUser.github).to.not.have.property('bug')
    })
  })
    
})