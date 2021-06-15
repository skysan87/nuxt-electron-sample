const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let win

async function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
      webSecurity: false, // ローカルファイルの読込許可
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (process.env.MODE === 'dev') {
    win.loadURL('http://localhost:3000/')
  } else {
    // production構成時
    await win.loadFile(path.resolve(__dirname, '../../dist/index.html'))
  }

  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

// IPC通信(renderer -> main -> renderer)
// rendererプロセスからの通知を受信し、応答する
ipcMain.handle('ipc-send-to-main1', async (ev, args) => {
  const result = await test(args)
  return result
})

// IPC通信(renderer -> main)
ipcMain.on('ipc-send-to-main2', (ev, args) => {
  console.log('renderer', args)
})

function test (param) {
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log('renderer', param)
        resolve('2')
      }
    , 1000)
  })
}

setTimeout(() => {
  // IPC通信(main -> renderer)
  win.webContents.send("ipc-recieve-from-main", 'hello from main');
}
, 30000)