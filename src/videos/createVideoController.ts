import {Response, Request} from 'express'
//import {OutputErrorsType} from '../input-output-types/output-errors-type'
import {db} from '../db/db'
//import {Resolutions} from '../input-output-types/video-types'

export const createVideoController = (req: Request<any, any>, res: Response<any /*OutputVideoType | OutputErrorsType*/>) => {
    const newVideo: any /*VideoDBType*/ = {
        ...req.body,
        id: Date.now() + Math.random(),
        // ...
    }
    db.videos = [...db.videos, newVideo]

    res
        .status(201)
        .json(newVideo)
}
