const express = require("express");
const router = express.Router();
const passport = require("passport");


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