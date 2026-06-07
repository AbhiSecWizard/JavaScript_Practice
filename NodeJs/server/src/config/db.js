const mongoose = require("mongoose")

const connectDb = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://Abhishek:ndKTbdG3poo630gB@learningdb.f5x31em.mongodb.net/collectionRelation")
        console.log("db connccted")
    } catch (error) {
        console.log("error from db",error)
    }
}
module.exports = connectDb