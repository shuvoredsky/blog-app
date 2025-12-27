import express from 'express'
import { PostController } from './post.controller';

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Posts route working");
});

router.post("/", PostController.createPost)

export const postRouter = router;