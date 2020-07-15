const fetch = require('node-fetch');

const restcountries = process.env.restcountries

module.exports.fetchCountry = async(country) =>{
    try{
        const result = await fetch(
            `${restcountries}${country}`
        )
        const response = await result.json()
        return response[0];
    }catch(e){
        console.log(e)
    }
}