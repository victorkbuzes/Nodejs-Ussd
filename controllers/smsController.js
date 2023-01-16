



const message = 'Hello Victor'
// Your login credentials

const shortCode = '32192'
const username = 'sandbox'
const apikey = '6522203eebbd9ff2782bd9f822074f3422eb9ba86f7d1dc60b86ea1a7f58e67f'
const options = {
apiKey: apikey,
username: username
}
const AfricasTalking = require("africastalking")(options)


const sms = AfricasTalking.SMS


module.exports.sms_send = async(req, res) => {
    var data = req.body;
    if (data.to == '32192') {
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



  
