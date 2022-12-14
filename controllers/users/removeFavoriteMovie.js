const { User } = require("../../models");

const removeFavoriteMovie = async (req, res, next) => {
  const { _id } = req.user;
  const { movieId } = req.params;
  try {
    await User.updateOne(
      { _id: _id },
      { $pull: { favorite: { id: Number(movieId) } } }
    );

    res.json({
      status: "success",
      code: 200,
      data: {
        id: Number(movieId),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeFavoriteMovie;
