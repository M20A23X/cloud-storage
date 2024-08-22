const express = require("express")
const mongoose = require("mongoose")

process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require("config")

const app = express()
const PORT = config.get('serverPort')

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {

    }
}

start()