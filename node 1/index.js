const http = require('http')

const fs = require('fs')

const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const homePage = fs.readFileSync('index.html')

const server = http.createServer((request, response) => {
	console.log(request.url)


	if (request.url === '/about'){
		return response.end("the about page")
	} else if (request.url === '/contact'){
		return response.end('The contact page')
	} else if (request.url === '/'){
		return response.end('The home page')
	} else {
		response.writeHead(404)
	response.end('Page not found')
	}


})

server.listen(3000)

