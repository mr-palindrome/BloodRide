import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"

function Raise_Request() {

    const navigate = useNavigate();

    const [politicalParty, SetPoliticalParty] = useState({
        Name: "", YearOfEstablishment: "", Type: "", Wing: "", Email: "", ContactNumber: "", PinCode: "", State: "", District: "", Address: "", WebsiteLink: "", PoliticalPartyDarpan: "", RepresentativeEmail: "", RepresentativeName: "", RepresentativeNo: "", Designation: ""
    });
    let key, value;
    const handlePoliticalParty = (e) => {
        key = e.target.name
        value = e.target.value
        SetPoliticalParty({ ...politicalParty, [key]: value })
    }
    const handleSubmit = async () => {
        const Registered = {
            Name: politicalParty.Name,
            YearOfEstablishment: politicalParty.YearOfEstablishment,
            Type: politicalParty.Type,
            Wing: politicalParty.Wing,
            Email: politicalParty.Email,
            ContactNumber: politicalParty.ContactNumber,
            Address: politicalParty.Address,
            District: politicalParty.District,
            State: politicalParty.State,
            PinCode: politicalParty.PinCode,
            WebsiteLink: politicalParty.WebsiteLink,
            RepresentativeName: politicalParty.RepresentativeName,
            RepresentativeEmail: politicalParty.RepresentativeEmail,
            Designation: politicalParty.Designation,
            RepresentativeNo: politicalParty.RepresentativeNo
        }
        axios.post('http://localhost:4000/app/PoliticalPartyForm', Registered).then(response => { console.log(response.data) })
        alert("Request has been raised!")
        navigate("/");
    }
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div style={{ backgroundColor: "red", color: "white" }}>
                <h2 className='text-center py-3'><u>Political Party Registration</u></h2>
                <div className='container-sm mx-auto' >
                    <form method="POST">
                        <h4 className="pb-2">Political Party Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example1cg">Name Your PoliticalParty</label>
                            <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg"
                                name='Name'
                                value={politicalParty.Name}
                                onChange={handlePoliticalParty}
                                placeholder="Enter PoliticalParty Name" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example2cg">Wing</label>
                            <input type="text" id="form3Example2cg" className=" py-0 form-control form-control-lg"
                                name='Wing'
                                value={politicalParty.Wing}
                                onChange={handlePoliticalParty}
                                placeholder="Wing Youth/Student/Women" />

                        </div>

                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example4cg">Registration Number</label>
                            <input type="text" id="form3Example4cg" className=" py-0 form-control form-control-lg"
                                name='RegistrationNo'
                                value={politicalParty.RegistrationNo}
                                onChange={handlePoliticalParty}
                                placeholder="Registration Number" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example5cg">Official Email-Id</label>
                            <input type="email" id="form3Example5cg" className=" py-0 form-control form-control-lg"
                                name='Email'
                                value={politicalParty.Email}
                                onChange={handlePoliticalParty}
                                placeholder="Enter Official Email" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example6cg">Contact Number</label>
                            <input type="text" id="form3Example6cg" className=" py-0 form-control form-control-lg"
                                name='ContactNumber'
                                value={politicalParty.ContactNumber}
                                onChange={handlePoliticalParty}
                                placeholder="Contact Number" />
                        </div>

                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example7cg">Party Office Address</label>
                            <input type="text" id="form3Example7cg" className="py-0 form-control form-control-lg"
                                name='Address'
                                value={politicalParty.Address}
                                onChange={handlePoliticalParty}
                                placeholder="Party Office Address" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example8cg">District</label>
                                <input type="text" id="form3Example8cg" className=" py-0 form-control form-control-lg"
                                    name='District'
                                    value={politicalParty.District}
                                    onChange={handlePoliticalParty}
                                    placeholder="District" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example9cg">State</label>
                                <input type="text" id="form3Example9cg" className="py-0 form-control form-control-lg"
                                    name='State'
                                    value={politicalParty.State}
                                    onChange={handlePoliticalParty}
                                    placeholder="State" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example10cg">Pin Code</label>
                                <input type="text" id="form3Example10cg" className="py-0 form-control form-control-lg"
                                    name="PinCode"
                                    value={politicalParty.PinCode}
                                    onChange={handlePoliticalParty}
                                    placeholder="Pin Code" />
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example11cg">Website Link</label>
                            <input type="text" id="form3Example11cg" className="py-0 form-control form-control-lg"
                                name="WebsiteLink"
                                value={politicalParty.WebsiteLink}
                                onChange={handlePoliticalParty}
                                placeholder="Website Link" />
                        </div>
                        <h4 className="pb-2">Contact Person Details</h4>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example13cg">Name</label>
                            <input type="text" id="form3Example13cg" className=" py-0 form-control form-control-lg"
                                name="RepresentativeName"
                                value={politicalParty.RepresentativeName}
                                onChange={handlePoliticalParty}
                                placeholder="Representative Name" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example14cg">Designation</label>
                            <input type="text" id="form3Example14cg" className=" py-0 form-control form-control-lg"
                                name='Designation'
                                value={politicalParty.Designation}
                                onChange={handlePoliticalParty}
                                placeholder="Designation" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example15cg">Email</label>
                            <input type="text" id="form3Example15cg" className=" py-0 form-control form-control-lg"
                                name='RepresentativeEmail'
                                value={politicalParty.RepresentativeEmail}
                                onChange={handlePoliticalParty}
                                placeholder="Email" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example16cg">Contact Number</label>
                            <input type="text" id="form3Example16cg" className=" py-0 form-control form-control-lg"
                                name='RepresentativeNo'
                                value={politicalParty.RepresentativeNo}
                                onChange={handlePoliticalParty}
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
