module.exports = ({ electron, envVariables }) => ({
  start: () => {
    const { app, BrowserWindow } = electron;
    const createBrowserWindow = () => {
      const browserWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
        },
      });
      browserWindow.loadFile('src/index.html');
      if(envVariables.NODE_ENV !== 'production') {
        // Open the DevTools.
        browserWindow.webContents.openDevTools()
      }
    }
    app.on('ready', createBrowserWindow);
  },
});
