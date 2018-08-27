const express = require('express')
const path = require('path')
const fs = require('fs')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')

const app = new express()

mongoose.connect('mongodb://localhost:27017/node-js-test-blog', { useNewUrlParser: true })

app.use(express.static('public'))
app.use(expressEdge)
app.set('views', `${__dirname}/views`)

app.get('/', (request, response) => {
	response.render('index')
})

app.get('/about', (request, response) => {
	response.render('about')
})

app.get('/post', (request, response) =>{
	response.render('post')
})

app.get('/contact', (request, response) => {
	response.render('contact')
})

app.listen(4000, () => {
	console.log('App listening on port 4000')	//
})