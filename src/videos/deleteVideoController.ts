import {Request, Response} from 'express'
import {db} from '../db/db'

export const deleteVideoController = (req: Request, res: Response<any /*OutputVideoType[]*/>) => {
    const id = +req.params.id;
    const newVideo = db.videos.filter(v =>v.id !== id)
    if(newVideo.length < db.videos.length)
    {
        db.videos = newVideo;
        res.set((204))
    } else {
        res.send(404)
    }
}