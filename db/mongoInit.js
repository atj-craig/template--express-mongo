import { MongoClient } from "mongodb";
import config from 'config'
const conf = config.get("mongo")

const client = new MongoClient(conf.uri, conf.opts)

const connect = async () => {
	await client.connect()
		.then(connection => {
			console.log("Database Connection Successful :)")
		})
		.catch(err => {
			console.error("*** Database Connection Error ***")
			console.error(err)
		})
}

const db = client.db(conf.db)
const users = db.collection('users')

export { connect, db, users }