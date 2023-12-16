import express from 'express'
import { config } from 'dotenv'
import connectToDB from './dbConnection.js'
import {productRoutes} from "./routes/index.js"
import Seeder from './seeder.js'

const app = express()

config()

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