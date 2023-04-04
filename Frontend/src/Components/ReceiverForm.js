import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"

function ReceiverForm() {

    const navigate = useNavigate();

    const [receiver, Setreceiver] = useState({
        receiverName: "", receiverProfession: "", receiverAge: "", receiverGender: "", receiverEmail: "",receiverMobileNo:"", receiverPassword: "", receiverAddress: "", receiverDistrict: "", receiverState: "", receiverPinCode: "", receiverBloodGroup: "", convertInDonater: ""
    });
    let key, value;
    const handleReceiver = (e) => {
        key = e.target.name
        value = e.target.value
        Setreceiver({ ...receiver, [key]: value })
    }
    const handleSubmit = async () => {
        const receiverRegistered = {
            receiverName: receiver.receiverName,
            receiverProfession: receiver.receiverProfession,
            receiverAge: receiver.receiverAge,
            receiverGender: receiver.receiverGender,
            receiverEmail: receiver.receiverEmail,
            receiverMobileNo:receiver.receiverMobileNo,
            receiverPassword: receiver.receiverPassword,
            receiverAddress: receiver.receiverAddress,
            receiverDistrict: receiver.receiverDistrict,
            receiverState: receiver.receiverState,
            receiverPinCode: receiver.receiverPinCode,
            receiverBloodGroup: receiver.receiverBloodGroup,
            convertInDonater: receiver.convertInDonater
        }
        axios.post('http://localhost:4000/app/ReceiverForm', receiverRegistered).then(response => { console.log(response.data) })
        alert("You are succesfully registered as receiver!!")
        navigate("/");
    }
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div style={{ backgroundColor: "#102ac2", color: "white" }}>
                <h2 className='text-center py-3 text-warning'><u>Receiver Registration</u></h2>
                <div className='container-sm mx-auto' >
                    <form method="POST">
                        <h4 className="pb-2 text-warning">Personal Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example1cg">Full Name</label>
                            <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg"
                                name='receiverName'
                                value={receiver.receiverName}
                                onChange={handleReceiver}
                                placeholder="Enter your Name" />

                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example2cg">Profession</label>
                                <input type="text" id="form3Example2cg" className=" py-0 form-control form-control-lg"
                                    name='receiverProfession'
                                    value={receiver.receiverProfession}
                                    onChange={handleReceiver}
                                    placeholder="Profession" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example3cg">Age</label>
                                <input type="number" id="form3Example3cg" className="py-0 form-control form-control-lg"
                                    name='receiverAge'
                                    value={receiver.receiverAge}
                                    onChange={handleReceiver}
                                    placeholder="Enter Age" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example4cg">Gender</label>
                                <input type="text" id="form3Example4cg" className="py-0 form-control form-control-lg"
                                    name="receiverGender"
                                    value={receiver.receiverGender}
                                    onChange={handleReceiver}
                                    placeholder="Gender" />
                            </div>
                        </div>

                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example5cg">Email-Id</label>
                                <input type="email" id="form3Example5cg" className=" py-0 form-control form-control-lg"
                                    name='receiverEmail'
                                    value={receiver.receiverEmail}
                                    onChange={handleReceiver}
                                    placeholder="Enter your Email" />

                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example6cg">Password</label>
                                <input type="password" id="form3Example6cg" className="py-0 form-control form-control-lg"
                                    name='receiverPassword'
                                    value={receiver.receiverPassword}
                                    onChange={handleReceiver}
                                    placeholder="Enter Password" />

                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example17cg">Mobie Number</label>
                            <input type="number" id="form3Example17cg" className="py-0 form-control form-control-lg"
                                name='receiverMobileNo'
                                value={receiver.receiverMobileNo}
                                onChange={handleReceiver}
                                placeholder="Enter Mobile Number" />

                        </div>
                        <h4 className="pb-2 text-warning">Residence Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example7cg">Address</label>
                            <input type="text" id="form3Example7cg" className="py-0 form-control form-control-lg"
                                name='receiverAddress'
                                value={receiver.receiverAddress}
                                onChange={handleReceiver}
                                placeholder="Enter your Address" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example8cg">District</label>
                                <input type="text" id="form3Example8cg" className=" py-0 form-control form-control-lg"
                                    name='receiverDistrict'
                                    value={receiver.receiverDistrict}
                                    onChange={handleReceiver}
                                    placeholder="District" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example9cg">State</label>
                                <input type="text" id="form3Example9cg" className="py-0 form-control form-control-lg"
                                    name='receiverState'
                                    value={receiver.receiverState}
                                    onChange={handleReceiver}
                                    placeholder="State" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example10cg">Pin Code</label>
                                <input type="text" id="form3Example10cg" className="py-0 form-control form-control-lg"
                                    name="receiverPinCode"
                                    value={receiver.receiverPinCode}
                                    onChange={handleReceiver}
                                    placeholder="Pin Code" />
                            </div>
                        </div>
                        <h4 className="pb-2 text-warning">Blood Details</h4>

                        <div className="form-outline mb-4">
                            <div className="form-group">
                                <label className="form-label pb-1" htmlFor="form3Example11cg">Blood Group</label>
                                <select className="form-control" id="form3Example11cg"
                                    name='receiverBloodGroup'
                                    value={receiver.receiverBloodGroup}
                                    onChange={handleReceiver}>
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
                        <div className="form-outline mb-4 col">
                            <div className="form-group">
                                <label className="form-label pb-1" htmlFor="form3Example15cg">If Required will you become donor for other patients in need??</label>
                                <select className="form-control" id="form3Example15cg"
                                    name='convertInDonater'
                                    value={receiver.convertInDonater}
                                    onChange={handleReceiver}>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button"
                                className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body mb-3" onClick={handleSubmit}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ReceiverForm;
