import express  from 'express';
import auth, { UserRole } from '../../middleware/auth';
import { PostController } from './post.controller';


const router = express.Router();



router.get("/",
  PostController.getAllPost
);

router.get("/my-post",
  auth(UserRole.USER, UserRole.ADMIN),
  PostController.getMyPosts
);

router.get("/:postId", PostController.getPostById)

router.post("/", auth(UserRole.USER, UserRole.ADMIN),PostController.createPost)

export const postRouter = router;