const express = require("express");
require("../src/db/conn");
const app = express();
const router = require("../src/routers/router");
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(router);

app.listen(PORT,()=>{
    console.log("Connected");
})