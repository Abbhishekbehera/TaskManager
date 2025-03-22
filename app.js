const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const task = require('./models/tasklisting')
const methodoverride = require('method-override')
const tasksRoute=require('./routes/tasksRoute')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodoverride('_method'))
app.use('/tasks',tasksRoute)

main()
    .then(() => {
        console.log('Connected to database')
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://behera:12345@cluster0.pe2oc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

app.listen(4000, () => {
    console.log('App is running on the server 4000')
})