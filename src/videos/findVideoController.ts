import {Request, Response} from 'express'
import {db} from '../db/db'
import {video1} from "./datasets";
/*
export const findVideoController = (req: Request, res: Response<any>) => {
    const id = +req.params.id;
    const video = db.videos.find(v =>v.id === id)
    if(video)
    {
        res.send(video)
    } else {
        res.send(404)
    }
}

*/