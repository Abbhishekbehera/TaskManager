const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:String,
    priority:{
        type:String,
        require:true
    }
})

const task=new mongoose.model('task',taskSchema)
module.exports=task