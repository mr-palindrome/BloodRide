import React from 'react'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"
import { Link } from 'react-router-dom';

const RequestDetails = () => {
    return (
        <>
            <Header loggedIn={true}></Header>
            <QuickLinks></QuickLinks>
            <div className='w-50 m-5 p-5 d-flex justify-content-center align-items-center bg-danger mx-auto flex-wrap'>
                <div className='w-auto p-3 text-center'>
                    <p><strong>Patient Name: <span className='text-white'>Abhishek Kumar</span></strong></p>
                    <p><strong>Blood Group : <span className='text-white'>A+ve</span></strong></p>
                    <p><strong>Component Needed: <span className='text-white'>Platelets</span></strong></p>
                    <p><strong>Units Required : <span className='text-white'>2</span></strong></p>
                    <p><strong>Date : <span className='text-white'>20-05-2023</span></strong></p>
                    <p><strong>Address : <span className='text-white'>Composite hospial,BSf academy tcp tekanpur gwalior madhya pradesh</span></strong></p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1913.2461872362794!2d78.26914755386986!3d26.009223761324584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976df21c72dbbc7%3A0x19a5f4e5496ffd5c!2sCENWOSTO%2C%20BSF%20Academy%2C%20Tekanpur!5e0!3m2!1sen!2sin!4v1680585991867!5m2!1sen!2sin" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p></p><Link class="btn btn-outline-warning" to="/RequestAccepted" role="button">Accept</Link>
                </div>
            </div>
        </>
    )
}

export default RequestDetails
