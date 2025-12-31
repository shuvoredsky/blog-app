import express  from 'express';
import auth, { UserRole } from '../../middleware/auth';
import { PostController } from './post.controller';


const router = express.Router();



router.get("/",
  PostController.getAllPost
);

router.post("/", PostController.createPost)

export const postRouter = router;