import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors());
mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true)
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}
const PORT = process.env.PORT || 8000;

const URL = process.env.MONGODB_URI || `mongodb+srv://akankshapawar:Blog123@cluster0.24rfbqs.mongodb.net/Blog?retryWrites=true&w=majority`;

Connection(URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));