const { SECRET_KEY, JWT_EXPIRATION, JWT_REFRESH_EXPIRATION } = process.env;

module.exports = {
	secret_key: SECRET_KEY,
	jwtExpiration: Number(JWT_EXPIRATION), // 1 min
	jwtRefreshExpiration: Number(JWT_REFRESH_EXPIRATION), // 4 min
};
