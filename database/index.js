const mongoose = require('mongoose');
const {MONGO_CONNECTION_STRING} = require('../config/index');

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(MONGO_CONNECTION_STRING) ;
        console.log(`Mongo connected to ${conn.connection.host}`);
    }
    catch(error) {
        console.log(`error: ${error} `);
    }
}
module.exports = dbConnect;