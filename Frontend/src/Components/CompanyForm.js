import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"

function Raise_Request() {

    const navigate = useNavigate();

    const [company, SetCompany] = useState({
        Name: "", YearOfEstablishment: "", Field: "", RegistrationNo: "", Email: "", ContactNumber: "", PinCode: "", State: "", District: "", Address: "", WebsiteLink: "", CompanyDarpan: "", RepresentativeEmail: "", RepresentativeName: "", RepresentativeNo: "", Designation: ""
    });
    let key, value;
    const handleCompany = (e) => {
        key = e.target.name
        value = e.target.value
        SetCompany({ ...company, [key]: value })
    }
    const handleSubmit = async () => {
        const Registered = {
            Name: company.Name,
            YearOfEstablishment: company.YearOfEstablishment,
            Field: company.Field,
            RegistrationNo: company.RegistrationNo,
            Email: company.Email,
            ContactNumber: company.ContactNumber,
            Address: company.Address,
            District: company.District,
            State: company.State,
            PinCode: company.PinCode,
            WebsiteLink: company.WebsiteLink,
            RepresentativeName: company.RepresentativeName,
            RepresentativeEmail: company.RepresentativeEmail,
            Designation: company.Designation,
            RepresentativeNo: company.RepresentativeNo
        }
        axios.post('http://localhost:4000/app/CompanyForm', Registered).then(response => { console.log(response.data) })
        alert("Request has been raised!")
        navigate("/");
    }
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div style={{ backgroundColor: "red", color: "white" }}>

                <h2 className='text-center py-3'><u>Company Registration</u></h2>

                <h2 className='text-center py-3'><u>NGO Registration</u></h2>

                <div className='container-sm mx-auto' >
                    <form method="POST">
                        <h4 className="pb-2">Company Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example1cg">Name Your Company</label>
                            <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg"
                                name='Name'
                                value={company.Name}
                                onChange={handleCompany}
                                placeholder="Enter Company Name" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example2cg">Year Of Establishment</label>
                                <input type="text" id="form3Example2cg" className=" py-0 form-control form-control-lg"
                                    name='YearOfEstablishment'
                                    value={company.YearOfEstablishment}
                                    onChange={handleCompany}
                                    placeholder="Year Of Establishment" />

                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example3cg">Field of Company</label>
                                <input type="text" id="form3Example3cg" className="py-0 form-control form-control-lg"
                                    name='Field'
                                    value={company.Field}
                                    onChange={handleCompany}
                                    placeholder=" Field of Company" />
                            </div>
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example4cg">Registration Number</label>
                            <input type="text" id="form3Example4cg" className=" py-0 form-control form-control-lg"
                                name='RegistrationNo'
                                value={company.RegistrationNo}
                                onChange={handleCompany}
                                placeholder="Registration Number" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example5cg">Official Email-Id</label>
                            <input type="email" id="form3Example5cg" className=" py-0 form-control form-control-lg"
                                name='Email'
                                value={company.Email}
                                onChange={handleCompany}
                                placeholder="Enter Official Email" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example6cg">Contact Number</label>
                            <input type="text" id="form3Example6cg" className=" py-0 form-control form-control-lg"
                                name='ContactNumber'
                                value={company.ContactNumber}
                                onChange={handleCompany}
                                placeholder="Contact Number" />
                        </div>

                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example7cg">Address</label>
                            <input type="text" id="form3Example7cg" className="py-0 form-control form-control-lg"
                                name='Address'
                                value={company.Address}
                                onChange={handleCompany}
                                placeholder="Enter your Address" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example8cg">District</label>
                                <input type="text" id="form3Example8cg" className=" py-0 form-control form-control-lg"
                                    name='District'
                                    value={company.District}
                                    onChange={handleCompany}
                                    placeholder="District" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example9cg">State</label>
                                <input type="text" id="form3Example9cg" className="py-0 form-control form-control-lg"
                                    name='State'
                                    value={company.State}
                                    onChange={handleCompany}
                                    placeholder="State" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example10cg">Pin Code</label>
                                <input type="text" id="form3Example10cg" className="py-0 form-control form-control-lg"
                                    name="PinCode"
                                    value={company.PinCode}
                                    onChange={handleCompany}
                                    placeholder="Pin Code" />
                            </div>
                        </div>
                        <div className="form-outline mb-4 col">
                            <label className="form-label" htmlFor="form3Example11cg">Website Link</label>
                            <input type="text" id="form3Example11cg" className="py-0 form-control form-control-lg"
                                name="WebsiteLink"
                                value={company.WebsiteLink}
                                onChange={handleCompany}
                                placeholder="Website Link" />
                        </div>
                        <h4 className="pb-2">Contact Person Details</h4>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example13cg">Name</label>
                            <input type="text" id="form3Example13cg" className=" py-0 form-control form-control-lg"
                                name="RepresentativeName"
                                value={company.RepresentativeName}
                                onChange={handleCompany}
                                placeholder="Representative Name" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example14cg">Designation</label>
                            <input type="text" id="form3Example14cg" className=" py-0 form-control form-control-lg"
                                name='Designation'
                                value={company.Designation}
                                onChange={handleCompany}
                                placeholder="Designation" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example15cg">Email</label>
                            <input type="text" id="form3Example15cg" className=" py-0 form-control form-control-lg"
                                name='RepresentativeEmail'
                                value={company.RepresentativeEmail}
                                onChange={handleCompany}
                                placeholder="Email" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example16cg">Contact Number</label>
                            <input type="text" id="form3Example16cg" className=" py-0 form-control form-control-lg"
                                name='RepresentativeNo'
                                value={company.RepresentativeNo}
                                onChange={handleCompany}
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
