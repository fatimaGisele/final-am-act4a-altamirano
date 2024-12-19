import axios from "axios";



export async function imageOfTheDay ()  {

    let nasaResponse = await axios.get('https://api.nasa.gov/planetary/apod?api_key='+`${API_KEY}`);
    return nasaResponse.data;
}

export async function imageOfADay(date) {

    let nasaResponse = await axios.get('https://api.nasa.gov/planetary/apod?api_key='+`${API_KEY}`+'&date='+`${date}`);
    return nasaResponse.data;
}

