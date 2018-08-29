const express = require('express')
const path = require('path')
const fs = require('fs')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Post = require('./database/models/Post')

const app = new express()

mongoose.connect('mongodb://localhost:27017/node-js-blog', { useNewUrlParser: true })

app.use(express.static('public'))
app.use(expressEdge)
app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', async (request, response) => {

	const posts = await Post.find({})
	console.log(posts)
	response.render('index', {
		posts
	})
})

app.get('/about', (request, response) => {
	response.render('about')
})

app.get('/post/:id', async (request, response) =>{
	const post = await Post.findById(request.params.id)
	response.render('post', {
		post
	})
})

app.get('/post/new', (request, response) => {
	response.render('create')
})

app.post('/post/store', (request, response) => {
	Post.create(request.body, (error, post) => {
		response.redirect('/')
	})
})

app.get('/contact', (request, response) => {
	response.render('contact')
})

app.listen(4000, () => {
	console.log('App listening on port 4000')	//
})