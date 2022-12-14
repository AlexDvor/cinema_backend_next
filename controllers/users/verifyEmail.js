const { NotFound } = require("http-errors");
const { User } = require("../../models");

const verifyEmail = async (req, res) => {
  const { verifyToken } = req.params;
  const user = await User.findOne({ verifyToken });
  if (!user) {
    throw NotFound();
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verifyToken: null,
  });

  res.json({
    message: "Verification successful",
  });
};

module.exports = verifyEmail;
