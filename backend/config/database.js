const mongoose = require("mongoose");
require("dotenv").config();

exports.dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connection successful"))
    .catch((error) => {
        console.log("Connection failed", error);
    });
};
