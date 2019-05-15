const { createContainer, asFunction, asValue } = require('awilix');

// External Dependencies
const electron = require('electron');
const getenv = require('getenv');

// Internal Files
const electronMain = require('./electronMain');

const container = createContainer();

let envVariables;

try {
  envVariables = getenv.multi({
    NODE_ENV: ['NODE_ENV', 'development'],
  });
  // if (!envVariables.IMAGE_STORE_PATH) {
  //   throw new Error('Folder for image to be saved to must be provided');
  // }
} catch (error) {
  winston.error(error, 'Error while loading environment variables');
}

// External Libraries
container.register({
  electron: asValue(electron),
});

// Internal files / app
container.register({
  electronMain: asFunction(electronMain).singleton(),
});

// Config
container.register({
  envVariables: asValue(envVariables),
});

// Utils
container.register({
});


// Repositories
container.register({
});

module.exports = container.cradle;
