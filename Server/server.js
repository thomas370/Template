const express = require('express');
const app = express();
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require("morgan");
const postRoute = require('./routes/posts');

dotenv.config();

const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// Routes
app.use('/api/post', postRoute);


app.listen(port, () => {
    console.log(`L'application est en écoute sur http://localhost:${port}`);
});