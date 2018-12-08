'use strict';

const express = require('express');
const app = express();

const weatherService = require('./services/weather.service');

app.get('/weather', function (req, res) {
    const city = req.query.city;

    weatherService.getWeatherReport(city)
        .then(function (result) {
            console.log(result);
            res.status(200).send(result);
        })
        .catch(function (err) {
            console.log(err);
            if (err.statusCode){
                res.status(err.statusCode).send(err.message);
            } else {
                res.status(500).send(err);
            }
        });
});

app.listen(3001, function () {
    console.log('Server is listening on port 3001');
});
