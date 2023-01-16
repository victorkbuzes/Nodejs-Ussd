const UssdMenu = require('ussd-builder')


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