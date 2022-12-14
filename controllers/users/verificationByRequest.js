const { User } = require("../../models");
const sendEmail = require("../../helpers/sendEmail");
const { NotFound } = require("http-errors");

const verificationByRequest = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw NotFound();
    if (user.verify) {
      return res
        .status(400)
        .json({ message: "Verification has already been passed" });
    }
    const mail = {
      to: email,
      subject: "Подтверждения email",
      html: `<a  href="http://localhost:4040/api/users/verify/${user.verifyToken}" target="_blank">Подтвердить email</a>`,
    };
    await sendEmail(mail);
    res.status(200).json({ message: "Verification email sent" });
  } catch (error) {
    next(error);
  }
};

module.exports = verificationByRequest;
