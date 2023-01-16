require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const appRoutes = require('./routes/Router');



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));





//mongodb
mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to Mongodb");
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    })

app.use(cors());

const PORT = 8080


// ussd setup






    


app.listen(PORT, () => {
   
    console.log(`running port ${PORT}`)
});

app.use("/",appRoutes )




