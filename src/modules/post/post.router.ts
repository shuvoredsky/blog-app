import express  from 'express';
import auth, { UserRole } from '../../middleware/auth';
import { PostController } from './post.controller';


const router = express.Router();



router.get("/", auth(UserRole.USER),
  PostController.createPost
);

router.post("/", PostController.createPost)

export const postRouter = router;