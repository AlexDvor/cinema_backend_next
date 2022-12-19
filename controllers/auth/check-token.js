const { User } = require("../../models");

const checkToken = async (req, res) => {
	const { _id } = req.user;
	const result = await User.findOne({ _id });
	console.log("🚀 - authorization", req.body);
	console.log("🚀 - result", result);

	res.json({
		status: "success",
		code: 200,
		data: {
			user: {
				name: result.name,
				email: result.email,
				subscription: result.subscription,
			},
		},
	});
};

module.exports = checkToken;

// async getNewTokens({ refreshToken }: RefreshTokenDto) {
// 		if (!refreshToken) throw new UnauthorizedException('Please sign in!')

// 		const result = await this.jwtService.verifyAsync(refreshToken)

// 		if (!result) throw new UnauthorizedException('Invalid token or expired!')

// 		const user = await this.UserModel.findById(result._id)

// 		const tokens = await this.issueTokenPair(String(user._id))

// 		return {
// 			user: this.returnUserFields(user),
// 			...tokens,
// 		}
// 	}

// 	async findByEmail(email: string) {
// 		return this.UserModel.findOne({ email }).exec()
// 	}

// 	async validateUser(email: string, password: string): Promise<UserModel> {
// 		const user = await this.findByEmail(email)
// 		if (!user) throw new UnauthorizedException('User not found')

// 		const isValidPassword = await compare(password, user.password)
// 		if (!isValidPassword) throw new UnauthorizedException('Invalid password')

// 		return user
// 	}

// 	async issueTokenPair(userId: string) {
// 		const data = { _id: userId }

// 		const refreshToken = await this.jwtService.signAsync(data, {
// 			expiresIn: '15d',
// 		})

// 		const accessToken = await this.jwtService.signAsync(data, {
// 			expiresIn: '1h',
// 		})

// 		return { refreshToken, accessToken }
// 	}

// 	returnUserFields(user: UserModel) {
// 		return {
// 			_id: user._id,
// 			email: user.email,
// 			isAdmin: user.isAdmin,
// 		}
// 	}
// }
