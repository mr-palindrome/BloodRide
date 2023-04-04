import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"

function Raise_Request() {

    const navigate = useNavigate();

    const [celebrity, SetCelebrity] = useState({
        Name: "", Age: "", Gender: "", DOB: "", Email: "", Password: "", BloodGroup: "", DonationPreference: "", LastDonationDate: "", ComponentDonated: "", Donated: "", InterestInDonation: "", PinCode: "", State: "", District: "", Address: "", Category:""
    });
    let key, value;
    const handleCelebrity = (e) => {
        key = e.target.name
        value = e.target.value
        SetCelebrity({ ...celebrity, [key]: value })
    }
    const handleSubmit = async () => {
        const Registered = {
            Name: celebrity.Name,
            Age: celebrity.Age,
            Gender: celebrity.Gender,
            DOB: celebrity.DOB,
            Email: celebrity.Email,
            Password: celebrity.Password,
            Category: celebrity.Category,
            Address: celebrity.Address,
            District: celebrity.District,
            State: celebrity.State,
            PinCode: celebrity.PinCode,
            InterestInDonation: celebrity.InterestInDonation,
            BloodGroup: celebrity.BloodGroup,
            Donated: celebrity.Donated,
            ComponentDonated: celebrity.ComponentDonated,
            LastDonationDate: celebrity.LastDonationDate,
            DonationPreference: celebrity.DonationPreference,
        }
        axios.post('http://localhost:4000/app/CelebrityForm', Registered).then(response => { console.log(response.data) })
        alert("Request has been raised!")
        navigate("/");
    }
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div style={{ backgroundColor: "red", color: "white" }}>
                <h2 className='text-center py-3'><u>Register as Celebrity</u></h2>
                <div className='container-md mx-auto' >
                    <form method="POST">
                        <h4 className="pb-2">Celebrity Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example1cg">Name</label>
                            <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg"
                                name='Name'
                                value={celebrity.Name}
                                onChange={handleCelebrity}
                                placeholder="Enter Your Name" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example3cg">Age</label>
                                <input type="number" id="form3Example3cg" className="py-0 form-control form-control-lg"
                                    name='Age'
                                    value={celebrity.Age}
                                    onChange={handleCelebrity}
                                    placeholder="Enter Age" />
                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example4cg">Gender</label>
                                <input type="text" id="form3Example4cg" className="py-0 form-control form-control-lg"
                                    name="Gender"
                                    value={celebrity.Gender}
                                    onChange={handleCelebrity}
                                    placeholder="Gender" />
                            </div>
                        </div>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example5cg">Date of Birth</label>
                            <input type="date" id="form3Example5cg" className="py-0 form-control form-control-lg"
                                name='DOB'
                                value={celebrity.DOB}
                                onChange={handleCelebrity}
                                placeholder="Date of Birth" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example6cg">Email-Id</label>
                                <input type="email" id="form3Example6cg" className=" py-0 form-control form-control-lg"
                                    name='Email'
                                    value={celebrity.Email}
                                    onChange={handleCelebrity}
                                    placeholder="Enter your Email" />

                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example7cg">Password</label>
                                <input type="password" id="form3Example7cg" className="py-0 form-control form-control-lg"
                                    name='Password'
                                    value={celebrity.Password}
                                    onChange={handleCelebrity}
                                    placeholder="Enter Password" />

                            </div>
                        </div>
                        <div className="form-outline mb">
                            <label className="form-label" htmlFor="form3Example8cg">Category</label>
                            <input type="text" id="form3Example8cg" className="py-0 form-control form-control-lg"
                                name='Category'
                                value={celebrity.Category}
                                onChange={handleCelebrity}
                                placeholder="Category" />
                        </div>
                        <h4 className="pb-2">Residence Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example10cg">Address</label>
                            <input type="text" id="form3Example10cg" className="py-0 form-control form-control-lg"
                                name='Address'
                                value={celebrity.Address}
                                onChange={handleCelebrity}
                                placeholder="Enter your Address" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example11cg">District</label>
                                <input type="text" id="form3Example11cg" className=" py-0 form-control form-control-lg"
                                    name='District'
                                    value={celebrity.District}
                                    onChange={handleCelebrity}
                                    placeholder="District" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example12cg">State</label>
                                <input type="text" id="form3Example12cg" className="py-0 form-control form-control-lg"
                                    name='State'
                                    value={celebrity.State}
                                    onChange={handleCelebrity}
                                    placeholder="State" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example13cg">Pin Code</label>
                                <input type="text" id="form3Example13cg" className="py-0 form-control form-control-lg"
                                    name="PinCode"
                                    value={celebrity.PinCode}
                                    onChange={handleCelebrity}
                                    placeholder="Pin Code" />
                            </div>
                        </div>

                        <div className="form-group mb-4">
                            <label className="form-label pb-1" htmlFor="form3Example14cg">Whether Intereseted in Donating Blood??</label>
                            <select className="form-control" id="form3Example14cg"
                                name='InterestInDonation'
                                value={celebrity.InterestInDonation}
                                onChange={handleCelebrity}>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <h4 className="pb-2">Blood Details</h4>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-3 col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label className="form-label pb-1" htmlFor="form3Example15cg">Blood Group</label>
                                    <select className="form-control" id="form3Example15cg"
                                        name='BloodGroup'
                                        value={celebrity.BloodGroup}
                                        onChange={handleCelebrity}>
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
                            <div className="form-group mb-4 col-lg-4 col-md-5 col-sm-12">
                                <label className="form-label pb-1" htmlFor="form3Example16cg">Have you Donated Blood Before??</label>
                                <select className="form-control" id="form3Example16cg"
                                    name='Donated'
                                    value={celebrity.Donated}
                                    onChange={handleCelebrity}>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                            <div className="form-outline mb-4 col-lg-5 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example17cg">Component Donated??</label>
                                <input type="text" id="form3Example17cg" className=" py-0 form-control form-control-lg"
                                    name='ComponentDonated'
                                    value={celebrity.ComponentDonated}
                                    onChange={handleCelebrity}
                                    placeholder="Component Donated" />
                            </div>
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example18cg">Date of Last Donation</label>
                                <input type="date" id="form3Example18cg" className="py-0 form-control form-control-lg"
                                    name='LastDonationDate'
                                    value={celebrity.LastDonationDate}
                                    onChange={handleCelebrity}
                                    placeholder="Date of Last Donation" />
                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="form-label pb-1" htmlFor="form3Example19cg">Donation Preference</label>
                                    <select className="form-control" id="form3Example19cg"
                                        name='DonationPreference'
                                        value={celebrity.DonationPreference}
                                        onChange={handleCelebrity}>
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
