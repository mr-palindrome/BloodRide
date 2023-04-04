const mongoose = require('mongoose');

const ocassionalDonorRegistrationTemplate = new mongoose.Schema({
    ocassionalDonorName: {
        type: String,
        require: true
    },
    ocassionalDonorId:{
        type: String,
        require:true
    },
    ocassionalDonorEmail: {
        type: String,
        require: true
    },
    ocassionalDonorPassword: {
        type: String,
        require: true
    },
    ocassionalDonorPlace: {
        type: String,
        require: true
    },
    ocassionalDonorBloodGroup: {
        type: String,
        require: true
    },
    ocassionalDonorComponent: {
        type: String,
        require: true
    },
    ocassionalDonorOcasssion: {
        type: String,
        require: true
    }
},
{
    timestamps: true
})
module.exports = mongoose.model('ocassionalDonor_registration', ocassionalDonorRegistrationTemplate)