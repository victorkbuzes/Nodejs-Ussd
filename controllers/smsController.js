
const {Router, response } = require("express");
const { getUserByID } = require("./UserContollet");
const router = Router()




const message = 'Afrcan Staking with User Api'
// Your login credentials

//const shortCode = '32192'
const username = 'sandbox'
const apikey = '4fc63b75c4d39db96e4895fa652a74a8399a1777339d1a777e4d236908d3b6b5'
const options = {
apiKey: apikey,
username: username
}
const AfricasTalking = require("africastalking")(options)


const sms = AfricasTalking.SMS


module.exports.sms_send = () => {
    const options = {
        to: '+254722925253',
        message: 'Africas Staking User Api',
        from: '32192'
    }
    sms.send(options)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })


    // var data = req.body;
    // if (data.to == '32192') {
    //     sendResponse(data.from, message)
        
    // } else {
    //     console.log('Something is wrong with the incoming message')
    // }
}

module.exports.sms_delivery = async(req, res) => {
    const data = router.get("/users/:number", getUserByID)
    console.log(`Received report: \n ${data}`);
    res.sendStatus(200);
}

// function sendResponse(recipient, message){
//     var opts = {
//         from: shortCode,
//         to : recipient,
//         message:message,
//     }
//     sms.send(opts).then((response) =>{
//         console.log(response);

//     })
//     .catch((err) => {
//         console.log(err);
//     })
       
        
// }



module.exports.test = (req, res, ) => {
    res.send("Welcome")
    
}



  
