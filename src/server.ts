import * as express from "express";
import {controllerGetRovers} from './controllers/RoverController'
import {controllerGetRoverByName} from './controllers/RoverController'
import {controllerGetCamerasFromRoverByName} from "./controllers/RoverController";
import {controllerGetPhotosByRoverAndCamera} from "./controllers/RoverController";

const https = require('https');
const axios = require('axios');
const app = express();
const port = 8000;
const APIKey : string = "LzTXBJmLN4rwuxnGHGebiOG5agtjS4kSxHYgXTT5";
app.use(express.json());
export const router = express.Router();
router.get('/test', (req, res) => res.send('Hello world !'));
app.use('/', router);

app.listen(port, () => {
    console.log(`Test backend is running on port ${port}`);
});

router.get('/rovers',  async function(req, res){
    let cameraNamesSet = new Set();
    let rovers = await controllerGetRovers();

    for (const rover of await rovers.rovers) {
        for (const camera of rover.cameras) {
            if (!cameraNamesSet.has(camera.name)){
                cameraNamesSet.add(camera.name);
            }
        }
    }
    console.log(cameraNamesSet)
    res.send(rovers);
})

router.get('/rovers/:roverName', async function(req, res){

    const rover = await controllerGetRoverByName(req.params.roverName)

    res.send(rover)
})
router.get('/rovers/:roverName/cameras', async function (req, res) {
    const rover = await controllerGetRoverByName(req.params.roverName);
    const cameras = await controllerGetCamerasFromRoverByName(rover);
    res.send(cameras);
})
router.get('/rovers/:roverName/photos/:cameraName', async function (req, res){
    const roverName = req.params.roverName;
    const cameraName = req.params.cameraName;
    const photos = await controllerGetPhotosByRoverAndCamera(roverName, cameraName);
    res.send(photos);
})