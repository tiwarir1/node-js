// the commented section does not use any framework. it is using basic node functionalities.
// the new code is using express framework

// const http = require('http')							//importing http package

// const fs = require('fs')								//fs means file system package

// //const aboutPage = fs.readFileSync('about.html')				//readFileSync means it is synchronous
// 																//asynchronous is blocking code, asynchronous is non blocking
// /*const aboutPage = fs.readFile('about.html', (file) =>{		//readFile is a asynchronous process

// })*/


// const aboutPage = fs.readFileSync('about.html')
// const contactPage = fs.readFileSync('contact.html')
// const homePage = fs.readFile('index.html')

// const server = http.createServer((request, response) => {
// 	console.log(request.url)


// 	if (request.url === '/about'){
// 		return response.end(aboutPage)
// 	} else if (request.url === '/contact'){
// 		return response.end(contactPage)
// 	} else if (request.url === '/'){
// 		return response.end(homePage)
// 	} else {
// 		response.writeHead(404)
// 	response.end('Page not found')
// 	}


// })

// server.listen(3000)
const path = require('path') 			//helps to get our file paths. Path change acc. to the machine the project is running on
const express = require('express')

const app = new express()

app.use(express.static('public'))		//increases functionality with express. Any browser that asks for functionality from server gets it from public folder

// app.get('/', (request, response) => {					//get route
// 	response.json({										//only sends json
// 		name: 'Rabi Dada'
// 	})
// })	

// app.get('/about', (request, response) => {
// 	response.send({										//can send anything (file, views, templates)
// 		name: 'Rabi Dada'
// 	})
// })

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html')) 		//from module called path. __dirname gets current directory. syntax is path.resolve(__dirname, 'filename') 
})

app.get('/about', (request, response) =>{
	response.sendFile(path.resolve(__dirname,'about.html'))
})

app.get('/contact', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'contact.html'))
})

app.get('')

app.listen(3000, () => {
	console.log('App listening on 3000')
})