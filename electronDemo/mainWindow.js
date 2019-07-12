const {BrowserWindow} = require('electron')

exports.win

exports.createWindow = ()=>{
    this.win = new BrowserWindow({
        height: 650,
        width:500,
        webPreferences: {
            nodeIntegration: true
        }
    })

    this.win.webContents.openDevTools()
    this.win.loadFile('./render/main.html')
    this.win.on('closed', ()=>{
        this.win=null
    })
}