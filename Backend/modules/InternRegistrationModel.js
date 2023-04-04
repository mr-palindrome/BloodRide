const mongoose = require('mongoose');

const internRegistrationTemplate = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Profession: {
        type: String,
        require: true
    },
    Age: {
        type: Number,
        require: true
    },
    Gender: {
        type: String,
        require: true
    },
    DOB: {
        type: Date,
        require:true
    },
    Email: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    },
    Address: {
        type: String,
        require: true
    },
    District: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
    PinCode: {
        type: Number,
        require: true
    },
    BloodGroup: {
        type: String,
        require: true
    },
    DonationPreference:{
        type: String,
        require:true
    },
    LastDonationDate:{
        type: Date,
        require:true
    },
    ComponentDonated:{
        type: String,
        require:true
    },
    Donated:{
        type: String,
        require:true
    },
    InterestInDonation:{
        type: String,
        require:true
    },
    AreaOfInterest:{
        type: String,
        require:true
    },
    Institute:{
        type: String,
        require:true
    }
},
{
    timestamps: true
})
module.exports = mongoose.model('intern_registration', internRegistrationTemplate)