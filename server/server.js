import express from 'express';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/user.route';
import profileRoute from './routes/profile.route';
import postRoute from './routes/post.route';
import authRoute from './routes/auth.route';

const app = express();

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

app.use(express.json({ extended: false }));

app.use('/api/user', userRoute);
app.use('/api/profile', profileRoute);
app.use('/api/post', postRoute);
app.use('/api/auth', authRoute);


app.listen(5000, () => { console.log("Server is running at http://localhost:5000") });