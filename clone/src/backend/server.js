const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGODB_KEY);

console.log(process.env);

app.get('/', (req, res) => {
  res.send("<h1>hello world!</h1>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on PORT ' + PORT)
})