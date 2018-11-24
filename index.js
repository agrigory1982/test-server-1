'use strict';

const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
    res.send('Hello World');
});

app.listen(3001, function() {
    console.log('Server is listening on port 3001');
});
