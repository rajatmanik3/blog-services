const mongoose = require('mongoose');
const config = require('config');
mongoose.connect(config.get('db.connection_string'), {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!')
});