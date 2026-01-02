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



const getAllPost = async(req: Request, res:Response)=>{
    try{
    const {search} = req.query
    const searchString = typeof search === 'string' ? search : undefined;
    const tags = req.query.tags ? (req.query.tags as string).split(",") : [];



    const isFeatured = req.query.isFeatured ? 
    req.query.isFeatured === 'true' ? true : 
    req.query.isFeatured === 'false' ? false : undefined
    : undefined

    const result = await PostService.getAllPost({search: searchString, tags, isFeatured})
        res.status(200).json(result)
    }catch(error){
        res.status(400).json({
            error: "Post creation failed",
            details: 0
        })
    } 
}

export const PostController = {
    createPost,
    getAllPost
}