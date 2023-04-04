import React from 'react'
import signup_image from "../Images/signup_success.png"

function signup_success() {
  return (
    <div className='vh-100' style={{backgroundColor:"#102ac2"}}>
    <h1 className='font-weight-bold text-center py-3'>Congratulations!!!</h1>
      <h3 className='font-weight-bold text-center'>You have successfully registered to </h3>
    <h1 className='text-center text-danger'>BloodRide</h1>
    <img src={signup_image} className="mx-auto d-block" alt="/"></img>
    </div>
  )
}

export default signup_success
