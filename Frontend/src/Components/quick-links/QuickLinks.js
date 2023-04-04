import React from 'react'
import '../../Styles/QuickLinks.scss'
import { Link } from 'react-router-dom'

const info = () => {
    const QuickLinksClose=()=>{
        document.getElementById('QuickLinks').style.animation = "exit 0.5s ease 0s 1 forwards";
    }

    return (
        <div id='QuickLinks'>
            <div id='container' className='flex'>
                <div className='innerContainer'>
                    <div id='heading'>
                        {/* image to be Added */}
                        <h1>Blood</h1>
                    </div>
                    <Link to="/UnderstandingBlood">Understanding Blood</Link>
                    <Link to="/FunctionsOfBlood">Functions of Blood</Link>
                    <Link to="/ComponentsOfBlood">Components of Blood</Link>
                    <span className='dropdown dropdown_style'>Functions of Components▼
                        <div id="dropdown-content">
                            <ul>
                                <li><Link to="/Plasma">Plasma</Link></li>
                                <li><Link to="/Platelets">  Platelets</Link></li>
                                <li><Link to="/RBC">RBC</Link></li>
                                <li><Link to="/WBC">WBC</Link></li>
                                <li><Link to="/WholeBlood">Whole Blood</Link></li>
                            </ul>
                        </div>
                    </span>
                    <span className='dropdown dropdown_style'>Gamechanger▼
                        <div id="dropdown-content">
                            <ul>
                                <li><Link to="/Plasma">Plasma</Link></li>
                                <li><Link to="/Platelets">Platelets</Link></li>
                                <li><Link to="/RBC">RBC</Link></li>
                                <li><Link to="/WBC">WBC</Link></li>
                                <li><Link to="/WholeBlood">Whole Blood</Link></li>
                            </ul>
                        </div>
                    </span>
                    <Link to="/FactsAboutBlood">Interesting facts about Blood</Link>
                    <Link to="/InheritenceFacts">Inheritence facts about Blood</Link>
                    <Link to="/UnderstandingBloodGroup">Understanding Blood Group</Link>
                    <Link to="/InheritenceOfBloodGroup">Inheritence of Blood Group</Link>
                    <Link to="/ImportanceOfKnowingBloodGroup">Importance of knowing Blood Group</Link>
                    <Link to="/Bloodtest">Blood Tests</Link>
                </div>
                <div className='innerContainer'>
                    <div id='infoflex'>
                        {/* image to be Added */}
                        <h1>Blood Donation</h1>
                    </div>
                    <Link to="/">What is Blood Donation?</Link>
                    <Link to="/NeedOfBloodDonation">Need of Blood Donation</Link>
                    <Link to="/">Importance of Blood Donation</Link>
                    <Link to="/">Types of Blood Donation</Link>
                    <Link to="/">Process of Blood Donation</Link>
                    <Link to="/">Eligibility for Blood Donation</Link>
                    <Link to="/">Benefits of Donating Blood</Link>
                    <Link to="/">Benefits of Donating Blood ONLINE</Link>
                    <Link to="/">Precautions Before, During and After Blood Donation</Link>
                    <Link to="/">Myths and Facts about Blood Donation</Link>
                    <Link to="/">Excuses for not Donating Blood</Link>
                    <Link to="/">Interesting Facts about Blood Donation</Link>
                    <Link to="/">Compatibility for Blood Donation (Who can Donate/Receive from whom?)</Link>
                </div>
                <div className='innerContainer'>
                    <div id="infoflex">
                        {/* image to be Added */}
                        <h1>Statistics</h1>
                    </div>
                    <Link to="/">Shortage of Blood in India</Link>
                    <Link to="/">Comparative look at World Blood Donation Data</Link>
                </div >
                <div className='innerContainer'>
                    <div id='infoflex'>
                        {/* image to be Added */}
                        <h1>Join Us</h1>
                    </div>
                    <Link to="/">Volunteer</Link>
                    <Link to="/">Helpline/Carrier</Link>
                    <Link to="/">Campaigns</Link>
                    <span className='dropdown dropdown_style'>Collaborate with Us▼
                        <div id="dropdown-content">
                            <ul>
                                <li><Link to="/NgoForm">NGO</Link></li>
                                <li><Link to="/HospitalForm">Hospitals</Link></li>
                                <li><Link to="/SchoolForm">Schools</Link></li>
                                <li><Link to="/CollegeForm">Colleges</Link></li>
                                <li><Link to="/CompanyForm">Company</Link></li>
                                <li><Link to="/PoliticalPartyForm">Political Parties</Link></li>
                                <li><Link to="/CelebrityForm">Celebrity</Link></li>
                                <li><Link to="/">Social Media Influencer</Link></li>
                                <li><Link to="/">Political Leaders</Link></li>
                                <li><Link to="/">Social Workers</Link></li>
                            </ul>
                        </div>
                    </span>
                </div>
                <div className='innerContainer'>
                    <div>
                        <h1>About Us</h1>
                    </div>
                    <Link to="/">About BloodRide Foundation</Link>
                    <Link to="/">About BloodRide</Link>
                    <Link to="/">Vision, Mission, Goals</Link>
                    <Link to="/">Values</Link>
                    <Link to="/">Why Blood Donation through BloodRide?</Link>
                    <Link to="/">Our Projects</Link>
                    <Link to="/">Team Members</Link>
                    <Link to="/">Blogs</Link>
                    <Link to="/">NEWS</Link>
                    <Link to="/">FAQs</Link>
                </div>
            </div>
        </div>
    )
}

export default info
