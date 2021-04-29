//Const and express required 
const express = require('express'),
router = express.Router();

//Controllers
var userCtrl = require('./user-controller');
var imageCtrl = require('./image-controller');
var ingridientsdCtrl = require('./ingridients-controller');

//Vars
var multer = require("multer");
var upload = multer({ dest: module.exports.UPLOAD_PATH});

//Full CRUD for users
router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

//Full CRUD for ingridients
router.post('/ingridients', ingridientsdCtrl.createIngridient);
router.get('/ingridients', ingridientsdCtrl.getIngridients);
router.get('/ingridients/:id', ingridientsdCtrl.getIngridient);
router.put('/ingridients/:id', ingridientsdCtrl.updateIngridient);
router.delete('/ingridients/:id', ingridientsdCtrl.deleteIngridient);

//Full CRUD for images
router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

//Modules
module.exports.UPLOAD_PATH = "uploads";
module.exports = router;



