const mongoose = require('mongoose');

const donorRegistrationTemplate = new mongoose.Schema({
    donorName: {
        type: String,
        require: true
    },
    donorProfession: {
        type: String,
        require: true
    },
    donorAge: {
        type: Number,
        require: true
    },
    donorGender: {
        type: String,
        require: true
    },
    donorEmail: {
        type: String,
        require: true
    },
    donorPassword: {
        type: String,
        require: true
    },
    donorAddress: {
        type: String,
        require: true
    },
    donorDistrict: {
        type: String,
        require: true
    },
    donorState: {
        type: String,
        require: true
    },
    donorPinCode: {
        type: Number,
        require: true
    },
    donorBloodGroup: {
        type: String,
        require: true
    },
    donorDonated: {
        type: String,
        require: true
    },
    componentDonated: {
        type: String,
        require: true
    },
    lastDonationDate: {
        type: Date,
        require: true
    },
    donationPreference: {
        type: String,
        require: true
    },
},
{
    timestamps: true
})
module.exports = mongoose.model('donor_registration', donorRegistrationTemplate)