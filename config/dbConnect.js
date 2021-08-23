import mongoose from "mongoose";

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      })
    }
    
    export default dbConnect;