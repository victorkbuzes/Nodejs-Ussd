const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    number: {
        type: String,
        require: true,

    },
    group: {
        type: String,
        require: true,
    },
    county: {
        type: String,
        require: true,

    }
});

module.exports = mongoose.model("User", UserSchema);