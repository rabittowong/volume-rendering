const express = require('express');
const app = express();
const port = 4200;

app.use(express.static('assets'));
app.use('/js', express.static(__dirname + 'assets/js'));
app.use('/img', express.static(__dirname + 'assets/js'));

app.get('/', (req, res) => res.sendFile(__dirname + '/src/cone.html'));
app.get('/*', (req, res) => res.sendFile(__dirname + '/src/' + req.path));

app.listen(port, () => console.log(`App listening on port ${port}!`));
