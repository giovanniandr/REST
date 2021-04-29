const express = require('express'),
router = express.Router();

//Controllers for each crud needed.
var itemCtrl = require('./item-controller');
userCtrl = require('./user-controller');
imageCtrl = require('./image-controller');

router.get('/hello', itemCtrl.getWorld);
router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);
router.post('/hello', itemCtrl.postWorld);

//Full CRUD
router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.get('/users/:id', userCtrl.updateUser);
router.get('/users/:id', userCtrl.deleteUser);

//Uploud path folder
module.exports.UPLOAD_PATH = "uploads";
var multer = require("multer");
var upload = multer({dest: module.exports.UPLOAD_PATH});

//Router js path
module.exports = router;