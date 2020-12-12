import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL = "mongodb+srv://runandJUMP:BMnWFOsoMwTSzRHZ@depoppler.xznul.mongodb.net/MERNProject?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(port, () => console.log(`Server funning on port: ${port}`)))
    .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);