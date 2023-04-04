import React from "react"
import "../Styles/PatientDetails.scss"
import patient from "../Images/patient.png"
import unitIco from "../Images/unitIco.png"
import acptIco from "../Images/acptIco.png"
import addIco from "../Images/addIco.png"
import shareIco from "../Images/shareIco.png"

const Patient_details = () => {
  return (
    <>
      <div id="PatientDetails">
        <img src={patient} alt="pic" id="patient_pic"></img>
        <div id="container">
          <p id="name">Help Mr/Mrs XYZ PQR overcome <span className="red_text">Cancer</span> and become heathy again.</p>
          <p className="red_text flex">
            <img src={unitIco} alt="" />
            O+ Platelets
          </p>
          <p id="address">
            <img src={addIco} alt="" />
            BSf academy tcp tekanpur gwalior madhya pradesh
          </p>
          <div id="unit_needed" className="flex">
            <div>
              <span id="fulfilled">2 Units</span><span> fulfilled out of</span>
            </div>
            <p id="total">5 Units</p>
          </div>
          <p id="box" className="flex"><span>20 Days left</span><span>90 Views</span></p>
        </div>
        <div className="flex" id="footer">
          <button id="inverted" className="flex"><img src={shareIco} alt="" /> Share</button>
          <button className="flex"><img src={acptIco} alt="" />Accept</button>
        </div>
      </div>
    </>
  )
}

export default Patient_details
