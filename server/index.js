import express from 'express'
import { config } from 'dotenv'
import connectToDB from './dbConnection.js'
import {productRoutes} from "./routes/index.js"
import Seeder from './seeder.js'
import cors from "cors"
import session from 'express-session'

const app = express()

app.use(express.json()) // Enables receiving of json request from the server

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

app.use(session({
        secret: "mySecretOnlineFarmStore",
        saveUninitialized: false,
        resave: false,

        // Development
        cookie:{
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        }

        // // Production
        // cookie:{
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: "none",
        // }
}))

config() // Enables using the process.env

const port = process.env.PORT || 5001

console.log(process.env.PORT)

connectToDB()

// Seeder.seedData()

app.use("/products", productRoutes)

app.get("/", (req, res) => {
    res.send("<h1> Backend Food Delivery </h1>")
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})