const http = require('http')							//importing http package

const fs = require('fs')								//fs means file system package

//const aboutPage = fs.readFileSync('about.html')				//readFileSync means it is synchronous
																//asynchronous is blocking code, asynchronous is non blocking
/*const aboutPage = fs.readFile('about.html', (file) =>{		//readFile is a asynchronous process

})*/


const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const homePage = fs.readFile('index.html')

const server = http.createServer((request, response) => {
	console.log(request.url)


	if (request.url === '/about'){
		return response.end(aboutPage)
	} else if (request.url === '/contact'){
		return response.end(contactPage)
	} else if (request.url === '/'){
		return response.end(homePage)
	} else {
		response.writeHead(404)
	response.end('Page not found')
	}


})

server.listen(3000)

