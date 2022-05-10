import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
//import albumRouter from './routes/albumRouter';
import { readdirSync } from 'fs';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

readdirSync('./routes').map((r)=> app.use('/api',require(`./routes/${r}`)));

mongoose.connect(process.env.DATABASE)
.then(console.log('Database is connected'))
.catch((err)=>console.error('Database connection failed',err))

//routes
//app.use("/api",albumRouter)
const port = process.env.PORT || 8000;
app.listen(port ,() => console.log(`Server is running on ${port}`))

