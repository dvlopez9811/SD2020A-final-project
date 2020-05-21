const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name:String
});

module.exports = mongoose.model('persona', PersonSchema);
