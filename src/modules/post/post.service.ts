import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createPost = async (data: Omit<Post, 'id' | 'createdAt' | 'updatedAt' | 'authorId'>, userId: string
)=>{
    const result = await prisma.post.create({
        data:{
            ...data,
            authorId: userId
        }
    })

    return result;
}


const getAllPost = async(
    payload:{search: string,
    tags: string[] | []
    })=>{
    const allPost = await prisma.post.findMany({
        where:{
          AND: [
          {    OR:[
             {title:{
                contains: payload.search,
                mode: 'insensitive'
            }
        },
           { content:{
               contains: payload.search,
                mode: 'insensitive' 
            }
        },
        {
            tags:{
                has: payload.search
            }
        }
           ]
        },
          { tags:{
            hasEvery: payload.tags as string[]
           }}
          ]
        }
    })
    return allPost;
}

export const PostService = {
    createPost,
    getAllPost
}