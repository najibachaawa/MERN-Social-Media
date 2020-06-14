const express = require("express");
const router = express.Router();
const passport = require("passport");
var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })
global.crypto = require('crypto')
global.mime = require('mime')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        cb(null, raw.toString('hex') + Date.now() + '.' + mime.getExtension(file.mimetype));
      });
    }
  });
  var upload = multer({ storage: storage });


router.post('/avatar/:id', passport.authenticate('jwt', { session: false }), upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    const params = req.params
    if(params.id){
        userId = params.id
        User.findByIdAndUpdate(userId,{imageUrl:req.file.filename}, function (err, result) {});
        res.status(200).json({file : req.file.filename});
    }
  })
  

router.get("/", passport.authenticate('jwt', { session: false }), (req, res, next) => {
    if (req.user) {
      const userId = req.user._id
      console.log("userId", userId)
      User.aggregate(
        [
          {
            '$match': {
              '_id': userId
            }
          },
          {
            '$project': {
              'hash': 0,
              'salt': 0
            }
          }
        ], function (err, result) {
          if (!result) {
            return res.status(404).json({
              message: "user not found"
            });
          } else {
            console.log(result);
            res.status(200).json(result);
          }
        });
    }
  });
  
  router.put("/edit", passport.authenticate('jwt', { session: false }), (req, res, next) => {
    if (req.user) {
      const userId = req.user._id
      var user = req.body;
      if (user.role) {
          delete user.role
      }
  
      User.findByIdAndUpdate(userId,user, function (err, result) {
        if (!result) {
          return res.status(404).json({
            message: "user not found"
          });
        } else {
          console.log(result);
          return res.status(204).json();
        }
      });
    }
  });


module.exports = router;