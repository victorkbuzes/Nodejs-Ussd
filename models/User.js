const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    tickets: {
        required: true,
        type: Number
    }
    

});
module.exports = mongoose.model("User", UserSchema);