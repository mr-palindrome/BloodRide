import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"

function DonorForm() {

    const navigate = useNavigate();

    const [donor, Setdonor] = useState({
        donorName: "", donorProfession: "", donorAge: "", donorGender: "", donorEmail: "",donorPassword:"", donorAddress: "", donorDistrict: "", donorState: "", donorPinCode: "", donorBloodGroup: "", donorDonated: "", componentDonated: "", lastDonationDate: "", donationPreference: ""
    });
    let key, value;
    const handleDonor = (e) => {
        key = e.target.name
        value = e.target.value
        Setdonor({ ...donor, [key]: value })
    }
    const handleSubmit = async () => {
        const donorRegistered = {
            donorName: donor.donorName,
            donorProfession: donor.donorProfession,
            donorAge: donor.donorAge,
            donorGender: donor.donorGender,
            donorEmail: donor.donorEmail,
            donorPassword: donor.donorPassword,
            donorAddress: donor.donorAddress,
            donorDistrict: donor.donorDistrict,
            donorState: donor.donorState,
            donorPinCode: donor.donorPinCode,
            donorBloodGroup: donor.donorBloodGroup,
            donorDonated: donor.donorDonated,
            componentDonated: donor.componentDonated,
            lastDonationDate: donor.lastDonationDate,
            donationPreference: donor.donationPreference
        }
        axios.post('http://localhost:4000/app/DonorForm', donorRegistered).then(response => { console.log(response.data) })
        alert("You are succesfully registeres as Donor!!")
        navigate("/");
    }
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div style={{ backgroundColor: "#102ac2", color: "white" }}>
                <h2 className='text-center py-3 text-warning'><u>Donor Registration</u></h2>
                <div className='container-sm mx-auto' >
                    <form method="POST">
                        <h4 className="pb-2 text-warning">Personal Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example1cg">Full Name</label>
                            <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg"
                                name='donorName'
                                value={donor.donorName}
                                onChange={handleDonor}
                                placeholder="Enter your Name" />

                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example2cg">Profession</label>
                                <input type="text" id="form3Example2cg" className=" py-0 form-control form-control-lg"
                                    name='donorProfession'
                                    value={donor.donorProfession}
                                    onChange={handleDonor}
                                    placeholder="Profession" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example3cg">Age</label>
                                <input type="number" id="form3Example3cg" className="py-0 form-control form-control-lg"
                                    name='donorAge'
                                    value={donor.donorAge}
                                    onChange={handleDonor}
                                    placeholder="Enter Age" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example4cg">Gender</label>
                                <input type="text" id="form3Example4cg" className="py-0 form-control form-control-lg"
                                    name="donorGender"
                                    value={donor.donorGender}
                                    onChange={handleDonor}
                                    placeholder="Gender" />
                            </div>
                        </div>

                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example5cg">Email-Id</label>
                                <input type="email" id="form3Example5cg" className=" py-0 form-control form-control-lg"
                                    name='donorEmail'
                                    value={donor.donorEmail}
                                    onChange={handleDonor}
                                    placeholder="Enter your Email" />

                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example6cg">Password</label>
                                <input type="password" id="form3Example6cg" className="py-0 form-control form-control-lg"
                                    name='donorPassword'
                                    value={donor.donorPassword}
                                    onChange={handleDonor}
                                    placeholder="Enter Password" />

                            </div>
                        </div>
                        <h4 className="pb-2 text-warning">Residence Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example7cg">Address</label>
                            <input type="text" id="form3Example7cg" className="py-0 form-control form-control-lg"
                                name='donorAddress'
                                value={donor.donorAddress}
                                onChange={handleDonor}
                                placeholder="Enter your Address" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example8cg">District</label>
                                <input type="text" id="form3Example8cg" className=" py-0 form-control form-control-lg"
                                    name='donorDistrict'
                                    value={donor.donorDistrict}
                                    onChange={handleDonor}
                                    placeholder="District" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example9cg">State</label>
                                <input type="text" id="form3Example9cg" className="py-0 form-control form-control-lg"
                                    name='donorState'
                                    value={donor.donorState}
                                    onChange={handleDonor}
                                    placeholder="State" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example10cg">Pin Code</label>
                                <input type="text" id="form3Example10cg" className="py-0 form-control form-control-lg"
                                    name="donorPinCode"
                                    value={donor.donorPinCode}
                                    onChange={handleDonor}
                                    placeholder="Pin Code" />
                            </div>
                        </div>
                        <h4 className="pb-2 text-warning">Blood Details</h4>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label className="form-label pb-1" htmlFor="form3Example11cg">Blood Group Required</label>
                                    <select className="form-control" id="form3Example11cg"
                                        name='donorBloodGroup'
                                        value={donor.donorBloodGroup}
                                        onChange={handleDonor}>
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
                            <div className="form-outline mb-4 col-lg-4 col-md-5 col-sm-12">
                                <div className="form-group">
                                    <label className="form-label pb-1" htmlFor="form3Example12cg">Have You Donated Blood Before??</label>
                                    <select className="form-control" id="form3Example12cg"
                                        name='donorDonated'
                                        value={donor.donorDonated}
                                        onChange={handleDonor}>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-3 col-sm-12">
                                <label className="form-label" htmlFor="form3Example13cg">Component Donated</label>
                                <input type="text" id="form3Example13cg" className=" py-0 form-control form-control-lg"
                                    name='componentDonated'
                                    value={donor.componentDonated}
                                    onChange={handleDonor}
                                    placeholder="Component Donated" />

                            </div>
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example14cg">Date of Last Donation</label>
                                <input type="date" id="form3Example14cg" className="py-0 form-control form-control-lg"
                                    name='lastDonationDate'
                                    value={donor.lastDonationDate}
                                    onChange={handleDonor}
                                    placeholder="Date of Last Donation" />
                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="form-label pb-1" htmlFor="form3Example15cg">Donation Preference</label>
                                    <select className="form-control" id="form3Example15cg"
                                        name='donationPreference'
                                        value={donor.donationPreference}
                                        onChange={handleDonor}>
                                        <option>When Patient in Need</option>
                                        <option>Occasional Donor</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button"
                                className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body mb-3" onClick={handleSubmit}>Raise Request.</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DonorForm;
