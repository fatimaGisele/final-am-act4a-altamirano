import axios from "axios";


export async function imageOfTheDay ()  {
    const API_KEY = `wikskf0NPRt4gohzvUIsaLGubiSTVQJ1oDBWNWZb`;
    let nasaResponse = await axios.get('https://api.nasa.gov/planetary/apod?api_key='+`${API_KEY}`);
    return nasaResponse.data;
}


