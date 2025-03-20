const express = require('express')
const router = express.Router()
const methodoverride = require('method-override')
const mongoose = require('mongoose')
const task = require('../models/tasklisting')
const tasklistingController = require('../controllers/tasklistingController')
//Index Route
router.get('/', tasklistingController.index)
//New Route
router.get('/new', tasklistingController.newform)
//Create Route
router.post('/', tasklistingController.createform)
//Show Route
router.get('/:id', tasklistingController.showform)
//Edit Route
router.get('/:id/edit', tasklistingController.editform)
//Update Route
router.put('/:id', tasklistingController.updateform)
//Delete Route
router.delete('/:id', tasklistingController.deleteform)

module.exports = router