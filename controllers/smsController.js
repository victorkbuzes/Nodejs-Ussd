



const message = 'Hello Victor'
// Your login credentials

const shortCode = '2345'
const username = 'sandbox'
const apikey = '4fc63b75c4d39db96e4895fa652a74a8399a1777339d1a777e4d236908d3b6b5'
const options = {
apiKey: apikey,
username: username
}
const AfricasTalking = require("africastalking")(options)


const sms = AfricasTalking.SMS


module.exports.sms_send = async(req, res) => {
    var data = req.body;
    if (data.to == '2345') {
        sendResponse(data.from, message)
        
    } else {
        console.log('Something is wrong with the incoming message')
    }
}

module.exports.sms_delivery = async(req, res) => {
    const data = req.body;
    console.log(`Received report: \n ${data}`);
    res.sendStatus(200);
}

function sendResponse(recipient, message){
    var opts = {
        from: shortCode,
        to : recipient,
        message:message,
    }
    sms.send(opts).then(
        console.log('Message sent successfully')
        ).catch(
        console.log('Something went wrong with message sending')
        )
        
}

module.exports.test = (req, res, ) => {
    res.send("Welcome")
    
}



  
