const mongoose = require('mongoose');
const multer = require('multer');

const Mp3 = require('../models/mp3');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000';



exports.upload_audio = (req, res, next) => {

    const db = mongoose.connection.db;
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });
    upload.single('track')
    (req, res, (err) => {
        if (err) {
            return res.status(400).send({ message: "Upload Request Validation Failed" });
        } else if (!req.body.trackName) {
            return res.status(400).send({ message: "No track name in request body" });
        }
        else if (!req.session.email) {
            return res.status(400).send({ message: "User is not authenticated" });
        }
        console.log(req.file);
        const folderName = req.body.folderName;
        const trackName = req.body.trackName;
        const buffer = req.file.buffer;
        const size = req.file.size;
        let trackUrl = SERVER_URL + '/audio/download/mp3?name=' + trackName;

       
        
        
        const filter = { folderName: folderName };
        db.collection('folders').findOne(filter).then(resDoc => {
            
            const files = resDoc.files;
            
            files.push({name: trackName, url: trackUrl});
            
            db.collection('folders').updateOne(filter,{$set: {folderName, files}}).then(() => {
                console.log('updated');

                const mp3 = new Mp3({
                    name: trackName,
                    data: buffer,
                    size: size
                })

                mp3.save().then(() => {
                    console.log('trackSaved');

                    return res.status(201).send({ message: "File uploaded successfully "});
                    
                })

                
            }).catch(error => console.log(error));
            
            

            

        }).catch(error => {
            console.log(error);
        })
        
    })
}


exports.download_audio = (req, res, next) => {
    const db = mongoose.connection.db;
    const trackName = req.query.name;


    db.collection('audios').findOne({name: trackName}).then(trackDoc => {
        
        if(trackDoc === null) {
            res.status(400).send({m: 'file not found'});
        }
        const data = trackDoc.data;
        const size = trackDoc.size;
        console.log(trackDoc.size);

        const buffer = data.toString('base64');
        const buff = Buffer.from(buffer, 'base64');

        res.setHeader("content-length", size);
        res.setHeader("content-type", "audio/mp3");
        res.setHeader("accept-ranges", "bytes");

        res.send(buff);

    })
}