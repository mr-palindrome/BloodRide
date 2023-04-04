import React from 'react'
import Header from './header/header';
import QuickLinks from "./quick-links/QuickLinks"
import UserIcon from "../Images/User_icon.png"
import blood from "../Images/blood.png"

function ESevaCard() {
  return (
    <>
      <Header loggedIn={true}></Header>
      <QuickLinks></QuickLinks>
      <div className='text-light' style={{ backgroundColor: "red" }}>
        <h1 className='p-3'>E-Seva Card{' >'}</h1>
        <div className='m-2 p-3 mt-2'>
          <img src={UserIcon} style={{ height: "100px", width: "120px" }} alt="/" /><span className='fs-2 m-2 mx-4 p-3'>XYZ</span>
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
        <div className="p-2">
          <form action="POST" className='p-3 m-5 mx-auto' style={{ backgroundColor: "#102ac2", minWidth: "290px", maxWidth: "900px",boxShadow:"black 5px 5px 15px",borderRadius:"15px" }}>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example1cg">Email-Id</label>
              <input type="email" id="form3Example1cg" className="py-0 form-control form-control-lg" placeholder='Enter your Email' />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example1cg">Donor Name</label>
              <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg" placeholder='Enter Your Name'/>
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example1cg">Donation Date</label>
              <input type="date" id="form3Example1cg" className="py-0 form-control form-control-lg" placeholder='Enter Date'/>
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example1cg">Hospital Name</label>
              <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg" placeholder='Hospital Name'/>
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example1cg">Patient Name</label>
              <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg" placeholder='Patient Name'/>
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example1cg">Component</label>
              <input type="text" id="form3Example1cg" className="py-0 form-control form-control-lg" placeholder='Component Donated'/>
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form3Example1cg">Units Donated</label>
              <input type="number" id="form3Example1cg" className="py-0 form-control form-control-lg" placeholder='Units donated'/>
            </div>
            <div className="d-flex justify-content-center">
              <button type="button"
                className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body mb-3">OK</button>
            </div>
          </form>
          <div className="d-flex justify-content-center">
            <button type="button"
              className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body mb-3" style={{boxShadow:"black 5px 5px 15px",borderRadius:"5px"}}>Download E-Seva Card</button>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button"
              className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body mb-3" style={{boxShadow:"black 5px 5px 15px",borderRadius:"5px"}}>Share E-Seva Card</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ESevaCard
