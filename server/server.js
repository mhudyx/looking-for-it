import express from 'express';
import config from './config';
import mongoose from 'mongoose';

const app = express();

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

app.listen(5000, () => { console.log("Server is running at http://localhost:5000") });