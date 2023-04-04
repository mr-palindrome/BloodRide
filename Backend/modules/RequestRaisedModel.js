const mongoose = require('mongoose');

const requestRaisedTemplate = new mongoose.Schema({
    patientName: {
        type: String,
        require: true
    },
    profession: {
        type: String,
        require: true
    },
    patientAge: {
        type: Number,
        require: true
    },
    patientGender: {
        type: String,
        require: true
    },
    hospitalName: {
        type: String,
        require: true
    },
    hospitalAddress: {
        type: String,
        require: true
    },
    hospitalType: {
        type: String,
        require: true
    },
    bloodGroup: {
        type: String,
        require: true
    },
    componentRequired: {
        type: String,
        require: true
    },
    reason: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    contactName: {
        type: String,
        require: true
    },
    relation: {
        type: String,
        require: true
    },
    contactAge: {
        type: Number,
        require: true
    },
    contactGender: {
        type: String,
        require: true
    },
},
{
    timestamps: true
})
module.exports = mongoose.model('raisedRequest', requestRaisedTemplate)