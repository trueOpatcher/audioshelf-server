const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Img = new Schema({
    originalname: {
        type: String,
        require: true
    },
    data: {
        type: Buffer,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('images', Img);