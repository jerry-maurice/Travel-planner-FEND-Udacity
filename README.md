# About
This project is about a travel app that obtains a desired trip location and date from the user, and display weather and image of the location using information obtained from external APIs.

Working with this project will give us practice on :
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- Jest


## Getting started

`cd` into your new folder and run:
- `npm install`

## Setting up the API

This project is communicating with four external APIs. You will need to created an account for three of these API provider to obtain a key.
- Geonames
- Weatherbit
- Pixabay
- REST Countries API (no need to create an accont for this one)
Once you have created an account for each api, create an .env file and add the following. Replace the '#' with your api key
example:
PIXABAY_API_URL=https://pixabay.com/api/?key=###################################&q=
GEONAME_URL=http://api.geonames.org/searchJSON?q=
GEONAME_API_USERNAME=#######################
WEATHERBIT_URL=https://api.weatherbit.io/v2.0/current?
WEATHERBIT_API_KEY=###################################
restcountries=https://restcountries.eu/rest/v2/name/


### Extend Options
I use the rest countries api to get the country flag and display it on the screen
