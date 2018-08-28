const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')

// Post.create({
// 	title: 'My second blog post',
// 	description: 'testing',
// 	content: 'something something'
// }, (error, post) => {
// 	console.log(error, post)
// })

// Post.find({
// 	title: 'My first blog post'
// }, (error, post) => {
// 	console.log(error, post)					//callback - error code and the posts
// })

Post.find({}, (error, post) => {
	console.log(error, post)					//callback - error code and the posts
})

// Post.findById("5b842e46f7bdc035d8fde856", (error, post) => {
// 	console.log(error, post)
// })

// Post.findByIdAndUpdate("5b842e46f7bdc035d8fde856", {
// 	title: 'My second updated blog post'
// }, (error, post) => {
// 	console.log(error, post)
// })