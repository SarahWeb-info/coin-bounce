const express = require('express');
const dbConnect = require('./database/index');
const {PORT} = require('./config/index');
const router = require('./routes/index');
const app = express();
app.use(express.json());
app.use(router);
dbConnect();
app.get('/', (req, res) => {
    res.json({msg : 'Hello World123!'});
  })
  app.use(errorHandler);  
app.listen(PORT, () => {
  console.log(`Example app listening on port `)
}) 