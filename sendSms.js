const AfricasTalking = require("africastalking")


const africastalking = AfricasTalking({
    apiKey: '6522203eebbd9ff2782bd9f822074f3422eb9ba86f7d1dc60b86ea1a7f58e67f', 
    username: 'sandbox'
  });
  


module.exports = async function sendSMS() {
    try {
        const result = await africastalking.SMS.send({
            to: '+254722925253',
            message: 'Hello Victor',
            from: '32192'

        })
        console.log(result);
        
    } catch (err) {
        console.error(err);
        
    }
 

};