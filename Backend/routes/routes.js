const { response } = require('express');
const express = require('express');
const router = express.Router();
const signupTemplateCopy = require('../modules/SignUpModels');
const requestRaisedTemplate = require('../modules/RequestRaisedModel')
const donorRegistrationTemplate = require('../modules/DonorRegistrationModel')
const receiverRegistrationTemplate = require('../modules/ReceiverRegistrationModel')
const internRegistrationTemplate = require('../modules/InternRegistrationModel')
const celebrityRegistrationTemplate = require('../modules/CelebrityRegistrationModel')
const ngoRegistrationTemplate = require("../modules/NgoRegistrationModel")
const companyRegistrationTemplate = require("../modules/CompanyRegistrationModel")
const schoolRegistrationTemplate = require("../modules/SchoolRegistrationModel")
const collegeRegistrationTemplate = require("../modules/CollegeRegistrationModel")
const hospitalRegistrationTemplate = require("../modules/HospitalRegistrationModel")
const politicalPartyRegistrationTemplate = require("../modules/PoliticalPartyRegistrationModel")
const ocassionalDonorRegistrationTemplate = require('../modules/OcassionalDonorRegistrationModel')


router.post('/signup', (request, response) => {
    const signedUpUser = new signupTemplateCopy({
        fullname: request.body.fullname,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        age: request.body.age,
        bloodGroup: request.body.bloodGroup
    })
    signedUpUser.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})

router.post('/RaiseRequest', (request, response) => {
    const requestRaised = new requestRaisedTemplate({
        patientName: request.body.patientName,
        profession: request.body.profession,
        patientAge: request.body.patientAge,
        patientGender: request.body.patientGender,
        hospitalName: request.body.hospitalName,
        hospitalAddress: request.body.hospitalAddress,
        hospitalType: request.body.hospitalType,
        bloodGroup: request.body.bloodGroup,
        componentRequired: request.body.componentRequired,
        reason: request.body.reason,
        date: request.body.date,
        contactName: request.body.contactName,
        relation: request.body.relation,
        contactAge: request.body.contactAge,
        contactGender: request.body.contactGender,
    })
    requestRaised.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})
router.post('/DonorForm', (request, response) => {
    const donorRegistration = new donorRegistrationTemplate({
        donorName: request.body.donorName,
        donorProfession: request.body.donorProfession,
        donorAge: request.body.donorAge,
        donorGender: request.body.donorGender,
        donorEmail: request.body.donorEmail,
        donorPassword: request.body.donorPassword,
        donorAddress: request.body.donorAddress,
        donorDistrict: request.body.donorDistrict,
        donorState: request.body.donorState,
        donorPinCode: request.body.donorPinCode,
        donorBloodGroup: request.body.donorBloodGroup,
        donorDonated: request.body.donorDonated,
        cdonorDonated: request.body.cdonorDonated,
        lastdonorDate: request.body.lastdonorDate,
        donorPreference: request.body.donorPreference
    })
    donorRegistration.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})
router.post('/OcassionalDonorForm', (request, response) => {
    const ocassionalDonorRegistration = new ocassionalDonorRegistrationTemplate({
        ocassionalDonorName: request.body.ocassionalDonorName,
        ocassionalDonorId: request.body.ocassionalDonorId,
        ocassionalDonorEmail: request.body.ocassionalDonorEmail,
        ocassionalDonorPassword: request.body.ocassionalDonorPassword,
        ocassionalDonorDate: request.body.ocassionalDonorDate,
        ocassionalDonorPlace: request.body.ocassionalDonorPlace,
        ocassionalDonorBloodGroup: request.body.ocassionalDonorBloodGroup,
        ocassionalDonorComponent: request.body.ocassionalDonorComponent,
        ocassionalDonorOcassion: request.body.ocassionalDonorOcassion
    })
    ocassionalDonorRegistration.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})
router.post('/ReceiverForm', (request, response) => {
    const receiverRegistration = new receiverRegistrationTemplate({
        receiverName: request.body.receiverName,
        receiverProfession: request.body.receiverProfession,
        receiverAge: request.body.receiverAge,
        receiverGender: request.body.receiverGender,
        receiverEmail: request.body.receiverEmail,
        receiverPassword: request.body.receiverPassword,
        receiverAddress: request.body.receiverAddress,
        receiverDistrict: request.body.receiverDistrict,
        receiverState: request.body.receiverState,
        receiverPinCode: request.body.receiverPinCode,
        receiverBloodGroup: request.body.receiverBloodGroup,
        convertInDonater: request.body.convertInDonater,
        receiverMobileNo: request.body.ReceiverMobileNo
    })
    receiverRegistration.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})
router.post('/InternshipForm', (request, response) => {
    const internRegistration = new internRegistrationTemplate({
        Name: request.body.Name,
        Profession: request.body.Profession,
        Age: request.body.Age,
        Gender: request.body.Gender,
        DOB: request.body.DOB,
        Email: request.body.Email,
        Password: request.body.Password,
        BloodGroup: request.body.BloodGroup,
        DonationPreference: request.body.DonationPreference,
        LastDonationDate: request.body.LastDonationDate,
        ComponentDonated: request.body.ComponentDonated,
        Donated: request.body.Donated,
        InterestInDonation: request.body.InterestInDonation,
        PinCode: request.body.PinCode,
        State: request.body.State,
        District: request.body.District,
        Address: request.body.Address,
        AreaOfInterest: request.body.AreaOfInterest,
        Institute: request.body.Institute
    })
    internRegistration.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})


