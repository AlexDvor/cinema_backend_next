const { User } = require("../../models");

const toggleFavoriteActor = async (req, res, next) => {
	try {
		const { _id } = req.user;
		const { actor } = req.body;

		User.findById(_id, function (err, user) {
			if (err) return console.error(err);
			const userActorList = user.favorite.actors;
			const hasActorCopy = userActorList.some((item) => item.id === actor.id);

			if (!hasActorCopy) {
				user.favorite.actors.unshift(actor);
				user.save(function (err) {
					if (err) throw err;
					res.json({
						status: "success",
						code: 200,
						data: actor,
					});
				});
			} else {
				const actorList = userActorList.filter((item) => item.id !== actor.id);
				user.favorite.actors = [...actorList];
				user.save(function (err) {
					if (err) throw err;
					res.json({
						status: "success",
						code: 200,
						data: actor,
					});
				});
			}
		});
	} catch (error) {
		next(error);
	}
};

module.exports = toggleFavoriteActor;
