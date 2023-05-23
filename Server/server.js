const express = require('express');
const app = express();
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors');
const userRoute = require('./routes/users');


dotenv.config();


async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to Mongo DB !');
    } catch (error) {
        console.log(error);
    }
}

connect();

const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(cors());

// Routes
app.use('/user', userRoute);


app.listen(port, () => {
    console.log(`L'application est en écoute sur http://localhost:${port}`);
});