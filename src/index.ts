import express from 'express'
import dotenv from 'dotenv'
import "./database/connection";
import cors from 'cors'
import errorHandler from "./errors/handler";
import router from "./routes";
dotenv.config()

const app = express()


app.use(express.json())
app.use(cors())
app.use(router)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log('App running at', process.env.PORT)
})
