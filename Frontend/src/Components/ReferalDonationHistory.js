import React from 'react'
import Header from './header/header'
import QuickLinks from './quick-links/QuickLinks'
import UserIcon from '../Images/User_icon.png';
import total_rbc from "../Images/total_rbc.png"
import total_platelets from "../Images/total_platelets.png"
import total_whole_blood from "../Images/total_whole_blood.png"
import total_plasma from "../Images/total_plasma.png"
import total_wbc from "../Images/total_wbc.png"
import blood from "../Images/blood.png"
import male from "../Images/male.png"
import female from "../Images/female.png"


function ReferalDonationhHistory() {
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks/>
            <div className='min-vh-100 pb-3' style={{ backgroundColor: "red" }}>
                <h1 className='px-2 pt-4 text-light'>Referal Donation History{' >'}</h1>
                <div className='m-2 p-3 mt-4'>
                    <img src={UserIcon} style={{ height: "100px", width: "120px" }} alt="/" /><span className='fs-2 m-2 mx-4 p-3'>XYZ</span>
                </div>
                <div className='row px-2 mx-1'>
                    <div className="col-2 bg-light mx-auto m-2 p-3 text-danger" style={{minWidth:"250px",maxWidth:"250px",boxShadow:"black 10px 10px 20px",borderRadius:"10px"}}>
                        <div className="row">
                            <div className="col-8">
                                <h4>Total Donation</h4>
                                <h5>3</h5>
                            </div>
                            <div className="col">
                                <img src={UserIcon} alt="" style={{ height: "100px", width: "100px" }}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 bg-light mx-auto m-2 p-3 text-danger" style={{minWidth:"250px",maxWidth:"250px",boxShadow:"black 10px 10px 20px",borderRadius:"10px"}}>
                        <div className="row">
                            <div className="col-8">
                                <h4>Total Receivings</h4>
                                <h5>5</h5>
                            </div>
                            <div className="col">
                                <img src={blood} alt="" style={{ height: "100px", width: "100px" }}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 bg-light mx-auto m-2 p-3 text-danger" style={{minWidth:"250px",maxWidth:"250px",boxShadow:"black 10px 10px 20px",borderRadius:"10px"}}>
                        <div className="row">
                            <div className="col-8">
                                <h4>Total Female Donors</h4>
                                <h5>50</h5>
                            </div>
                            <div className="col">
                                <img src={female} alt="" style={{ height: "100px", width: "100px",filter:"invert(100%)" }}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 bg-light mx-auto m-2 p-3 text-danger" style={{minWidth:"250px",maxWidth:"250px",boxShadow:"black 10px 10px 20px",borderRadius:"10px"}}>
                        <div className="row">
                            <div className="col-8">
                                <h4>Total Male Donors</h4>
                                <h5>50</h5>
                            </div>
                            <div className="col">
                                <img src={male} alt="" style={{ height: "100px", width: "100px" }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row w-100 px-2 m-1 mt-5 flex flex-wrap align-items-stretch'>
                    <div className="col-3 bg-light mx-auto m-2 p-3 text-danger" style={{minWidth:"250px",maxWidth:"250px",boxShadow:"black 10px 10px 20px",borderRadius:"10px"}}>
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
                    <div className="col-3 bg-light mx-auto m-2 p-3 text-danger" style={{minWidth:"250px",maxWidth:"250px",boxShadow:"black 10px 10px 20px",borderRadius:"10px"}}>
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
                    <div className="col-3 bg-light mx-auto m-2 p-3 text-danger" style={{minWidth:"250px",maxWidth:"250px",boxShadow:"black 10px 10px 20px",borderRadius:"10px"}}>
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
                    <div className="col-3 bg-light mx-auto m-2 p-3 text-danger" style={{minWidth:"250px",maxWidth:"250px",boxShadow:"black 10px 10px 20px",borderRadius:"10px"}}>
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
                    <div className="col-3 bg-light mx-auto m-2 p-3 text-danger" style={{minWidth:"250px",maxWidth:"250px",boxShadow:"black 10px 10px 20px",borderRadius:"10px"}}>
                        <div className="row">
                            <div className="col-auto">
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

export default ReferalDonationhHistory
