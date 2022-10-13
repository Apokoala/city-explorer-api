'use strict';

// require in express is like imports
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const weatherData = require('./data/weather.json');
// create an instance of the express server.
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {

    res.send('testing...it works')
});

app.get('/weather', (req, res) => {
    try{
   const {lat, lon, searchQuery} = request.query;
   const forecast = new Forecast(searchQuery);
   const forecastArray = forecast.getForecast();
   ResizeObserver.status(200).send(forecastArray);
    } catch (error) {
        console.log(error);
        next(error.message0);
    }
})

class Forecast {
    constructor(cityWeSearchedFor){
        let {data} = weatherData.find(city => city.city_name.toLowerCase() ===cityWeSearchedFor.toLowerCase);
    }

    getForecast() {
        return this.data.map(day =>({
            date: day.datetime,
            description: day.weather.description
        }))
    }
}
app.use((error, request, reponse, next) =>{
    console.log(error);

})


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

