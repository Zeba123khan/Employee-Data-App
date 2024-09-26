const express = require("express");
require("dotenv").config();
const cors=require("cors");
const { dbconnect } = require("./config/database");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// cors configuration 
app.use(
    cors({
        origin:"*"
    })
);

const employeeRoute = require("./routes/route");  // Ensure this points to the correct file
app.use("/api/v1", employeeRoute);

dbconnect();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
