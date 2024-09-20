const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const fileUpload = require("express-fileupload")
const authRouter = require("./routes/auth.routes")
const fileRouter = require("./routes/file.routes")

const app = express()
dotenv.config(); 

const PORT = process.env.serverPort
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
        await mongoose.connect(process.env.dbUrl, {
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
