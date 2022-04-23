const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mp3 = new Schema({
    name: {
        type: String,
        require: true
    },
    data: {
        type: Buffer,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('audios', Mp3);