var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todos');
mongoose.Promise = global.Promise;
module.exports = mongoose;
