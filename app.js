var express = require('express')
var app = express()

app.listen(3000, function(){
	console.log("start");
})

app.use(express.static('public'))


app.get('/', function(req, res){
	// res.send("<h1>hello world!</h1>")
	res.sendFile(__dirname + '/public/main.html')
})
