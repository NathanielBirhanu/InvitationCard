const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const createRoute = require("./Routes/createRoute");
const scanRoute = require("./Routes/scanRoute");


const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/cards", createRoute);
app.use("/api/cards", scanRoute);

const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;
app.listen(port, (req, res)=>{
    console.log(`Server running on port: ${port}`);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("MongoDB connection established")).catch((error)=>console.log("MongoDB connection failed", error.message))


