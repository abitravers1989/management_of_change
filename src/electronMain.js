module.exports = ({ electron }) => ({
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
    }
    app.on('ready', createBrowserWindow);
  },
});
