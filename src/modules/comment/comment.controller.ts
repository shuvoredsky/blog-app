import e, { Request, Response } from "express";
import { commentService } from "./comment.service";

const createComment = async (req:Request, res:Response)=>{
    try{
        const user = req.user;
        req.body.authorId = user?.id;
        const result = await commentService.createComment(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(200).json({
            erro: "Comment creation failed",
            details: e
        })
    }
}


const getCommentById = async (req:Request, res:Response)=>{
    try{
        const {CommentId} = req.params
        const result = await commentService.getCommentById(CommentId)
        res.status(200).json(result)
    }catch(error){
        res.status(200).json({
            erro: "Comment fetched failed",
            details: e
        })
    }
}




const getCommentsByAuthor = async (req:Request, res:Response)=>{
    try{
        const {authorId} = req.params
        const result = await commentService.getCommentsByAuthor(authorId)
        res.status(200).json(result)
    }catch(error){
        res.status(200).json({
            erro: "Comment fetched failed",
            details: e
        })
    }
}

export const CommentController = {
    createComment,
    getCommentById,
    getCommentsByAuthor
}