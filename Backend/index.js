import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI = process.env.MONGODB_URI; 

// connect to mongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
    
}

// define routes
app.use("/api/book", bookRoute);
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
    res.send("BookHub Backend API is running!");
});

app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`)
});
