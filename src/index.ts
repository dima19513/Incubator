import {app} from './app'
import {SETTINGS} from './settings'

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

app.listen(SETTINGS.PORT, () => {
    console.log('...server started in port ' + SETTINGS.PORT)
})