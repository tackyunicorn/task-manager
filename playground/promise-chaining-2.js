require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5cb9df701d1b3400e822da5a').then(() => {
// 	return Task.countDocuments({ completed: false })
// }).then((result) => {
// 	console.log(result)
// }).catch((e) => {
// 	console.log(e)
// })

const deleteTaskAndCount = async (id) => {
	const task = await Task.findByIdAndDelete(id)
	const count = await Task.countDocuments({ completed: false })
	return count
}

deleteTaskAndCount('5cb74851e72b831be896ee7a').then((count) => {
	console.log(count)
}).catch((e) => {
	console.log(e)
})