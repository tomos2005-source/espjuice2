// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
// 1. 標準ブロックでシリアルを初期化
serial.redirect(SerialPin.P1, SerialPin.P2, BaudRate.BaudRate115200)

// 2. 拡張ブロックを使用
wifiBoard.connectWiFi("SSID", "PASS")

basic.forever(function () {
    if (wifiBoard.isConnected()) {
        let temp = wifiBoard.getSensorData(wifiBoard.SensorType.T1)
        serial.writeLine("Log: " + temp) // 標準のシリアル出力も併用可能
        wifiBoard.sendTB()
    }
    basic.pause(5000)
})