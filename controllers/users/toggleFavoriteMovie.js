const { User } = require("../../models");

const toggleFavoriteMovie = async (req, res, next) => {
	try {
		const { _id } = req.user;
		const { movie } = req.body;

		User.findById(_id, function (err, user) {
			if (err) return console.error(err);
			const userMovieList = user.favorite.movies;
			const hasMovieCopy = userMovieList.some((item) => item.id === movie.id);

			if (!hasMovieCopy) {
				user.favorite.movies.unshift(movie);
				user.save(function (err) {
					if (err) throw err;
					res.json({
						status: "success",
						code: 200,
						data: movie,
					});
				});
			} else {
				const movieList = userMovieList.filter((item) => item.id !== movie.id);
				user.favorite.movies = [...movieList];
				user.save(function (err) {
					if (err) throw err;
					res.json({
						status: "success",
						code: 200,
						data: movie,
					});
				});
			}
		});
	} catch (error) {
		next(error);
	}
};

module.exports = toggleFavoriteMovie;
