// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database!')
	}

	const db = client.db(databaseName)

	// db.collection('users').findOne({ _id: new ObjectID("5cb6b2ef1274ef121088709b") }, (error, user) => {
	// 	if (error) {
	// 		return console.log('Unable to fetch user!')
	// 	}

	// 	console.log(user)
	// })

	// db.collection('users').find({ age: 21 }).toArray((error, users) => {
	// 	console.log(users)
	// })

	db.collection('tasks').findOne({ _id: new ObjectID("5cb6ae399790f90804a0fc3b") }, (error, task) => {
		if (error) {
			return console.log('Unable to fetch task')
		}

		console.log(task)
	})

	db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
		console.log(tasks)
	})
})