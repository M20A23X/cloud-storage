const express = require("express")
const mongoose = require("mongoose")
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require("config")
const fileUpload = require("express-fileupload")
const authRouter = require("./routes/auth.routes")
const fileRouter = require("./routes/file.routes")
const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')
const path = require("path");

app.use(fileUpload({}))
app.use(corsMiddleware)
app.use(express.json())
app.use(express.static('static'))
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')))
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)
app.use('*', function (request, response) {
    response.sendFile(path.join(__dirname, '..', '..', 'client', 'build', 'index.html'));
});

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
