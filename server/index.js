import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
    res.send("Hello to Memories API");
});

const port = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(port, () => console.log(`Server funning on port: ${port}`)))
    .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);