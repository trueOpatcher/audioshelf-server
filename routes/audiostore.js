const express = require('express');
const router = express.Router();

const audiostore_Controller = require('../controllers/audiostore');

router.get('/catalog', audiostore_Controller.get_catalog);
router.post('/catalog', audiostore_Controller.post_catalog);


router.get('/fetchfolder', audiostore_Controller.fetch_folder);
router.get('/fetchfolders', audiostore_Controller.fetch_folders);

router.post('/createfolder', audiostore_Controller.create_folder);

router.post('/upload/data', audiostore_Controller.upload_data);

router.get('/download/img', audiostore_Controller.download_img);

module.exports = router;
