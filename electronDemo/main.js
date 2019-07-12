// Modules
const {app,ipcMain} = require('electron')

const mainWindow = require('./mainWindow.js')
const readItem = require('./readItem')

ipcMain.on('new-item', (e, itemURL) => {
    readItem( itemURL, (item) => {
      e.sender.send('new-item-success', item)
    })
})


app.on('ready', () => {
  mainWindow.createWindow()
})

// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) mainWindow.createWindow()
})
