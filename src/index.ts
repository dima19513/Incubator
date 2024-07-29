//import {app} from './app'
import express, {Request, Response} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const corsMiddleware = cors();
app.use(corsMiddleware)
const jsoncorsMiddleware = bodyParser.json()
app.use(jsoncorsMiddleware)
import {SETTINGS} from './settings'
import {Resolutions} from "./input-output-types/video-types";
import {db} from "./db/db";
import {video1} from "./videos/datasets";

let videos = [video1]

app.get('/', (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.send("Hello")
})

app.get('/videos', (req, res) => {
    res.send(videos)
})

app.post('/videos', (req, res) => {
    const newVideo = {
        id: +(Date.now()),
        title: req.body.title,
        author: 'itcumosutra',
    }
    videos.push(newVideo)
    res.send(202).send(newVideo)
})

app.put('/videos/:videoId', (req, res) => {
    const id = +req.params['videoId'];
    //const id = +req.params.videoId;
    const video = videos.find(v =>v.id === id)
    if(video)
    {
        video.title = req.body.title;
        res.send(video)
    } else {
        res.send(404)
    }
})

app.get('/videos/:videoId', (req, res) => {
    const id = +req.params['videoId'];
    //const id = +req.params.videoId;
    const video = videos.find(v =>v.id === id)
    if(video)
    {
        res.send(video)
    } else {
        res.send(404)
    }
})


app.delete('/videos/:videoId', (req, res) => {
    const id = +req.params['videoId'];
    //const id = +req.params.videoId;
    const newVideo = videos.filter(v =>v.id !== id)
    if(newVideo.length < videos.length)
    {
        videos = newVideo;
        res.set((204))
    } else {
        res.send(404)
    }
})


/*
import {Router} from 'express'
import {getVideosController} from './videos/getVideosController'
import {createVideoController} from './videos/createVideoController'
import {findVideoController} from './videos/findVideoController'
import {deleteVideoController} from './videos/deleteVideoController'


export const videosRouter = Router()

videosRouter.get('/', getVideosController)
videosRouter.post('/', createVideoController)
videosRouter.get('/:id', findVideoController)
videosRouter.delete('/:id', deleteVideoController)
*/

app.listen(SETTINGS.PORT, () => {
    console.log('...server started in port ' + SETTINGS.PORT)
})