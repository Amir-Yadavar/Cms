import mongoose from "mongoose";

const urlMongoDb = "mongodb://localhost:27017/cms-test"

const connectToDb = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return false
        } else {

            await mongoose.connect(urlMongoDb)
            console.log("connected to Db ..");
        }
    } catch (error) {
        console.log(error);
    }

}

export default connectToDb