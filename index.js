const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;


mongoose.connect("mongodb://localhost/assignment", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = mongoose.connection;

connect.on("open", () => {
    console.log("DB connected... ");
})


app.use(express.json());
const dishRouter = require('./routes/dishRouter');
const userRouter = require('./routes/user');
const favoriteRouter = require('./routes/favoriteRouter');

app.use('/dishes', dishRouter);
app.use('/user', userRouter);
app.use('/favorite', favoriteRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})