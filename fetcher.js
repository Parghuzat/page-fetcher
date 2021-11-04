const request = require('request');
let input = process.argv;
let url = input[2];
let path = input[3];

request(url , (error, response,body) => {
	const fs = require('fs');
	fs.writeFile(path, body,err => { });
	let size = body.length;
	console.log(`Downloaded and saved ${size} bytes to ${input[3]}` )
});




