const { Schema, model } = require("mongoose");
const config = require("../config/auth.config");
const { v4: uuidv4 } = require("uuid");

const RefreshTokenSchema = new Schema({
	token: String,
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	expiryDate: Date,
});

RefreshTokenSchema.statics.createToken = async function (user) {
	let expiredAt = new Date();

	expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtRefreshExpiration);

	let _token = uuidv4();

	let _object = new this({
		token: _token,
		user: user._id,
		expiryDate: expiredAt.getTime(),
	});

	let refreshToken = await _object.save();

	return refreshToken.token;
};

RefreshTokenSchema.statics.verifyExpiration = (token) => {
	return token.expiryDate.getTime() < new Date().getTime();
};

const RefreshToken = model("RefreshToken", RefreshTokenSchema);

module.exports = { RefreshToken };
