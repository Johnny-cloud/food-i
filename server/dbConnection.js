import mongoose from "mongoose"

const connectToDB = () => {
    // mongoose.connect("mongodb://localhost/food_delivery")
    mongoose.connect("mongodb+srv://John:ynnhoj157@cluster0.76ioyjl.mongodb.net/foodi?retryWrites=true&w=majority")
    mongoose.connection.on("error", (err) => {
        console.log("Error connecting to DB")
    })
    mongoose.connection.once("open", () => console.log("DB connected successfully"))
}

export default connectToDB