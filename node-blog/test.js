const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')

Post.create({
	title: 'My first blog post',
	description: 'Blog description',
	content: 'anything goes here'
}, (error, post) => {
	console.log(error, post)
})