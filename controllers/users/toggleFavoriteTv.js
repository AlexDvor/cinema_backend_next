const { User } = require("../../models");

const toggleFavoriteTv = async (req, res, next) => {
	try {
		const { _id } = req.user;
		const { tv } = req.body;

		User.findById(_id, function (err, user) {
			if (err) return console.error(err);
			const userTvList = user.favorite.tv;
			const hasTvCopy = userTvList.some((item) => item.id === tv.id);

			if (!hasTvCopy) {
				user.favorite.tv.unshift(tv);
				user.save(function (err) {
					if (err) throw err;
					res.json({
						status: "success",
						code: 200,
						data: tv,
					});
				});
			} else {
				const tvList = userTvList.filter((item) => item.id !== tv.id);
				user.favorite.tv = [...tvList];
				user.save(function (err) {
					if (err) throw err;
					res.json({
						status: "success",
						code: 200,
						data: tv,
					});
				});
			}
		});
	} catch (error) {
		next(error);
	}
};

module.exports = toggleFavoriteTv;
