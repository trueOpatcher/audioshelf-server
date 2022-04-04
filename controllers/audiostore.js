
const mongoose = require('mongoose');
const Folder = require('../models/folder');
const multer = require('multer');
const Img = require('../models/image');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000';

exports.fetch_folder = (req, res) => {
    const db = mongoose.connection.db;
    const folderName = req.query.name;

    db.collection('folders').findOne({folderName: folderName}).then(folderDoc => {
        if(folderDoc === null) {
            return res.status(200).send(null);
        }
        
        const folder = folderDoc;
        return res.status(200).send(folder);
        

        
    })

}

exports.fetch_folders = (req, res, next) => {
    const db = mongoose.connection.db;
    const folders = [];

    db.collection('folders').find({}).forEach(folder => {
        folders.push(folder);
    }).then(() => {
        return res.status(200).send(folders);
    }).catch(err => console.log(err));
}



exports.create_folder = (req, res, next) => {
    const db = mongoose.connection.db;
    const folderName = req.body.folderName;

    db.collection('folders').findOne({ folderName: folderName}).then(isExists => {
        if(isExists) {
            return res.send(null);
        }

        const folder = Folder({
            folderName: folderName
        });

        folder.save().then(() => {
            console.log(folderName);
            return res.status(200).send({folderName});
        })
    })
    
}


exports.upload_data = (req, res) => {

    const db = mongoose.connection.db;
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });
    upload.array('images')
    (req, res, (err) => {   

        console.log(req.body);
        const folderName = req.body.folderName;
        const faceImage = req.files[0];
        const backImage = req.files[1];
        const bookName = req.body.bookName;
        const author = req.body.author;
        const description = req.body.description;

        
        const handleFaceImage = new Promise((resolve, reject) => {
            const mimetype = faceImage.mimetype;
            const originalname = faceImage.originalname;
            const data = faceImage.buffer;
            const size = faceImage.size;

            const storeFaceImage = new Img({
                originalname: originalname,
                mimetype: mimetype,
                data: data,
                size: size
            })
            
            storeFaceImage.save().then(doc => {
                const id = doc._id.toString();
                const url = SERVER_URL + '/audiostore/download/img?id=' + id;
                      
                resolve(url);
            })
        });

        const handleBackImage = new Promise((resolve, reject) => {
            const mimetype = backImage.mimetype;
            const originalname = backImage.originalname;
            const data = backImage.buffer;
            const size = backImage.size;

            const storeBackImage = new Img({
                originalname: originalname,
                data: data,
                mimetype: mimetype,
                size: size
            })
            
            storeBackImage.save().then(doc => {
                const id = doc._id.toString();
                const url = SERVER_URL + '/audiostore/download/img?id=' + id;
                    
                resolve(url);
            })
        });


        Promise.all([handleFaceImage, handleBackImage]).then(imageUrls => {
            const faceImgUrl = imageUrls[0];
            const backImgUrl = imageUrls[1];

            const filter = {folderName: folderName};
            const update = {
                faceImage:  faceImgUrl,
                backImage: backImgUrl,
                bookName: bookName,
                author: author,
                description: description
            };
            
            db.collection('folders').updateOne(filter,{$set: update},{new: true}).then(() => {
                console.log('done');
            })

            res.end();
        }).catch(error => {
            console.log(error);
        })

        

    })
    
}


exports.download_img = (req, res) => {
    const db = mongoose.connection.db;

    const id = new mongoose.Types.ObjectId(req.query.id);

    db.collection('images').findOne({_id: id}).then(imgDoc => {
        const mimetype = imgDoc.mimetype;

        const buffer = imgDoc.data.toString('base64');
        const buff = Buffer.from(buffer, 'base64');
        
        res.setHeader('content-type', mimetype);

        res.send(buff);
    })  

}



exports.get_catalog = (req, res) => {

}

exports.post_catalog = (req, res) => {

}