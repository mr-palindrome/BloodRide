import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"

function Raise_Request() {

    const navigate = useNavigate();

    const [patient, Setpatient] = useState({
        patientName: "", profession: "", patientAge: "", patientGender: "", hospitalName: "", hospitalAddress: "", hospitalType: "", bloodGroup: "", componentRequired: "", reason: "", date: "", contactName: "", relation: "", contactAge: "", contactGender: ""
    });
    let key, value;
    const handlePatient = (e) => {
        key = e.target.name
        value = e.target.value
        Setpatient({ ...patient, [key]: value })
    }
    const handleSubmit = async () => {
        const patientRegistered = {
            patientName: patient.patientName,
            profession: patient.profession,
            patientAge: patient.patientAge,
            patientGender: patient.patientGender,
            hospitalName: patient.hospitalName,
            hospitalAddress: patient.hospitalAddress,
            bloodGroup: patient.bloodGroup,
            componentRequired: patient.componentRequired,
            reason: patient.reason,
            date: patient.date,
            contactName: patient.contactName,
            relation: patient.relation,
            contactAge: patient.contactAge,
            contactGender: patient.contactGender,
        }
        axios.post('http://localhost:4000/app/RaiseRequest', patientRegistered).then(response => { console.log(response.data) })
        alert("Request has been raised!")
        navigate("/");
    }
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div style={{ backgroundColor: "red", color: "white" }}>
                <h2 className='text-center py-3'><u>Raise Request</u></h2>
                <div className='container-sm mx-auto' >
                    <form method="POST">
                        <h4 className="pb-2">Patient Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example1cg">Name of Patient</label>
                            <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg"
                                name='patientName'
                                value={patient.patientName}
                                onChange={handlePatient}
                                placeholder="Enter Patient Name" />

                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example2cg">Profession</label>
                                <input type="text" id="form3Example2cg" className=" py-0 form-control form-control-lg"
                                    name='profession'
                                    value={patient.profession}
                                    onChange={handlePatient}
                                    placeholder="Profession" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example3cg">Age</label>
                                <input type="number" id="form3Example3cg" className="py-0 form-control form-control-lg"
                                    name='patientAge'
                                    value={patient.patientAge}
                                    onChange={handlePatient}
                                    placeholder="Enter Age" />
                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example4cg">Gender</label>
                                <input type="String" id="form3Example4cg" className="py-0 form-control form-control-lg"
                                    name="patientGender"
                                    value={patient.patientGender}
                                    onChange={handlePatient}
                                    placeholder="Gender" />
                            </div>
                        </div>
                        <h4 className="pb-2">Hospital Details</h4>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example5cg">Hospital Name</label>
                                <input type="text" id="form3Example5cg" className=" py-0 form-control form-control-lg"
                                    name='hospitalName'
                                    value={patient.hospitalName}
                                    onChange={handlePatient}
                                    placeholder="Hospital Name" />

                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example6cg">Hospital Address</label>
                                <input type="text" id="form3Example6cg" className="py-0 form-control form-control-lg"
                                    name='hospitalAddress'
                                    value={patient.hospitalAddress}
                                    onChange={handlePatient}
                                    placeholder="Address" />

                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label pb-1" htmlFor="form3Example7cg">Hospital Type</label>
                            <select className="form-control" id="form3Example7cg"
                                name='hospitalType'
                                value={patient.hospitalType}
                                onChange={handlePatient}
                            >
                                <option>Government</option>
                                <option>Private</option>
                            </select>
                        </div>

                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="form-label pb-1" htmlFor="form3Example8cg">Blood Group Required</label>
                                    <select className="form-control" id="form3Example8cg"
                                        name='bloodGroup'
                                        value={patient.bloodGroup}
                                        onChange={handlePatient}>
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
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example9cg">Component Required</label>
                                <input type="text" id="form3Example9cg" className=" py-0 form-control form-control-lg"
                                    name='componentRequired'
                                    value={patient.componentRequired}
                                    onChange={handlePatient}
                                    placeholder="Component Required" />

                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example10cg">Why Blood is Required??</label>
                            <input type="text" id="form3Example10cg" className="py-0 form-control form-control-lg"
                                name='reason'
                                value={patient.reason}
                                onChange={handlePatient}
                                placeholder="Enter reason" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example11cg">Date of Requirement</label>
                            <input type="date" id="form3Example11cg" className="py-0 form-control form-control-lg"
                                name='date'
                                value={patient.date}
                                onChange={handlePatient}
                                placeholder="Date of Requirement" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example12cg">Documents from Hospital</label>
                            <input type="file" accept="image/*" id="form3Example12cg" className="form-control form-control-lg" />
                        </div>
                        <h4 className="pb-2">Contact Person Details</h4>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example13cg">Name of Contact</label>
                            <input type="text" id="form3Example13cg" className="py-0 form-control form-control-lg"
                                name='contactName'
                                value={patient.contactName}
                                onChange={handlePatient}
                                placeholder="Name of Contact" />
                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example14cg">Relation with Patient</label>
                                <input type="text" id="form3Example14cg" className=" py-0 form-control form-control-lg"
                                    name='relation'
                                    value={patient.relation}
                                    onChange={handlePatient}
                                    placeholder="Relation" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example15cg">Age</label>
                                <input type="number" id="form3Example15cg" className="py-0 form-control form-control-lg"
                                    name='contactAge'
                                    value={patient.contactAge}
                                    onChange={handlePatient}
                                    placeholder="Enter Age" />

                            </div>
                            <div className="form-outline mb-4 col-lg-4 col-md-4 col-sm-12">
                                <label className="form-label" htmlFor="form3Example16cg">Gender</label>
                                <input type="text" id="form3Example16cg" className="py-0 form-control form-control-lg"
                                    name='contactGender'
                                    value={patient.contactGender}
                                    onChange={handlePatient}
                                    placeholder="Gender" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button"
                                className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body mb-3" onClick={handleSubmit}>Raise Request.</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Raise_Request;
