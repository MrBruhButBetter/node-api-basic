import express from 'express'
import dotenv from "dotenv"

dotenv.config()
const app = express()

const PORT = import.meta.PORT || 8080;

app.get("/", (request, response) => {
    response.json({
        message: "Helo from server!"
    })
})

app.listen(PORT, () => {
    console.log(`Server listing on hhtps://locahost:${PORT}`)
})