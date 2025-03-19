import express from "express";
import festitlemodel from "../model/festitlemodel.js";

 
const router =express.Router();

router.post("/titleSave",(req,res)=>{
    
    try {
        const title =new festitlemodel(req.body);
        title.save();
        res.send("Your title is saved Successfully")
        
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get("/titleShow", async (req, res) => {
    try {
      const latestTitle = await festitlemodel.findOne().sort({ _id: -1 });
      res.send(latestTitle);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  

export default  router ; 
