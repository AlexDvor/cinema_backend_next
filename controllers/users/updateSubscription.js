const { User } = require("../../models");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const updateSubscription = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { subscription } = req.body;
    const isValidId = mongoose.Types.ObjectId.isValid(userId);
    if (!isValidId) throw new NotFound(`User with id: ${userId} not found`);

    const result = await User.findByIdAndUpdate(
      userId,
      { subscription },
      { new: true }
    );

    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateSubscription;
