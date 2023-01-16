const mongoose = require('mongoose');
const UssdSchema = mongoose.Schema({
  
    number: {
        type: String,
        require: true,

    }
});

module.exports = mongoose.model("Ussd", UssdSchema);