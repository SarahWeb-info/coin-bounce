const express = require('express');
const dbConnect = require('./database/index');
const {PORT} = require('./config/index');
const app = express();
// const port = 5000;
dbConnect();
app.get('/', (req, res) => {
    res.json({msg : 'Hello World123!'});
  })
app.listen(PORT, () => {
  console.log(`Example app listening on port `)
})