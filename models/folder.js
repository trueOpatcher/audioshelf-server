const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Folder_Schema = new Schema({
    folderName: {
        type: String,
        required: true
    },
    files: [{
        name: String,
        url: String
    }],

    faceImage: String,
    backImage: String,
    name: String,
    author: String,
    description: String
})

module.exports = mongoose.model('folders', Folder_Schema);