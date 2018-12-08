'use strict';

const express = require('express');
const app = express();

const weatherService = require('./services/weather.service.js');

app.get('/weather', function (req, res) {
    // req: {
    //    query: {
    //       city: 'Toronto',
    //       name: 'Olga'
    //    }
    // }
    // Объявляем переменную city константой,
    // кладем в нее свойство "city", которое лежит в объекте query,
    // который лежит в объекте req
    const city = req.query.city;            // city = 'Toronto'

    // Вызываем функцию getWeatherReport, которая лежит в модуле weatherService
    // с параметром city, в данном случае в переменной city лежит Toronto
    weatherService.getWeatherReport(city)
        .then(function (result) {
            // Выводим в консоль (логируем) "result"
            console.log(result);

            // Берем res, ставим статус "200", посылаем "result"
            res.status(200).send(result);
        })
        .catch(function (err) {
            // Выводим в консоль содержимое объекта err (логгирование)
            console.log(err);

            // Проверим, есть ли в объекте err свойство statusCode
            if (err.statusCode) {
                // Если "Да"
                // Берем res, вызываем функцию "status()" с параметром "err.statusCode",
                // вызываем функцию "send()" с параметром err.message
                res.status(err.statusCode).send(err.message);
            } else {
                // Если "Нет"
                // Берем res, вызываем функцию "status()" с параметром 500,
                // вызываем функцию "send()" с параметром err
                res.status(500).send(err);
            }
        });
});

app.listen(3001, function () {
    console.log('Server is listening on port 3001');
});
