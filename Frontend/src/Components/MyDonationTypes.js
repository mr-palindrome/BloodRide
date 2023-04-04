import React from 'react'
import Header from './header/header.js'
import QuickLinks from "./quick-links/QuickLinks.js"
import UserIcon from '../Images/User_icon.png';
import blood from '../Images/blood.png';
import total_request_accepted from "../Images/total_request_accepted.png"
import total_request_rejected from "../Images/total_request_rejected.png"
import total_rbc from "../Images/total_rbc.png"
import total_platelets from "../Images/total_platelets.png"
import total_whole_blood from "../Images/total_whole_blood.png"
import total_plasma from "../Images/total_plasma.png"
import total_wbc from "../Images/total_wbc.png"

function MyDonationTypes() {
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div className='pb-5 text-light' style={{ backgroundColor: "red" }}>
                <h1 className='p-3'>My Donation Types{' >'}</h1>
                <div className='m-2 p-3 mt-4'>
                    <img src={UserIcon} style={{ height: "100px", width: "120px" }} alt="/" /><span className='fs-2 m-2 mx-4 p-3'>Platelets</span>
                </div>
                <div className='row m-2'>
                    <div className="col-auto">
                        <img src={blood} style={{ height: "100px", width: "150px" }} alt="/"></img>
                    </div>
                    <div className="col-auto col-md-5 ">
                        <h4><span className='text-warning'>105</span> My Donations</h4>
                        <h4><span className='text-warning'>10</span> My Receivings</h4>
                        <h4><span className='text-warning'>25</span> My Referal Donation</h4>
                        <h4><span className='text-warning'>O +ve</span> My Blood Type</h4>
                    </div>
                </div>
                <div className='row p-3 w-100'>
                    <h3>My Donation types</h3>
                    <div className="col bg-light m-5 p-3 text-danger" style={{ minWidth: "200px", maxWidth: "300px",boxShadow:"black 5px 5px 10px",borderRadius:"5px"}}>
                        <div className="row">
                            <div className="col">
                                <h4>Total Requests Accepted</h4>
                                <h5>150</h5>
                            </div>
                            <div className="col">
                                <img src={total_request_accepted} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col bg-light m-5 p-3 text-danger" style={{ minWidth: "200px", maxWidth: "300px",boxShadow:"black 5px 5px 10px",borderRadius:"5px"}}>
                        <div className="row">
                            <div className="col">
                                <h4>Total Requests Rejected</h4>
                                <h5>50</h5>
                            </div>
                            <div className="col">
                                <img src={total_request_rejected} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mx-4'>
                    <div className="col bg-light m-3 mx-auto p-3 text-danger" style={{ minWidth: "250px", maxWidth: "250px",boxShadow:"black 5px 5px 10px",borderRadius:"5px" }}>
                        <div className="row">
                            <div className="col-9">
                                <h4>Total Platelets</h4>
                                <h5>150</h5>
                            </div>
                            <div className="col">
                                <img src={total_platelets} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col bg-light m-3 p-3 mx-auto text-danger" style={{ minWidth: "250px", maxWidth: "250px" ,boxShadow:"black 5px 5px 10px",borderRadius:"5px"}}>
                        <div className="row">
                            <div className="col-9">
                                <h4>Total RBC</h4>
                                <h5>50</h5>
                            </div>
                            <div className="col">
                                <img src={total_rbc} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col bg-light m-3 p-3 mx-auto text-danger" style={{ minWidth: "250px", maxWidth: "250px",boxShadow:"black 5px 5px 10px",borderRadius:"5px" }}>
                        <div className="row">
                            <div className="col-9">
                                <h4>Total WBC</h4>
                                <h5>50</h5>
                            </div>
                            <div className="col">
                                <img src={total_wbc} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col bg-light m-3 p-3 mx-auto text-danger" style={{ minWidth: "250px", maxWidth: "250px",boxShadow:"black 5px 5px 10px",borderRadius:"5px" }}>
                        <div className="row">
                            <div className="col-9">
                                <h4>Total Plasma</h4>
                                <h5>50</h5>
                            </div>
                            <div className="col">
                                <img src={total_plasma} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col bg-light m-3 p-3 mx-auto text-danger" style={{ minWidth: "250px", maxWidth: "250px",boxShadow:"black 5px 5px 10px",borderRadius:"5px" }}>
                        <div className="row">
                            <div className="col-9">
                                <h4>Total Whole Blood</h4>
                                <h5>50</h5>
                            </div>
                            <div className="col">
                                <img src={total_whole_blood} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyDonationTypes
