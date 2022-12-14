const { User } = require("../../models");

const addFavoriteMovie = async (req, res, next) => {
  try {
    const { _id } = req.user;
    User.findById(_id, function (err, user) {
      if (err) return console.error(err);
      user.favorite.unshift(req.body);
      user.save(function (err) {
        if (err) throw err;
        console.log("The operation was successful");
      });
    });

    res.json({
      status: "success",
      code: 200,
      data: req.body,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addFavoriteMovie;
