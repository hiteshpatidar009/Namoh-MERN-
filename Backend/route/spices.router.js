import express from "express";
import { getSpices } from "../controller/spices.controller.js";
import SpiceModel from "../model/book.model.js"; // Import the correct model

const router = express.Router();

// Route to get all spices
router.get("/", getSpices);

// Route to save a new spice
router.post("/save", async (req, res) => {
    try {
        const spice = new SpiceModel(req.body);
        await spice.save();
        res.send("Data saved successfully");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route to delete spice by name
router.delete("/delete/:sname", async (req, res) => {
    try {
        const result = await SpiceModel.deleteOne({ name: req.params.sname });

        if (result.deletedCount === 0) {
            return res.status(404).send("No spice found with that name");
        }

        res.send("Data Deleted Successfully");
    } catch (err) {
        console.error("Error deleting data:", err);
        res.status(500).send(err.message);
    }
});

// Route to search for a spice by name
router.get("/search/:sname", async (req, res) => {
    try {
        const spice = await SpiceModel.findOne({ name: req.params.sname });

        if (!spice) {
            return res.status(404).send("No spice found with that name");
        }

        res.send(spice); 
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send(err.message);
    }
});

//Corrected Route to update a spice by name
router.put("/update/:sname", async (req, res) => {
    try {
        const updatedSpice = await SpiceModel.findOneAndUpdate(
            { name: req.params.sname },     // Find by name
            { $set: req.body },             // Update fields from request body
            { new: true }                   // Return the updated document
        );

        if (!updatedSpice) {
            return res.status(404).send("No spice found with that name");
        }

        res.send(updatedSpice);  // Return updated spice
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send(err.message);
    }
});

export default router;
