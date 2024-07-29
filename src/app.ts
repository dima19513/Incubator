/*import express, {Request, Response} from 'express'
import cors from 'cors'
import {SETTINGS} from "./settings";
import {getVideosController} from './videos/getVideosController'
import {createVideoController} from './videos/createVideoController'
import {findVideoController} from './videos/findVideoController'
import {deleteVideoController} from './videos/deleteVideoController'
import {db} from "./db/db";
//import {videosRouter} from './index'

export const app = express() // создать приложение
app.use(express.json()) // создание свойств-объектов body и query во всех реквестах
app.use(cors()) // разрешить любым фронтам делать запросы на наш бэк

app.get('/', (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.status(200).json({version: '1.0'})
})
app.get(SETTINGS.PATH.VIDEOS, getVideosController)
app.get(SETTINGS.PATH.VIDEOS, createVideoController)
app.get(SETTINGS.PATH.VIDEOS, findVideoController)
app.get(SETTINGS.PATH.VIDEOS, deleteVideoController)
//app.use(SETTINGS.PATH.VIDEOS, videosRouter)
*/