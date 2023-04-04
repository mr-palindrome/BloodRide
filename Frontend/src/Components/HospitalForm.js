import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"

function Raise_Request() {

    const navigate = useNavigate();

    const [hospital, SetHospital] = useState({
        Name: "", YearOfEstablishment: "", Type: "", RegistrationNo: "", Email: "", ContactNumber: "", PinCode: "", State: "", District: "", Address: "", WebsiteLink: "", HospitalDarpan: "", RepresentativeEmail: "", RepresentativeName: "", RepresentativeNo: "", Designation: ""
    });
    let key, value;
    const handleHospital = (e) => {
        key = e.target.name
        value = e.target.value
        SetHospital({ ...hospital, [key]: value })
    }
    const handleSubmit = async () => {
        const Registered = {
            Name: hospital.Name,
            YearOfEstablishment: hospital.YearOfEstablishment,
            Type: hospital.Type,
            RegistrationNo: hospital.RegistrationNo,
            Email: hospital.Email,
            ContactNumber: hospital.ContactNumber,
            Address: hospital.Address,
            District: hospital.District,
            State: hospital.State,
            PinCode: hospital.PinCode,
            WebsiteLink: hospital.WebsiteLink,
            RepresentativeName: hospital.RepresentativeName,
            RepresentativeEmail: hospital.RepresentativeEmail,
            Designation: hospital.Designation,
            RepresentativeNo: hospital.RepresentativeNo
        }
        axios.post('http://localhost:4000/app/HospitalForm', Registered).then(response => { console.log(response.data) })
        alert("Request has been raised!")
        navigate("/");
    }
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div style={{ backgroundColor: "red", color: "white" }}>
                <h2 className='text-center py-3'><u>Hospital Registration</u></h2>
                <div className='container-sm mx-auto' >
                    <form method="POST">
                        <h4 className="pb-2">Hospital Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example1cg">Name Your Hospital</label>
                            <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg"
                                name='Name'
                                value={hospital.Name}
                                onChange={handleHospital}
                                placeholder="Enter Hospital Name" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example2cg">Year Of Establishment</label>
                                <input type="text" id="form3Example2cg" className=" py-0 form-control form-control-lg"
                                    name='YearOfEstablishment'
                                    value={hospital.YearOfEstablishment}
                                    onChange={handleHospital}
                                    placeholder="Year Of Establishment" />

                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label pb-1" htmlFor="form3Example3cg">Type Of Hospital</label>
                                <select className="form-control" id="form3Example3cg"
                                    name='Type'
                                    value={hospital.Type}
                                    onChange={handleHospital}>
                                    <option>Government</option>
                                    <option>Private</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example4cg">Registration Number</label>
                            <input type="text" id="form3Example4cg" className=" py-0 form-control form-control-lg"
                                name='RegistrationNo'
                                value={hospital.RegistrationNo}
                                onChange={handleHospital}
                                placeholder="Registration Number" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example5cg">Official Email-Id</label>
                            <input type="email" id="form3Example5cg" className=" py-0 form-control form-control-lg"
                                name='Email'
                                value={hospital.Email}
                                onChange={handleHospital}
                                placeholder="Enter Official Email" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example6cg">Contact Number</label>
                            <input type="text" id="form3Example6cg" className=" py-0 form-control form-control-lg"
                                name='ContactNumber'
                                value={hospital.ContactNumber}
                                onChange={handleHospital}
                                placeholder="Contact Number" />
                        </div>

                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example7cg">Address</label>
                            <input type="text" id="form3Example7cg" className="py-0 form-control form-control-lg"
                                name='Address'
                                value={hospital.Address}
                                onChange={handleHospital}
                                placeholder="Enter your Address" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example8cg">District</label>
                                <input type="text" id="form3Example8cg" className=" py-0 form-control form-control-lg"
                                    name='District'
                                    value={hospital.District}
                                    onChange={handleHospital}
                                    placeholder="District" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example9cg">State</label>
                                <input type="text" id="form3Example9cg" className="py-0 form-control form-control-lg"
                                    name='State'
                                    value={hospital.State}
                                    onChange={handleHospital}
                                    placeholder="State" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example10cg">Pin Code</label>
                                <input type="text" id="form3Example10cg" className="py-0 form-control form-control-lg"
                                    name="PinCode"
                                    value={hospital.PinCode}
                                    onChange={handleHospital}
                                    placeholder="Pin Code" />
                            </div>
                        </div>
                        <div className="form-outline mb-4 col">
                            <label className="form-label" htmlFor="form3Example11cg">Website Link</label>
                            <input type="text" id="form3Example11cg" className="py-0 form-control form-control-lg"
                                name="WebsiteLink"
                                value={hospital.WebsiteLink}
                                onChange={handleHospital}
                                placeholder="Website Link" />
                        </div>
                        <h4 className="pb-2">Contact Person Details</h4>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example13cg">Name</label>
                            <input type="text" id="form3Example13cg" className=" py-0 form-control form-control-lg"
                                name="RepresentativeName"
                                value={hospital.RepresentativeName}
                                onChange={handleHospital}
                                placeholder="Representative Name" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example14cg">Designation</label>
                            <input type="text" id="form3Example14cg" className=" py-0 form-control form-control-lg"
                                name='Designation'
                                value={hospital.Designation}
                                onChange={handleHospital}
                                placeholder="Designation" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example15cg">Email</label>
                            <input type="text" id="form3Example15cg" className=" py-0 form-control form-control-lg"
                                name='RepresentativeEmail'
                                value={hospital.RepresentativeEmail}
                                onChange={handleHospital}
                                placeholder="Email" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example16cg">Contact Number</label>
                            <input type="text" id="form3Example16cg" className=" py-0 form-control form-control-lg"
                                name='RepresentativeNo'
                                value={hospital.RepresentativeNo}
                                onChange={handleHospital}
                                placeholder="Contact Number" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button"
                                className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body mb-3" onClick={handleSubmit}>Register</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Raise_Request;
