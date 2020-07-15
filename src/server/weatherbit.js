const fetch = require('node-fetch');

const weatherbit_url = process.env.WEATHERBIT_URL
const weatherbit_key = process.env.WEATHERBIT_API_KEY

module.exports.fetchTypicalWeather = async(lat,lon) =>{
    console.log(`${weatherbit_url}lat=${lat}&lon=${lon}&key=${weatherbit_key}&&units=I`);
    let weatherData={};
    try{
        const result = await fetch(
            `${weatherbit_url}lat=${lat}&lon=${lon}&key=${weatherbit_key}&&units=I`
        )
        const response = await result.json()
        weatherData['description'] = response.data[0].weather.description;
        weatherData['wind_speed'] = `${response.data[0].wind_spd} MPH`;
        console.log(weatherData);
        return weatherData;
    }catch(e){
        console.log(e)
    }
}