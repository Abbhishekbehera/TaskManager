const mongoose = require('mongoose')
const initdb = require('./data.js')
const task = require('../models/tasklisting.js')
main()
    .then(() => {
        console.log('Connected to database')
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/task_manager');
}

const dataBase = async () => {
    await task.insertMany(initdb.data)
    console.log('Data is saved')
}
dataBase()