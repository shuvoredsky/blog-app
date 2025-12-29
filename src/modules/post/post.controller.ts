import { Request, Response } from "express"
import { PostService } from "./post.service"

const createPost = async (req:Request,res:Response)=>{
    try{
        const user = req.body.user;
        if(!req.body.user){
           return res.status(400).json({
            error: "Unauthorized!",
        }) 
        }
        const result = await PostService.createPost(req.body, req.body.user.id as string)
        res.status(201).json(result)
    }catch(error){
        res.status(400).json({
            error: "Post creation failed",
            details: 0
        })
    } 
}

export const PostController = {
    createPost
}