const express = require('express')
const path = require('path')
const fs = require('fs')

const app = new express()

app.use(express.static('public'))

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/about', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'pages/about.html'))
})

app.get('/post', (request, response) =>{
	response.sendFile(path.resolve(__dirname, 'pages/post.html'))
})

app.get('/contact', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})

app.listen(4000, () => {
	console.log('App listening on port 4000')	//
})