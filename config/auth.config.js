const { SECRET_KEY, JWT_EXPIRATION, JWT_REFRESH_EXPIRATION } = process.env;

module.exports = {
	secret_key: SECRET_KEY,
	jwtExpiration: Number(JWT_EXPIRATION), // 1 min
	jwtRefreshExpiration: Number(JWT_REFRESH_EXPIRATION), // 2 min

	/* for test */
	// jwtExpiration: 60,          // 1 minute
	// jwtRefreshExpiration: 120,  // 2 minutes
};
