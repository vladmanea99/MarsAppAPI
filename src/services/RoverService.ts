import {router} from '../server';

const axios = require('axios');
const roversURL: string = "https://api.nasa.gov/mars-photos/api/v1/rovers";
const api_key = "api_key=LzTXBJmLN4rwuxnGHGebiOG5agtjS4kSxHYgXTT5";

export async function  getRovers(): Promise<any>{
    const rovers = await axios.get(roversURL + "?" + api_key);
    return rovers.data
}

export async function getRoverByName(roverName: string): Promise<any> {
    const rover = await axios.get(roversURL + "/" + roverName + "?" + api_key);
    return rover.data.rover
}

export async function getCamerasFromRoverByName(rover): Promise<any> {
    return rover.cameras.map(c => c.name);
}

export async function getPhotosByRoverAndCamera(roverName: string, cameraName: string): Promise<any>{
    const photos = await axios.get(roversURL + '/' + roverName + '/photos' +
        '?' + 'sol=1000' + 'camera=' + cameraName + '&' + api_key);
    console.log(photos);
    return photos.data.photos.slice(0, 10);
}
