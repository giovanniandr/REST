const express = require('express'),
router = express.Router();

var
// itemCtrl = require('./item-controller'),
ingridientCtrl = require('./ingridient-controller');

// router.get('/hello', itemCtrl.getWorld);
// router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);
// router.post('/hello', itemCtrl.postWorld);

router.post('/ingridients', ingridientCtrl.createIngridient);
router.get('/ingridients', ingridientCtrl.getIngridients);
router.get('/ingridients/:id', ingridientCtrl.getIngridient);
router.put('/ingridients/:id', ingridientCtrl.updateIngridient);
router.delete('/ingridients/:id', ingridientCtrl.deleteIngridient);

module.exports.UPLOAD_PATH = "uploads";

var multer = require("multer");
var upload = multer({ dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;