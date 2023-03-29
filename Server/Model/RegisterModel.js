const mongoose = require('mongoose');

const registerDataSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    repeatpassword:{
        type: String,
        required: true
    },

    image:{
       type: String,
    }
})


module.exports = mongoose.model('RegisterData', registerDataSchema);