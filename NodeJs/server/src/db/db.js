const mongoose = require("mongoose")


async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("database connect here ")
    } catch (error) {
       console.log("error from db ",error)   
    }
}

module.exports = connectDb