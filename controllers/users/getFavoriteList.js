const { User } = require("../../models");

const getFavoriteList = async (req, res, next) => {
  const { _id } = req.user;

  try {
    const result = await User.findOne({ _id });
    res.json({
      status: "success",
      code: 200,
      data: result.favorite,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getFavoriteList;
