import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Router from './routes/route.js';
const app = express();
const PORT = 8000;

app.use(cors());
mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true)
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// import mongoose from 'mongoose';
const MONGOURI = `mongodb+srv://akankshapawar:Blog123@cluster0.24rfbqs.mongodb.net/Blog?retryWrites=true&w=majority`;
mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log("err in connection",err);
})
app.use('/', Router);







// if(process.env.NODE_ENV === "production"){
//     app.use(express.static("client/build"))
// }



app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));