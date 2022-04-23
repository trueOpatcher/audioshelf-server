const express = require('express');
const router = express.Router();

const audio_Controller = require('../controllers/audio');

router.post('/upload/mp3', audio_Controller.upload_audio);

router.get('/download/mp3', audio_Controller.download_audio);



module.exports = router;