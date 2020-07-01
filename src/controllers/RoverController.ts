import {getRovers} from '../services/RoverService'
import {getRoverByName} from '../services/RoverService'
import {getCamerasFromRoverByName} from "../services/RoverService";
import {getPhotosByRoverAndCamera} from "../services/RoverService";

export async function controllerGetRovers(): Promise<any> {
    return await getRovers();
}

export async function controllerGetRoverByName(roverName: string): Promise<any> {
    return await getRoverByName(roverName);
}

export async function controllerGetCamerasFromRoverByName(rover): Promise<any> {
    return await getCamerasFromRoverByName(rover);
}

export async function controllerGetPhotosByRoverAndCamera(roverName: string, cameraName: string): Promise<any> {
    return await getPhotosByRoverAndCamera(roverName, cameraName);
}