const { createContainer, asFunction, asValue } = require('awilix');

// External Dependencies
const electron = require('electron');

// Internal Files
const electronMain = require('./electronMain');

const container = createContainer();

// let envVariables;

// try {
//   envVariables = getenv.multi({
//     PORT: ['PORT', 3000],
//     IMAGE_STORE_PATH: ['IMAGE_STORE_PATH'],
//   });
//   if (!envVariables.IMAGE_STORE_PATH) {
//     throw new Error('Folder for image to be saved to must be provided');
//   }
// } catch (error) {
//   winston.error(error, 'Error while loading environment variables');
// }

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
});

// Utils
container.register({
});


// Repositories
container.register({
});

module.exports = container.cradle;