router.post('/NgoForm', (request, response) => {
    const ngoRegistration = new ngoRegistrationTemplate({
        Name: request.body.Name,
        YearOfEstablishment: request.body.YearOfEstablishment,
        WorkingSector: request.body.WorkingSector,
        RegistrationNo: request.body.RegistrationNo,
        Email: request.body.Email,
        ContactNumber: request.body.ContactNumber,
        Address: request.body.Address,
        District: request.body.District,
        State: request.body.State,
        PinCode: request.body.PinCode,
        WebsiteLink: request.body.WebsiteLink,
        NgoDarpan: request.body.NgoDarpan,
        RepresentativeName: request.body.RepresentativeName,
        RepresentativeEmail: request.body.RepresentativeEmail,
        Designation: request.body.Designation,
        RepresentativeNo: request.body.RepresentativeNo
    })
    ngoRegistration.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})
router.post('/SchoolForm', (request, response) => {
    const schoolRegistration = new schoolRegistrationTemplate({
        Name: request.body.Name,
        YearOfEstablishment: request.body.YearOfEstablishment,
        Type: request.body.Type,
        RegistrationNo: request.body.RegistrationNo,
        Email: request.body.Email,
        ContactNumber: request.body.ContactNumber,
        Address: request.body.Address,
        District: request.body.District,
        State: request.body.State,
        PinCode: request.body.PinCode,
        WebsiteLink: request.body.WebsiteLink,
        RepresentativeName: request.body.RepresentativeName,
        RepresentativeEmail: request.body.RepresentativeEmail,
        Designation: request.body.Designation,
        RepresentativeNo: request.body.RepresentativeNo
    })
    schoolRegistration.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})
router.post('/CollegeForm', (request, response) => {
    const collegeRegistration = new collegeRegistrationTemplate({
        Name: request.body.Name,
        YearOfEstablishment: request.body.YearOfEstablishment,
        Type: request.body.Type,
        RegistrationNo: request.body.RegistrationNo,
        Email: request.body.Email,
        ContactNumber: request.body.ContactNumber,
        Address: request.body.Address,
        District: request.body.District,
        State: request.body.State,
        PinCode: request.body.PinCode,
        WebsiteLink: request.body.WebsiteLink,
        RepresentativeName: request.body.RepresentativeName,
        RepresentativeEmail: request.body.RepresentativeEmail,
        Designation: request.body.Designation,
        RepresentativeNo: request.body.RepresentativeNo
    })
    collegeRegistration.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})
router.post('/HospitalForm', (request, response) => {
    const hospitalRegistration = new hospitalRegistrationTemplate({
        Name: request.body.Name,
        YearOfEstablishment: request.body.YearOfEstablishment,
        Field: request.body.Field,
        RegistrationNo: request.body.RegistrationNo,
        Email: request.body.Email,
        ContactNumber: request.body.ContactNumber,
        Address: request.body.Address,
        District: request.body.District,
        State: request.body.State,
        PinCode: request.body.PinCode,
        WebsiteLink: request.body.WebsiteLink,
        RepresentativeName: request.body.RepresentativeName,
        RepresentativeEmail: request.body.RepresentativeEmail,
        Designation: request.body.Designation,
        RepresentativeNo: request.body.RepresentativeNo
    })
    hospitalRegistration.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})
router.post('/PoliticalPartyForm', (request, response) => {
    const politicalPartyRegistration = new politicalPartyRegistrationTemplate({
        Name: request.body.Name,
        YearOfEstablishment: request.body.YearOfEstablishment,
        Field: request.body.Field,
        RegistrationNo: request.body.RegistrationNo,
        Email: request.body.Email,
        ContactNumber: request.body.ContactNumber,
        Address: request.body.Address,
        District: request.body.District,
        State: request.body.State,
        PinCode: request.body.PinCode,
        WebsiteLink: request.body.WebsiteLink,
        RepresentativeName: request.body.RepresentativeName,
        RepresentativeEmail: request.body.RepresentativeEmail,
        Designation: request.body.Designation,
        RepresentativeNo: request.body.RepresentativeNo
    })
    politicalPartyRegistration.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})
router.post('/CompanyForm', (request, response) => {
    const companyRegistration = new companyRegistrationTemplate({
        Name: request.body.Name,
        YearOfEstablishment: request.body.YearOfEstablishment,
        Field: request.body.Field,
        RegistrationNo: request.body.RegistrationNo,
        Email: request.body.Email,
        ContactNumber: request.body.ContactNumber,
        Address: request.body.Address,
        District: request.body.District,
        State: request.body.State,
        PinCode: request.body.PinCode,
        WebsiteLink: request.body.WebsiteLink,
        RepresentativeName: request.body.RepresentativeName,
        RepresentativeEmail: request.body.RepresentativeEmail,
        Designation: request.body.Designation,
        RepresentativeNo: request.body.RepresentativeNo
    })
    companyRegistration.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})
router.post('/CelebrityForm', (request, response) => {
    const celebrityRegistration = new celebrityRegistrationTemplate({
        Name: request.body.Name,
        Age: request.body.Age,
        Gender: request.body.Gender,
        DOB: request.body.DOB,
        Email: request.body.Email,
        Password: request.body.Password,
        BloodGroup: request.body.BloodGroup,
        DonationPreference: request.body.DonationPreference,
        LastDonationDate: request.body.LastDonationDate,
        ComponentDonated: request.body.ComponentDonated,
        Donated: request.body.Donated,
        InterestInDonation: request.body.InterestInDonation,
        PinCode: request.body.PinCode,
        State: request.body.State,
        District: request.body.District,
        Address: request.body.Address,
        Category: request.body.Category
    })
    celebrityRegistration.save()
        .then(data => {
            response.json(data)
        }).catch(err => {
            response.json(err)
        })
})
module.exports = router