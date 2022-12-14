const Jimp = require("jimp");

const resizeImageAvatar = async (url) => {
  try {
    const image = await Jimp.read(url);
    await image.resize(250, 250);
    await image.writeAsync(url);
  } catch (error) {
    console.log(error);
  }
};

module.exports = resizeImageAvatar;
