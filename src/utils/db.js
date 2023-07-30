import mongoose from "mongoose";

const connect = async() => {
    try{
        await mongoose.connect(process.env.Mongo);
    } catch(e) {
        throw new Error("Couldn't connect to Mongo");
    }
}

export default connect;