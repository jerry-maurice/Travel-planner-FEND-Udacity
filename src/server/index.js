const dotenv = require('dotenv');
dotenv.config();

//store project data
projectData = {};

const {fetchCityDetail} = require('./geoname');
const {fetchTypicalWeather} = require('./weatherbit');
const {fetchImage} = require('./pixabay');
const {fetchCountry} = require('./country');
const mockAPIResponse = require('./mockAPI.js')

var path = require('path')
const express = require('express')

//const mockAPIResponse = require('./mockAPI.js')
//var AYLIENTextAPI = require('aylien_textapi');
const app = express()

//assign api key to variable
pixabay_key = process.env.PIXABAY_API_KEY;
geoname_username = process.env.GEONAME_API_USERNAME
weatherbit_key = process.env.WEATHERBIT_API_KEY

/* Middleware*/
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'))

console.log(__dirname)


// designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/trip', async (req, res, next)=>{
    // Create a new date instance 
    //let d = new Date();
    //console.log(process.env.GEONAME_URL);
    //let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
    //save response to object
    let location = await fetchCityDetail(req.body.location);
    projectData['location'] = location.location;
    projectData['country'] = location.country;
    projectData['lat'] = location.lat;
    projectData['lng'] = location.lng;
    projectData['departure'] = req.body.departure;
    //projectData['today'] = newDate;
    const weather_data = await fetchTypicalWeather(projectData.lat, projectData.lng);
    projectData['description'] = weather_data.description;
    projectData['wind_speed'] = weather_data.wind_speed;
    projectData['image'] = await fetchImage(projectData.location);
    let country = await fetchCountry(projectData.country);
    projectData['flag'] = country.flag;
    console.log(projectData);
    res.send(projectData);
})

