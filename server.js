const express = require('express');
const dbConnect = require('./database/index');
const {PORT} = require('./config/index');

const app = express();
app.use(express.json());
dbConnect();

app.get('/', (req, res) => {
  res.json({msg : 'Hello World123!'});
})
//Available Routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))  
app.listen(PORT, () => {
  console.log(`Example app listening on port `)
}) 