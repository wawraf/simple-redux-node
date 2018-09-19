const React = require('react');
const ReactDOM = require('react-dom');
const style = require('./styles/app-style');

/* Import Components */
const HelloWorld = require('./components/HelloWorld');

ReactDOM.render(<div id='myId' className='some'><HelloWorld/></div>, document.getElementById('main'));