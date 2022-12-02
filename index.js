const express = require('express');
const app = express();
const http = require('http').Server(app);


app.use(express.static(__dirname + '/client'));
app.get('/', (request, response) => {
	response.sendFile(__dirname + '/client/index.html');
});

app.set('port', (process.env.PORT || 5000));

http.listen(app.get('port'), () => {});