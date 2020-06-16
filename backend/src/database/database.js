const mongoose = require('mongoose');

let db = mongoose.connection;
const dbRoute = 'mongodb+srv://emerson:%21%40NqC%25t@cluster0-x08ut.gcp.mongodb.net/libary?retryWrites=true&w=majority';

mongoose.connect(dbRoute, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

db.once('open', () => console.log('conectado a database'));


module.exports = mongoose;