require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const UssdMenu = require('ussd-builder')




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//models
const user = require('./models/User')



//mongodb
mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.DB_CONNECTION,
    ).then(() => {
        console.log("Connected to Mongodb");
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    })

app.use(cors());

const PORT = 8080


// ussd setup

let menu = new UssdMenu();
let dataToSave = [];


menu.startState({
    run: () => {
        menu.con('Welcome! Ready to register for the Mana Program:' +
        '\n1. Get started' +
        '\n2. Quit!');
    },
    // next object links to next state based on user input
    next: {
        '1': 'register',
        '2': 'quit'
     }
    });
    menu.state('register', {
        run: () => {
            menu.con('Hi whats your name?');
        },
        next: {
            '*[a-zA-Z]+': 'register.tickets'
        }
    });
    menu.state('register.tickets', {
        run: () => {
            let name = menu.val;
    
            dataToSave.name = name;
            console.log(dataToSave);
            menu.con('How many tickets would you like to reserve?');
        },
        next: {
            // using regex to match user input to next state
            '*\\d+': 'end'
        }
    });
    menu.state('end', {
        run: () => {
            let tickets = menu.val
            dataToSave.tickets = tickets
            menu.end("Thankyou for registering. Sending confirmation shortly")

        }

    })
    menu.state('quit', {
        run: () => {
            menu.end("Goodbye :)");
        }
    });


    
    app.post('/ussd', (req, res)=>{
        menu.run(req.body, usdResult => {
            res.send(usdResult)
        })


    });


    


app.listen(8080, () => {
   
    console.log(`running port ${PORT}`)
});




