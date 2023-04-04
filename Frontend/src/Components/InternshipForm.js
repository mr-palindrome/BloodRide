import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"

function Raise_Request() {

    const navigate = useNavigate();

    const [intern, SetIntern] = useState({
        Name: "", Profession: "", Age: "", Gender: "", DOB: "", Email: "", Password: "", BloodGroup: "", DonationPreference: "", LastDonationDate: "", ComponentDonated: "", Donated: "", InterestInDonation: "", PinCode: "", State: "", District: "", Address: "", AreaOfInterest: "", Institute: ""
    });
    let key, value;
    const handleIntern = (e) => {
        key = e.target.name
        value = e.target.value
        SetIntern({ ...intern, [key]: value })
    }
    const handleSubmit = async () => {
        const Registered = {
            Name: intern.Name,
            Profession: intern.Profession,
            Age: intern.Age,
            Gender: intern.Gender,
            DOB: intern.DOB,
            Email: intern.Email,
            Password: intern.Password,
            Institute: intern.Institute,
            AreaOfInterest: intern.AreaOfInterest,
            Address: intern.Address,
            District: intern.District,
            State: intern.State,
            PinCode: intern.PinCode,
            InterestInDonation: intern.InterestInDonation,
            BloodGroup: intern.BloodGroup,
            Donated: intern.Donated,
            ComponentDonated: intern.ComponentDonated,
            LastDonationDate: intern.LastDonationDate,
            DonationPreference: intern.DonationPreference,
        }
        axios.post('http://localhost:4000/app/InternshipForm', Registered).then(response => { console.log(response.data) })
        alert("Request has been raised!")
        navigate("/");
    }
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div style={{ backgroundColor: "red", color: "white" }}>
                <h2 className='text-center py-3'><u>Register for Internship</u></h2>
                <div className='container-sm mx-auto' >
                    <form method="POST">
                        <h4 className="pb-2">Intern Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example1cg">Name of Intern</label>
                            <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg"
                                name='Name'
                                value={intern.Name}
                                onChange={handleIntern}
                                placeholder="Enter Intern Name" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example2cg">Profession</label>
                                <input type="text" id="form3Example2cg" className=" py-0 form-control form-control-lg"
                                    name='Profession'
                                    value={intern.Profession}
                                    onChange={handleIntern}
                                    placeholder="Profession" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example3cg">Age</label>
                                <input type="number" id="form3Example3cg" className="py-0 form-control form-control-lg"
                                    name='Age'
                                    value={intern.Age}
                                    onChange={handleIntern}
                                    placeholder="Enter Age" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example4cg">Gender</label>
                                <input type="text" id="form3Example4cg" className="py-0 form-control form-control-lg"
                                    name="Gender"
                                    value={intern.Gender}
                                    onChange={handleIntern}
                                    placeholder="Gender" />
                            </div>
                        </div>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example5cg">Date of Birth</label>
                            <input type="date" id="form3Example5cg" className="py-0 form-control form-control-lg"
                                name='DOB'
                                value={intern.DOB}
                                onChange={handleIntern}
                                placeholder="Date of Birth" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example6cg">Email-Id</label>
                                <input type="email" id="form3Example6cg" className=" py-0 form-control form-control-lg"
                                    name='Email'
                                    value={intern.Email}
                                    onChange={handleIntern}
                                    placeholder="Enter your Email" />

                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example7cg">Password</label>
                                <input type="password" id="form3Example7cg" className="py-0 form-control form-control-lg"
                                    name='Password'
                                    value={intern.Password}
                                    onChange={handleIntern}
                                    placeholder="Enter Password" />

                            </div>
                        </div>
                        <div className="form-outline mb">
                            <label className="form-label" htmlFor="form3Example8cg">College/Institute Name</label>
                            <input type="text" id="form3Example8cg" className="py-0 form-control form-control-lg"
                                name='Institute'
                                value={intern.Institute}
                                onChange={handleIntern}
                                placeholder="College/Institute Name" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example9cg">Area of Interest</label>
                            <input type="text" id="form3Example9cg" className="py-0 form-control form-control-lg"
                                name='AreaOfInterest'
                                value={intern.AreaOfInterest}
                                onChange={handleIntern}
                                placeholder="Area of Interest" />
                        </div>
                        <h4 className="pb-2">Residence Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example10cg">Address</label>
                            <input type="text" id="form3Example10cg" className="py-0 form-control form-control-lg"
                                name='Address'
                                value={intern.Address}
                                onChange={handleIntern}
                                placeholder="Enter your Address" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example11cg">District</label>
                                <input type="text" id="form3Example11cg" className=" py-0 form-control form-control-lg"
                                    name='District'
                                    value={intern.District}
                                    onChange={handleIntern}
                                    placeholder="District" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example12cg">State</label>
                                <input type="text" id="form3Example12cg" className="py-0 form-control form-control-lg"
                                    name='State'
                                    value={intern.State}
                                    onChange={handleIntern}
                                    placeholder="State" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example13cg">Pin Code</label>
                                <input type="text" id="form3Example13cg" className="py-0 form-control form-control-lg"
                                    name="PinCode"
                                    value={intern.PinCode}
                                    onChange={handleIntern}
                                    placeholder="Pin Code" />
                            </div>
                        </div>

                        <div className="form-group mb-4">
                            <label className="form-label pb-1" htmlFor="form3Example14cg">Whether Intereseted in Donating Blood??</label>
                            <select className="form-control" id="form3Example14cg"
                                name='InterestInDonation'
                                value={intern.InterestInDonation}
                                onChange={handleIntern}>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <h4 className="pb-2">Blood Details</h4>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-2 col-sm-12">
                                <div className="form-group">
                                    <label className="form-label pb-1" htmlFor="form3Example15cg">Blood Group</label>
                                    <select className="form-control" id="form3Example15cg"
                                        name='BloodGroup'
                                        value={intern.BloodGroup}
                                        onChange={handleIntern}>
                                        <option>O+ve</option>
                                        <option>O-ve</option>
                                        <option>A+ve</option>
                                        <option>A-ve</option>
                                        <option>B+ve</option>
                                        <option>AB-ve</option>
                                        <option>AA+ve</option>
                                        <option>Bombay Blood</option>
                                        <option>INRA</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group mb-4 col-lg-4 col-sm-12">
                                <label className="form-label pb-1" htmlFor="form3Example16cg">Have you Donated Blood Before??</label>
                                <select className="form-control" id="form3Example16cg"
                                    name='Donated'
                                    value={intern.Donated}
                                    onChange={handleIntern}>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example17cg">Which Blood Component have you Donated??</label>
                                <input type="text" id="form3Example17cg" className=" py-0 form-control form-control-lg"
                                    name='ComponentDonated'
                                    value={intern.ComponentDonated}
                                    onChange={handleIntern}
                                    placeholder="Component Donated" />
                            </div>
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example18cg">Date of Last Donation</label>
                                <input type="date" id="form3Example18cg" className="py-0 form-control form-control-lg"
                                    name='LastDonationDate'
                                    value={intern.LastDonationDate}
                                    onChange={handleIntern}
                                    placeholder="Date of Last Donation" />
                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="form-label pb-1" htmlFor="form3Example19cg">Donation Preference</label>
                                    <select className="form-control" id="form3Example19cg"
                                        name='DonationPreference'
                                        value={intern.DonationPreference}
                                        onChange={handleIntern}>
                                        <option>When Patient in Need</option>
                                        <option>Occasional Donation</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button"
                                className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body mb-3" onClick={handleSubmit}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Raise_Request;
