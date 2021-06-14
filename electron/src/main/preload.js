// rendererから呼ぶIPC通信処理を書く

const { contextBridge, ipcRenderer} = require("electron")

contextBridge.exposeInMainWorld(
  "api", {
    // renderer -> main -> renderer
    // rendererでのコール方法: "window.api.sendToMainWithResponse(args)"
    sendToMainWithResponse: async (args) => await ipcRenderer.invoke("ipc-send-to-main1", args),

    // renderer -> main
    // rendererでのコール方法: "window.api.sendToMain(args)"
    sendToMain: async (args) => ipcRenderer.send("ipc-send-to-main2", args),

    // main -> renderer
    // rendererでのコール方法: "window.api.recieveFromMain((arg) => { 処理 })"
    recieveFromMain: (listener) => {
      ipcRenderer.on("ipc-recieve-from-main", (event, args) => listener(args))
    }
  }
)
