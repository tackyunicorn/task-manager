require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5cb744ba4244102fc877527d', { age: 1 }).then((user) => {
	console.log(user)
	return User.countDocuments({ age: 1 })
}).then((result) => {
	console.log(result)
}).catch((e) => {
	console.log(e)
})