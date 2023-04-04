import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Slideimage.scss"
import slide8 from "../Images/slide8.png"
import slide9 from "../Images/slide9.png"
import slide10 from "../Images/slide10.png"
import slide11 from "../Images/slide11.png"
import slide12 from "../Images/slide12.png"
import slide13 from "../Images/slide13.png"
import slide14 from "../Images/slide14.png"
import slide16 from "../Images/slide16.png"
import slide17 from "../Images/slide17.png"
import slide18 from "../Images/slide18.png"
import slide19 from "../Images/slide19.png"
import slide20 from "../Images/slide20.png"
import slide21 from "../Images/slide21.png"
import slide22 from "../Images/slide22.png"
import slide25 from "../Images/slide25.png"
import slide28 from "../Images/slide28.png"

const Slideimage = () => {
  return (
    <div id='slideImage'>
      <div className='flex' id='container'>
        <div>
          <h1>Need blood?</h1>
          <h2>Don't panic we are here to help.</h2>
          <p>BloodRide helps you to reach to potential eligible Donors. Fill the form to raise request.</p>
          <button><Link to="/RaiseRequest" className='linkStyle'>Raise Request</Link></button>
        </div>
        <img src={slide8} alt="/"></img>
      </div>
      <div className='flex' id='container'>
        <img src={slide9} alt="/"></img>
        <div>
          <h1>Donors are life savers.</h1>
          <h2>Do not hesitate, Donate!!!</h2>
          <p>The need of Blood is constant and donors are likely to help in meeting up daily transfusion needs. Donating a pint of Blood can save 3 lives.</p>
          <button><Link to="/DonorForm" className='linkStyle'>Start Donating Now</Link></button>
        </div>
      </div>
      <div className='flex' id='container'>
        <img src={slide10} alt="/"></img>
        <div>
          <h1>Occasional Donors</h1>
          <p>Save a date for donation. Make their day special by Donating Blood.</p>
          <button><Link to="/OcassionalDonorForm" className='linkStyle'>Schedule your Donation</Link></button>
        </div>
      </div>
      <div className='flex' id='container'>
        <img src={slide11} alt="/"></img>
        <div>
          <h2>Donation gives life but sometimes it can be little painful.</h2>
          <button>Consult Doctor</button>
        </div>
      </div>
      <div className='flex' id='container'>
        <img src={slide12} alt="/"></img>
        <div>
          <h1>Learn about Blood and Blood Donation</h1>
          <h2>Blood is essential fluid that helps in transportation of nutrients to all parts of body.</h2>
          <button>Learn more</button>
        </div>
      </div>
      <div className='flex' id='container'>
        <div>
          <h1>Benefits of Donating Blood</h1>
          <p>Blood Donation not just helps receitent but also offers various social, physical, meantal and financial benefits.</p>
          <button>Know more</button>
        </div>
        <img src={slide13} alt="/"></img>
      </div>
      <div className='flex' id='container'>
        <div>
          <h1>Precautions to take for Blood Donation</h1>
          <p>Precautions Before, During and After are necessary to ease out the process of Blood Donation and ensure safety of both the Donor and Receiver.</p>
          <button>Know more</button>
        </div>
        <img src={slide14} alt="/"></img>
      </div>
      <div className='flex' id='container'>
        <div>
          <h1>Are you eligible to Donate Blood</h1>
          <h2>There are certain criteria to check if you are eligible to Donate Blood</h2>
          <button>Know more</button>
        </div>
        <img src={slide16} alt="/"></img>
      </div>
      <div className='flex' id='container'>
        <div>
          <h1>Still trapped in Myths of Blood Donation?</h1>
          <h2>Don't panic we ar here to help.</h2>
          <p>Blood Donation is safe. Let's debunk myths and safe lives. DONATE NOW!!! </p>
          <p></p>
          <button>Know more</button>
        </div>
        <img src={slide17} alt="/"></img>
      </div>
      <div className='flex' id='container'>
        <div>
          <h2><span id='inlineh1'>Excuses</span> can never save a life</h2>
          <h2>But Blood Donation does</h2>
          <p>Here is the list of various excuses that people give for avoiding Blood Donation and not coming forward</p>
          <button>Know more</button>
        </div>
        <img src={slide18} alt="/"></img>
      </div>
      <div className='flex' id='container'>
        <div>
          <h2>Statistics of Blood Donation in INDIA</h2>
          <p>Every year INDIA wastes about 6.5 lakh units of Blood and Blood Components.</p>
          <p> India faces a shortfall of 3 to 5 million units of Blood every year and these numbers truly reflect the urgent need of voluntary blood donors in INDIA.</p>
          <button>Know more</button>
        </div>
        <img src={slide19} alt="/"></img>
      </div>
      <div className='flex' id='container'>
        <div>
          <h1>Where donated Blood is used???</h1>
          <p>There is a consistent reqirement of Blood to meet the needs of <span id='inlinep'>Cancer</span> and <span id='inlinep' className="red">Surgery Pateints, Accident</span> and <span id="inlinep" className="red">Burn Victims, Mother Delivering Babies, AIDS</span> and <span id='inlinep' className="red">Sickle Cell Anemia</span> patients and many more</p>
          <button>Know more</button>
        </div>
        <img src={slide20} alt="/"></img>
      </div>
      <div className='flex' id='container'>
        <div>
          <h2 className='red'>Do you know how the Blood Group of a child is determined???</h2>
          <p>If the Mother is O+ and Father is also O+ what will be the Blood Group of child???</p>
          <button>Know more</button>
        </div>
        <img src={slide21} alt="/"></img>
      </div>
      <div className='flex' id='container'>
        <div>
          <h1>Do you know certain foods are good as per your Blood Group???</h1>
          <p>Blood type diets are a system of eating categorized foods based on a person's blood type. Eating food as per their Blood Group offers various health benefits like weght loss, lowered cholestrol and more.</p>
          <button>Know more</button>
        </div>
        <img src={slide22} alt="/"></img>
      </div>
      <div className='flex' id='container'>
        <img src={slide25} alt="/"></img>
        <div>
          <h1>Facts of Blood & Bood Donation</h1>
          <p>Human Blood is an incredibily important fluid. Without this fluid no Human can survive. Let us learn interesting human Blood facts about this fascinationg bodily fluid.</p>
          <button>Know more</button>
        </div>
      </div>
      <div className='flex' id="container">
        <div>
          <h1>FAQ's</h1>
          <p>Still have doubts regarding Blood Donation, Eligibility or any other???</p>
          <button>Know more</button>
        </div>
        <img src={slide28} alt="/"></img>
      </div>
    </div>

  )
}

export default Slideimage
