import express from "express";
import { postRouter } from "./modules/post/post.router";

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello this is blog app")
})

app.use("/posts", postRouter);

export default app;