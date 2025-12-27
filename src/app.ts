import express from "express";

const app = express();

app.get("/", (req,res)=>{
    res.send("Hello this is blog app")
})

export default app;