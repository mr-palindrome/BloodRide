import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"

function Raise_Request() {

    const navigate = useNavigate();

    const [school, SetSchool] = useState({
        Name: "", YearOfEstablishment: "", Type: "", RegistrationNo: "", Email: "", ContactNumber: "", PinCode: "", State: "", District: "", Address: "", WebsiteLink: "", SchoolDarpan: "", RepresentativeEmail: "", RepresentativeName: "", RepresentativeNo: "", Designation: ""
    });
    let key, value;
    const handleSchool = (e) => {
        key = e.target.name
        value = e.target.value
        SetSchool({ ...school, [key]: value })
    }
    const handleSubmit = async () => {
        const Registered = {
            Name: school.Name,
            YearOfEstablishment: school.YearOfEstablishment,
            Type: school.Type,
            RegistrationNo: school.RegistrationNo,
            Email: school.Email,
            ContactNumber: school.ContactNumber,
            Address: school.Address,
            District: school.District,
            State: school.State,
            PinCode: school.PinCode,
            WebsiteLink: school.WebsiteLink,
            RepresentativeName: school.RepresentativeName,
            RepresentativeEmail: school.RepresentativeEmail,
            Designation: school.Designation,
            RepresentativeNo: school.RepresentativeNo
        }
        axios.post('http://localhost:4000/app/SchoolForm', Registered).then(response => { console.log(response.data) })
        alert("Request has been raised!")
        navigate("/");
    }
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div style={{ backgroundColor: "red", color: "white" }}>
                <h2 className='text-center py-3'><u>School Registration</u></h2>

                <h2 className='text-center py-3'><u>NGO Registration</u></h2>
                <div className='container-sm mx-auto' >
                    <form method="POST">
                        <h4 className="pb-2">School Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example1cg">Name Your School</label>
                            <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg"
                                name='Name'
                                value={school.Name}
                                onChange={handleSchool}
                                placeholder="Enter School Name" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example2cg">Year Of Establishment</label>
                                <input type="text" id="form3Example2cg" className=" py-0 form-control form-control-lg"
                                    name='YearOfEstablishment'
                                    value={school.YearOfEstablishment}
                                    onChange={handleSchool}
                                    placeholder="Year Of Establishment" />

                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label pb-1" htmlFor="form3Example3cg">Type Of School</label>
                                <select className="form-control" id="form3Example3cg"
                                    name='Type'
                                    value={school.Type}
                                    onChange={handleSchool}>
                                    <option>Government</option>
                                    <option>Private</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example4cg">Registration Number</label>
                            <input type="text" id="form3Example4cg" className=" py-0 form-control form-control-lg"
                                name='RegistrationNo'
                                value={school.RegistrationNo}
                                onChange={handleSchool}
                                placeholder="Registration Number" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example5cg">Official Email-Id</label>
                            <input type="email" id="form3Example5cg" className=" py-0 form-control form-control-lg"
                                name='Email'
                                value={school.Email}
                                onChange={handleSchool}
                                placeholder="Enter Official Email" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example6cg">Contact Number</label>
                            <input type="text" id="form3Example6cg" className=" py-0 form-control form-control-lg"
                                name='ContactNumber'
                                value={school.ContactNumber}
                                onChange={handleSchool}
                                placeholder="Contact Number" />
                        </div>

                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example7cg">Address</label>
                            <input type="text" id="form3Example7cg" className="py-0 form-control form-control-lg"
                                name='Address'
                                value={school.Address}
                                onChange={handleSchool}
                                placeholder="Enter your Address" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example8cg">District</label>
                                <input type="text" id="form3Example8cg" className=" py-0 form-control form-control-lg"
                                    name='District'
                                    value={school.District}
                                    onChange={handleSchool}
                                    placeholder="District" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example9cg">State</label>
                                <input type="text" id="form3Example9cg" className="py-0 form-control form-control-lg"
                                    name='State'
                                    value={school.State}
                                    onChange={handleSchool}
                                    placeholder="State" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example10cg">Pin Code</label>
                                <input type="text" id="form3Example10cg" className="py-0 form-control form-control-lg"
                                    name="PinCode"
                                    value={school.PinCode}
                                    onChange={handleSchool}
                                    placeholder="Pin Code" />
                            </div>
                        </div>
                        <div className="form-outline mb-4 col">
                            <label className="form-label" htmlFor="form3Example11cg">Website Link</label>
                            <input type="text" id="form3Example11cg" className="py-0 form-control form-control-lg"
                                name="WebsiteLink"
                                value={school.WebsiteLink}
                                onChange={handleSchool}
                                placeholder="Website Link" />
                        </div>
                        <h4 className="pb-2">Contact Person Details</h4>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example13cg">Name</label>
                            <input type="text" id="form3Example13cg" className=" py-0 form-control form-control-lg"
                                name="RepresentativeName"
                                value={school.RepresentativeName}
                                onChange={handleSchool}
                                placeholder="Representative Name" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example14cg">Designation</label>
                            <input type="text" id="form3Example14cg" className=" py-0 form-control form-control-lg"
                                name='Designation'
                                value={school.Designation}
                                onChange={handleSchool}
                                placeholder="Designation" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example15cg">Email</label>
                            <input type="text" id="form3Example15cg" className=" py-0 form-control form-control-lg"
                                name='RepresentativeEmail'
                                value={school.RepresentativeEmail}
                                onChange={handleSchool}
                                placeholder="Email" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example16cg">Contact Number</label>
                            <input type="text" id="form3Example16cg" className=" py-0 form-control form-control-lg"
                                name='RepresentativeNo'
                                value={school.RepresentativeNo}
                                onChange={handleSchool}
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
