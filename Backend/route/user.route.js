import express from "express";
import { signup ,login } from "../controller/user.controller.js";
import User from "../model/user.model.js";
const router=express.Router()

router.post("/signup",signup);
router.post("/login",login);

router.get("/show",(req,res)=>{
    User.find().then((users)=>{
        res.send(users);
       
    }).catch((err)=>{
        res.send(err);
        res.end();
    })

})

  

export default router;