const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},

		password: {
			type: String,
			required: [true, "Password is required"],
		},

		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
		},

		token: {
			type: String,
			default: null,
		},

		avatarURL: {
			type: String,
			required: true,
		},

		isAdmin: {
			type: Boolean,
			default: false,
		},
		favorite: {
			movies: [],
			actors: [],
		},
	},
	{ versionKey: false, timestamps: true }
);

userSchema.methods.comparePassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

const User = model("user", userSchema);

module.exports = {
	User,
};
