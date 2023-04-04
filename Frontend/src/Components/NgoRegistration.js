import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"

function Raise_Request() {

    const navigate = useNavigate();

    const [ngo, SetNgo] = useState({
        Name: "",YearOfEstablishment:"",WorkingSector:"",RegistrationNo:"", Email: "",ContactNumber:"", PinCode: "", State: "", District: "", Address: "",WebsiteLink:"",NgoDarpan:"",RepresentativeEmail:"",RepresentativeName:"",RepresentativeNo:"",Designation:""
    });
    let key, value;
    const handleNgo = (e) => {
        key = e.target.name
        value = e.target.value
        SetNgo({ ...ngo, [key]: value })
    }
    const handleSubmit = async () => {
        const Registered = {
            Name: ngo.Name,
            YearOfEstablishment:ngo.YearOfEstablishment,
            WorkingSector:ngo.WorkingSector,
            RegistrationNo:ngo.RegistrationNo,
            Email: ngo.Email,
            ContactNumber:ngo.ContactNumber,
            Address: ngo.Address,
            District: ngo.District,
            State: ngo.State,
            PinCode: ngo.PinCode,
            WebsiteLink:ngo.WebsiteLink,
            NgoDarpan:ngo.NgoDarpan,
            RepresentativeName:ngo.RepresentativeName,
            RepresentativeEmail:ngo.RepresentativeEmail,
            Designation:ngo.Designation,
            RepresentativeNo:ngo.RepresentativeNo
        }
        axios.post('http://localhost:4000/app/NgoForm', Registered).then(response => { console.log(response.data) })
        alert("Request has been raised!")
        navigate("/");
    }
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div style={{ backgroundColor: "red", color: "white" }}>
                <h2 className='text-center py-3'><u>NGO Registration</u></h2>
                <div className='container-sm mx-auto' >
                    <form method="POST">
                        <h4 className="pb-2">Ngo Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example1cg">Name Your Ngo</label>
                            <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg"
                                name='Name'
                                value={ngo.Name}
                                onChange={handleNgo}
                                placeholder="Enter Ngo Name" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example2cg">Year Of Establishment</label>
                                <input type="text" id="form3Example2cg" className=" py-0 form-control form-control-lg"
                                    name='YearOfEstablishment'
                                    value={ngo.YearOfEstablishment}
                                    onChange={handleNgo}
                                    placeholder="Year Of Establishment" />

                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example3cg">Working Sector</label>
                                <input type="text" id="form3Example3cg" className="py-0 form-control form-control-lg"
                                    name='WorkingSector'
                                    value={ngo.WorkingSector}
                                    onChange={handleNgo}
                                    placeholder="Enter Working Sector" />
                            </div>
                        </div>
                        <div className="form-outline mb-4 ">
                                <label className="form-label" htmlFor="form3Example4cg">Registration Number</label>
                                <input type="text" id="form3Example4cg" className=" py-0 form-control form-control-lg"
                                    name='RegistrationNo'
                                    value={ngo.RegistrationNo}
                                    onChange={handleNgo}
                                    placeholder="Registration Number" />
                            </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example5cg">Official Email-Id</label>
                            <input type="email" id="form3Example5cg" className=" py-0 form-control form-control-lg"
                                name='Email'
                                value={ngo.Email}
                                onChange={handleNgo}
                                placeholder="Enter Official Email" />
                        </div>
                        <div className="form-outline mb-4 ">
                            <label className="form-label" htmlFor="form3Example6cg">Contact Number</label>
                            <input type="text" id="form3Example6cg" className=" py-0 form-control form-control-lg"
                                name='ContactNumber'
                                value={ngo.ContactNumber}
                                onChange={handleNgo}
                                placeholder="Contact Number" />
                        </div>

                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example7cg">Address</label>
                            <input type="text" id="form3Example7cg" className="py-0 form-control form-control-lg"
                                name='Address'
                                value={ngo.Address}
                                onChange={handleNgo}
                                placeholder="Enter your Address" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example8cg">District</label>
                                <input type="text" id="form3Example8cg" className=" py-0 form-control form-control-lg"
                                    name='District'
                                    value={ngo.District}
                                    onChange={handleNgo}
                                    placeholder="District" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example9cg">State</label>
                                <input type="text" id="form3Example9cg" className="py-0 form-control form-control-lg"
                                    name='State'
                                    value={ngo.State}
                                    onChange={handleNgo}
                                    placeholder="State" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example10cg">Pin Code</label>
                                <input type="text" id="form3Example10cg" className="py-0 form-control form-control-lg"
                                    name="PinCode"
                                    value={ngo.PinCode}
                                    onChange={handleNgo}
                                    placeholder="Pin Code" />
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example11cg">Website Link</label>
                            <input type="text" id="form3Example11cg" className="py-0 form-control form-control-lg"
                                name="WebsiteLink"
                                value={ngo.WebsiteLink}
                                onChange={handleNgo}
                                placeholder="Website Link" />
                        </div>


                        <div className="form-group mb-4">
                            <label className="form-label pb-1" htmlFor="form3Example12cg">Whether Registerd on NGO Darpan??</label>
                            <select className="form-control" id="form3Example12cg"
                                name='NgoDarpan'
                                value={ngo.NgoDarpan}
                                onChange={handleNgo}>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <h4 className="pb-2">Contact Person Details</h4>
                        <div className="form-outline mb-4 ">
                                <label className="form-label" htmlFor="form3Example13cg">Name</label>
                                <input type="text" id="form3Example13cg" className=" py-0 form-control form-control-lg"
                                    name="RepresentativeName"
                                    value={ngo.RepresentativeName}
                                    onChange={handleNgo}
                                    placeholder="Representative Name"/>
                            </div>
                            <div className="form-outline mb-4 ">
                                <label className="form-label" htmlFor="form3Example14cg">Designation</label>
                                <input type="text" id="form3Example14cg" className=" py-0 form-control form-control-lg"
                                    name='Designation'
                                    value={ngo.Designation}
                                    onChange={handleNgo}
                                    placeholder="Designation" />
                            </div>
                            <div className="form-outline mb-4 ">
                                <label className="form-label" htmlFor="form3Example15cg">Email</label>
                                <input type="text" id="form3Example15cg" className=" py-0 form-control form-control-lg"
                                    name='RepresentativeEmail'
                                    value={ngo.RepresentativeEmail}
                                    onChange={handleNgo}
                                    placeholder="Email" />
                            </div>
                            <div className="form-outline mb-4 ">
                                <label className="form-label" htmlFor="form3Example16cg">Contact Number</label>
                                <input type="text" id="form3Example16cg" className=" py-0 form-control form-control-lg"
                                    name='RepresentativeNo'
                                    value={ngo.RepresentativeNo}
                                    onChange={handleNgo}
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
