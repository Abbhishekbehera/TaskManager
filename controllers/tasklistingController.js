const task = require('../models/tasklisting')

module.exports.index=async (req,res) => {
    let allTasks = await task.find({})
    res.render('listings/index.ejs', { allTasks })
}
module.exports.newform=async (req, res) => {
    res.render('listings/new.ejs')
}
module.exports.createform=async (req, res) => {
    let newTask = new task(req.body.newtask)
    await newTask.save()
    res.redirect('/tasks')
}
module.exports.showform= async (req, res) => {
    let { id } = req.params
    let allTasks = await task.findById(id)
    res.render('listings/show.ejs', { allTasks })
}
module.exports.editform= async (req, res) => {
    let { id } = req.params
    let allTasks = await task.findById(id)
    res.render('listings/edit.ejs', { allTasks })
}
module.exports.updateform= async (req, res) => {
    let { id } = req.params
    await task.findByIdAndUpdate(id, { ...req.body.allTasks })
    res.redirect(`/tasks/${id}`)
}
module.exports.deleteform= async (req, res) => {
    let { id } = req.params
    const deleteTask = await task.findByIdAndDelete(id)
    console.log(deleteTask)
    res.redirect('/tasks')
}