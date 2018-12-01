'use strict';

const request = require('request-promise');
const key = 'cc4e2d7d5b164bb6b41205620181307';

function getWeatherReport(city) {
    const options = {
        method: 'GET',
        uri: 'https://api.apixu.com/v1/forecast.json?key=' + key + '&q=' + city,
    };
    return request(options);
}

module.exports = {
    getWeatherReport,
};
