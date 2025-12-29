import express, { NextFunction, Request, Response } from 'express'
import { PostController } from './post.controller';
import {auth as betterAuth} from "../../lib/auth"


const router = express.Router();

const auth = (...roles: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const session = await betterAuth.api.getSession({
        headers: req.headers as any
      })
      
      console.log(session) 
      
      if (!session) {
        return res.status(401).json({ message: "Unauthorized" })
      }
      
      next() 
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Server error" })
    }
  }
}

router.get("/", auth("ADMIN", "USER"),
  PostController.createPost
);

router.post("/", PostController.createPost)

export const postRouter = router;