const express = require('express');
const app = express();
const getShows = require('./shows');
const port = 3001;

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/rest/shows', (req, res) => res.send(getShows()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
