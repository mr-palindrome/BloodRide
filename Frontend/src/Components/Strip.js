import React from 'react'
import "../Styles/strip.scss"
import amount from "../Images/amount.png"
import request from "../Images/request.png"
import donated from "../Images/donated.png"
import registered from "../Images/registered.png"

const Strip = () => {


    let upto1 = 0;
    let counts = setInterval(Registered);

    function Registered() {
        var count = document.getElementById("Registered");
        count.innerHTML = ++upto1;
        if (upto1 === 1000) {
            clearInterval(counts);
        }
    }

    let DonatedInterval = setInterval(Donated);
    let upto2 = 0;

    function Donated() {
        var count = document.getElementById("Donated");
        count.innerHTML = ++upto2;
        if (upto2 === 1500) {
            clearInterval(DonatedInterval);
        }
    }

    let RequestInterval= setInterval(Request);
    let upto3=0;

    function Request() {
        var count = document.getElementById("Request");
        count.innerHTML = ++upto3;
        if (upto3 === 1500) {
            clearInterval(RequestInterval);
        }
    }

    let AmountInterval = setInterval(Amount);
    let upto4 = 0;
    
    function Amount() {
        var count = document.getElementById("Amount");
        count.innerHTML = ++upto4;
        if (upto4 === 2000) {
            clearInterval(AmountInterval);
        }
    }

    return (
        <div id='strip' className='flex'>
            <div className='flex'>
                <img src={registered} alt="/"></img>
                <p id="Registered"></p>
                <p>Blood Donor Registered</p>
            </div>
            <div className='flex'>
                <img src={donated} alt="" />
                <p id="Donated"></p>
                <p>Total Blood Donated</p>
            </div>
            <div className='flex'>
                <img src={request} alt="" />
                <p id="Request"></p>
                <p>Blood Request Raised</p>
            </div>
            <div className='flex'>
                <img src={amount} alt="" />
                <p id="Amount"></p>
                <p>Blessing Amount</p>
            </div>
        </div>
    )
}

export default Strip
