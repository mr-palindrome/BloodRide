import React from 'react'
import Header from './header/header'
import QuickLinks from './quick-links/QuickLinks'
import User_icon from '../Images/User_icon.png';
import blood from "../Images/blood.png"

function ReferalDonors() {
    return (
        <>
            <Header loggedIn={true} />
            <QuickLinks />
            <div className='min-vh-100' style={{ backgroundColor: "red" }}>
                <h1 className='px-4 pt-4 text-light'>Referal Donors{' >'}</h1>
                <div className='m-2 p-3 mt-4'>
                    <img src={User_icon} style={{ height: "100px", width: "120px" }} alt="/" /><span className='fs-2 m-2 mx-4 p-3'>XYZ</span>
                </div>
                <div className='flex flex-wrap justify-content-start'>
                    <div className=" col rounded-pill flex bg-light p-3 m-3 " style={{ minWidth: "200px", maxWidth: "200px",boxShadow:"black 5px 5px 20px",borderRadius:"5px" }}>
                        <div className='text-center'>
                            <h3>A+ve</h3>
                            <h5>50</h5>
                        </div>
                        <div>
                            <img src={blood} alt="/" style={{ height: "100px", width: "85px" }}/>
                        </div>
                    </div>
                    <div className=" col rounded-pill flex bg-light p-3 m-3 " style={{ minWidth: "200px", maxWidth: "200px",boxShadow:"black 5px 5px 20px",borderRadius:"5px" }}>
                        <div className='text-center'>
                            <h3>A-ve</h3>
                            <h5>50</h5>
                        </div>
                        <div>
                            <img src={blood} alt="/" style={{ height: "100px", width: "85px" }} />
                        </div>
                    </div>
                    <div className=" col rounded-pill flex bg-light p-3 m-3 " style={{ minWidth: "200px", maxWidth: "200px",boxShadow:"black 5px 5px 20px",borderRadius:"5px" }}>
                        <div className='text-center'>
                            <h3>B+ve</h3>
                            <h5>50</h5>
                        </div>
                        <div>
                            <img src={blood} alt="/" style={{ height: "100px", width: "85px" }}/>
                        </div>
                    </div>
                    <div className=" col rounded-pill flex bg-light p-3 m-3 " style={{ minWidth: "200px", maxWidth: "200px",boxShadow:"black 5px 5px 20px",borderRadius:"5px" }}>
                        <div className='text-center'>
                            <h3>B-ve</h3>
                            <h5>50</h5>
                        </div>
                        <div>
                            <img src={blood} alt="/" style={{ height: "100px", width: "85px" }} />
                        </div>
                    </div>
                    <div className=" col rounded-pill flex bg-light p-3 m-3 " style={{ minWidth: "200px", maxWidth: "200px" ,boxShadow:"black 5px 5px 20px",borderRadius:"5px"}}>
                        <div className='text-center'>
                            <h3>O+ve</h3>
                            <h5>50</h5>
                        </div>
                        <div>
                            <img src={blood} alt="/" style={{ height: "100px", width: "85px" }}/>
                        </div>
                    </div>
                    <div className=" col rounded-pill flex bg-light p-3 m-3 " style={{ minWidth: "200px", maxWidth: "200px" ,boxShadow:"black 5px 5px 20px",borderRadius:"5px"}}>
                        <div className='text-center'>
                            <h3>O-ve</h3>
                            <h5>50</h5>
                        </div>
                        <div>
                            <img src={blood} alt="/" style={{ height: "100px", width: "85px" }}/>
                        </div>
                    </div>
                    <div className=" col rounded-pill flex bg-light p-3 m-3 " style={{ minWidth: "200px", maxWidth: "200px" ,boxShadow:"black 5px 5px 20px",borderRadius:"5px"}}>
                        <div className='text-center'>
                            <h3>AB+ve</h3>
                            <h5>50</h5>
                        </div>
                        <div>
                            <img src={blood} alt="/" style={{ height: "100px", width: "85px" }}/>
                        </div>
                    </div>
                    <div className=" col rounded-pill flex bg-light p-3 m-3 " style={{ minWidth: "200px", maxWidth: "200px" ,boxShadow:"black 5px 5px 20px",borderRadius:"5px"}}>
                        <div className='text-center'>
                            <h3>AB-ve</h3>
                            <h5>50</h5>
                        </div>
                        <div>
                            <img src={blood} alt="/" style={{ height: "100px", width: "85px" }}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferalDonors