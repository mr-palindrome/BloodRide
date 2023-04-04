import React from 'react'
import PatientDetails from "./PatientDetails.js"
import "../Styles/PatientSlider.scss"

function PateintSlider() {
  return (
    <>
      <div id='patientSlider'>
        <div id="sliderContainer">
          <PatientDetails></PatientDetails>
          <PatientDetails></PatientDetails>
          <PatientDetails></PatientDetails>
          <PatientDetails></PatientDetails>
          <PatientDetails></PatientDetails>
          <PatientDetails></PatientDetails>
          <PatientDetails></PatientDetails>
          <PatientDetails></PatientDetails>
          <PatientDetails></PatientDetails>
          <PatientDetails></PatientDetails>
        </div>
      </div>
    </>

  )
}

export default PateintSlider
