import express from "express"; // ✅ Proper ES6 import
import contactusmodel from "../model/contactmodel.js";

const router = express.Router();

router.post("/contactSave", async (req, res) => {
  try {
    const contact = new contactusmodel(req.body);
    await contact.save();
    res.send("Your contact form is submitted successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/contactShow", async (req, res) => {
  try {
    const latestContact = await contactusmodel.findOne().sort({ _id: -1 });
    res.send(latestContact);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
