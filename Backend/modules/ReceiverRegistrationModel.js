const mongoose = require('mongoose');

const receiverRegistrationTemplate = new mongoose.Schema({
    receiverName: {
        type: String,
        require: true
    },
    receiverProfession: {
        type: String,
        require: true
    },
    receiverAge: {
        type: Number,
        require: true
    },
    receiverGender: {
        type: String,
        require: true
    },
    receiverEmail: {
        type: String,
        require: true
    },
    receiverPassword: {
        type: String,
        require: true
    },
    receiverAddress: {
        type: String,
        require: true
    },
    receiverDistrict: {
        type: String,
        require: true
    },
    receiverState: {
        type: String,
        require: true
    },
    receiverPinCode: {
        type: Number,
        require: true
    },
    receiverBloodGroup: {
        type: String,
        require: true
    },
    convertInDonater:{
        type: String,
        require:true
    },
    receiverMobileNo:{
        type: Number,
        require:true
    }
},
{
    timestamps: true
})
module.exports = mongoose.model('receiver_registration', receiverRegistrationTemplate)