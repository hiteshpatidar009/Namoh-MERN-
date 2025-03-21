import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import spicesRoute from "./route/spices.router.js";
import userRoute from "./route/user.route.js";
import festitlerouter from './route/festitlerouter.js';
import contactroute from "./route/contactroute.js"
const app = express();

// Middleware

app.use(cors({
  origin: ["http://localhost:5173", "https://namoh-spices-frontend.onrender.com", "https://my-namoh-hiteshpatidar009s-projects.vercel.app"], // Add Vercel URL here!
  credentials: true
}));


app.use(express.json());


// Config
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB Atlas
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((error) => console.log("❌ MongoDB Connection Error:", error.message));

// Routes
app.use("/spices", spicesRoute);
app.use("/user", userRoute);
app.use("/title", festitlerouter);
app.use("/contact",contactroute);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port ${PORT}`);
});
