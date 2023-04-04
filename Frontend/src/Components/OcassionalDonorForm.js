import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"

function DonorForm() {

    const navigate = useNavigate();

    const [ocassionalDonor, SetocassionalDonor] = useState({
        ocassionalDonorName: "",ocassionalDonorOcassion:"",ocassionalDonorDate:"",ocassionalDonorId:"",ocassionalDonorPlace:"", ocassionalDonorEmail: "", ocassionalDonorPassword: "",ocassionalDonorBloodGroup:"",ocassionalDonorComponent:""
    });
    let key, value;
    const handleOcassionalDonor = (e) => {
        key = e.target.name
        value = e.target.value
        SetocassionalDonor({ ...ocassionalDonor, [key]: value })
    }
    const handleSubmit = async () => {
        const ocassionalDonorRegistered = {
            ocassionalDonorName: ocassionalDonor.ocassionalDonorName,
            ocassionalDonorId: ocassionalDonor.ocassionalDonorId,
            ocassionalDonorEmail: ocassionalDonor.ocassionalDonorEmail,
            ocassionalDonorPassword: ocassionalDonor.ocassionalDonorPassword,
            ocassionalDonorDate: ocassionalDonor.ocassionalDonorDate,
            ocassionalDonorPlace: ocassionalDonor.ocassionalDonorPlace,
            ocassionalDonorBloodGroup: ocassionalDonor.ocassionalDonorBloodGroup,
            ocassionalDonorComponent: ocassionalDonor.ocassionalDonorComponent,
            ocassionalDonorOcassion: ocassionalDonor.ocassionalDonorOcassion
        }
        axios.post('http://localhost:4000/app/DonorForm', ocassionalDonorRegistered).then(response => { console.log(response.data) })
        alert("You are succesfully registeres as OcassionalDonor!!")
        navigate("/");
    }
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div style={{ backgroundColor: "#102ac2", color: "white" }}>
                <h2 className='text-center py-3 text-warning'><u> Ocassional Donor Registration</u></h2>
                <div className='container-sm mx-auto' >
                    <form method="POST">
                        <h4 className="pb-2 text-warning">Personal Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example1cg">Full Name</label>
                            <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg"
                                name='ocassionalDonorName'
                                value={ocassionalDonor.ocassionalDonorName}
                                onChange={handleOcassionalDonor}
                                placeholder="Enter your Name" />

                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example2cg">Donor Id</label>
                            <input type="text" id="form3Example2cg" className=" py-0 form-control form-control-lg"
                                name='ocassionalDonorId'
                                value={ocassionalDonor.ocassionalDonorId}
                                onChange={handleOcassionalDonor}
                                placeholder="Donor Id" />

                        </div>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mbcol-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example5cg">Email-Id</label>
                                <input type="email" id="form3Example5cg" className=" py-0 form-control form-control-lg"
                                    name='ocassionalDonorEmail'
                                    value={ocassionalDonor.ocassionalDonorEmail}
                                    onChange={handleOcassionalDonor}
                                    placeholder="Enter your Email" />

                            </div>
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <label className="form-label" htmlFor="form3Example6cg">Password</label>
                                <input type="password" id="form3Example6cg" className="py-0 form-control form-control-lg"
                                    name='ocassionalDonorPassword'
                                    value={ocassionalDonor.ocassionalDonorPassword}
                                    onChange={handleOcassionalDonor}
                                    placeholder="Enter Password" />

                            </div>
                        </div>
                        <h4 className="pb-2 text-warning">Blood Details</h4>
                        <div className="form-outline mb-2 row">
                            <div className="form-outline mb-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="form-label pb-1" htmlFor="form3Example11cg">Blood Group</label>
                                    <select className="form-control" id="form3Example11cg"
                                        name='ocassionalDonorBloodGroup'
                                        value={ocassionalDonor.ocassionalDonorBloodGroup}
                                        onChange={handleOcassionalDonor}>
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
                                <label className="form-label" htmlFor="form3Example13cg">Which Component You Want to Donate??</label>
                                <input type="text" id="form3Example13cg" className=" py-0 form-control form-control-lg"
                                    name='ocassionalDonorComponent'
                                    value={ocassionalDonor.ocassionalDonorComponent}
                                    onChange={handleOcassionalDonor}
                                    placeholder="Which Component You Want to Donate??" />

                            </div>
                        </div>
                        <h4 className="pb-2 text-warning">Additional Details</h4>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example7cg">Place</label>
                            <input type="text" id="form3Example7cg" className="py-0 form-control form-control-lg"
                                name='ocassionalDonorPlace'
                                value={ocassionalDonor.ocassionalDonorPlace}
                                onChange={handleOcassionalDonor}
                                placeholder="Enter Place at Which you Want to Donate Blood" />
                        </div>
                        
                        
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form3Example14cg">Ocassion</label>
                            <input type="text" id="form3Example14cg" className="py-0 form-control form-control-lg"
                                name='ocassionalDonorOcassion'
                                value={ocassionalDonor.ocassionalDonorOcassion}
                                onChange={handleOcassionalDonor}
                                placeholder="Ocassion" />
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
