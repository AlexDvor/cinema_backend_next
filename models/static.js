const { Schema, model } = require("mongoose");

const staticSchema = new Schema({
	guests: {
		type: Number,
		default: 0,
	},
});

const Static = model("static", staticSchema);

module.exports = {
	Static,
};
