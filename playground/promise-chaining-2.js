require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5cb9df701d1b3400e822da5a').then(() => {
	return Task.countDocuments({ completed: false })
}).then((result) => {
	console.log(result)
}).catch((e) => {
	console.log(e)
})