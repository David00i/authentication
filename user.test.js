const MongoClient = require("mongodb").MongoClient;
const User = require("./user")

describe("User Account", () => {
	let client;
	beforeAll(async () => {
		client = await MongoClient.connect(
			"mongodb+srv://<username>:<password>@cluster0-qjqjg.mongodb.net/test?retryWrites=true&w=majority",
			{ useNewUrlParser: true },
		);
		User.injectDB(client);
	})

	afterAll(async () => {
		await client.close();
	})

	// test("Duplicate username", async () => {
	// 	const res = await User.register("test", "test")
	// 	expect().toBe()
	// })

	// test("User login invalid username", async () => {
	// 	const res = await User.login("test", "test")
	// 	expect().toBe()
	// })

	// test("User login invalid password", async () => {
	// 	const res = await User.login("test", "test")
	// 	expect().toBe()
	// })

	// test("User login successfully", async () => {
	// 	const res = await User.login("test", "test")
	// 	expect(res).toBe(true)
	// })

	// test('Test for Part A+B', async () => {
	// 	const res = await partab();
	// 	expect(res.length).toBe(1);
	// 	expect(res[0].accounts.length).toBe(4);
	// 	expect(res[0].accounts[0]._id.toString()).toBe("5ca4bbc7a2dd94ee581625e5");
	// 	expect(res[0].accounts[1]._id.toString()).toBe("5ca4bbc7a2dd94ee581625e3");
	// 	expect(res[0].accounts[2]._id.toString()).toBe("5ca4bbc7a2dd94ee581625e4");
	// 	expect(res[0].accounts[3]._id.toString()).toBe("5ca4bbc7a2dd94ee581625e6");
	// });
});