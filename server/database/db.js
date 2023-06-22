import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const MONGO_URI="mongodb+srv://AloneSoul:fWlzbB0SPV2JmQDB@cluster0.gox2qru.mongodb.net/ishare_db?retryWrites=true&w=majority";
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;