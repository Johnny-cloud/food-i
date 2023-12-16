import mongoose from "mongoose"

const connectToDB = () => {
    mongoose.connect("mongodb://localhost/food_delivery")
    mongoose.connection.on("error", (err) => {
        console.log("Error connecting to DB")
    })
    mongoose.connection.once("open", () => console.log("DB connected successfully"))
}

export default connectToDB