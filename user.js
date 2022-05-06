let users;

class User {
	static async injectDB(conn) {
		users = await conn.db("authentication").collection("users")
	}

	static async register(username) {
		return username = await users.findOne({ username:"david" }, { projection: { _id: 0, username: 1 } })
		// TODO: Check if username exists

		// TODO: Hash password

		// TODO: Save user to database
	}

	// static async login(username, password) {
	// 	// TODO: Check if username exists

	// 	// TODO: Validate password

	// 	// TODO: Return user object
	// 	return;
	// }
}

module.exports = User;