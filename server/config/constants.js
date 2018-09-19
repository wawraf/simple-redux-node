// constants.js

const devConfig = {
  MONGO_URL: process.env.DB
};
const testConfig = {
  MONGO_URL: process.env.DB
};
const prodConfig = {
  MONGO_URL: process.env.DB
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};