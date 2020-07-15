const fetch = require('node-fetch');

const pixabay_url = process.env.PIXABAY_API_URL

module.exports.fetchImage = async(location) =>{
    let image;
    try{
        const result = await fetch(
            `${pixabay_url}${location}`
        )
        const response = await result.json()
        if(response.total != 0)
            return response.hits[0].largeImageURL;
        else{
            return 'https://picsum.photos/200/300';
        }
    }catch(e){
        console.log(e)
    }
}