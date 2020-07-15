const fetch = require('node-fetch');

const geoname_url = process.env.GEONAME_URL
const geoname_username = process.env.GEONAME_API_USERNAME

module.exports.fetchCityDetail = async(location) =>{
    let full_location = {};
    try{
        const result = await fetch(
            `${geoname_url}${location}&username=${geoname_username}&maxRows=1`
        )
        const response = await result.json()
        if(response.geonames[0].countryCode === 'US'){
            full_location['location']=`${response.geonames[0].name}, ${response.geonames[0].adminCode1}`;
        }
        else{
            full_location['location']=`${response.geonames[0].name}, ${response.geonames[0].countryName}`;
        }
        full_location['lng'] = response.geonames[0].lng;
        full_location['lat'] = response.geonames[0].lat;
        full_location['country'] = response.geonames[0].countryName;
        return full_location;
    }catch(e){
        console.log(e)
    }
}