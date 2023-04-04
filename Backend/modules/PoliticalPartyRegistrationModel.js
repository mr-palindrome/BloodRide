const mongoose = require('mongoose');

const politicalPartyRegistrationTemplate = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Wing: {
        type: String,
        require: true
    },
    Type: {
        type: String,
        require: true
    },
    RegistrationNo: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    ContactNo: {
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
    WebsiteLink: {
        type: String,
        require: true
    },
    RepresentativeName: {
        type: String,
        require: true
    },
    RepresentativeEmail: {
        type: String,
        require: true
    },
    RepresentativeNo: {
        type: String,
        require: true
    },
    Designation: {
        type: String,
        require: true
    },
},
    {
        timestamps: true
    })
module.exports = mongoose.model('politicalParty_registration', politicalPartyRegistrationTemplate)