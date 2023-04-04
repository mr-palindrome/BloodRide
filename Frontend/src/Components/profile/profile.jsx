import UserIcon from '../../Images/User_icon.png';
import blood from '../../Images/blood.png';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import QuickLinks from "../quick-links/QuickLinks"

const Profile = () => (
    <>
        <Header loggedIn={true}></Header>
        <QuickLinks></QuickLinks>
        <Link className="btn btn-warning float-end m-2 " to="#">Log Out</Link>
        <div className="container-flow text-white m-0" style={{ backgroundColor: "red" }}>
            <div className="row w-100 p-3 m-0">
                <div className="col-auto col-md-6 col-sm-12 mx-1 px-2 my-0">
                    <img className="d-block" src={UserIcon} alt="Profile Photo" style={{height:"150px"}}/>
                    <div className='m-4 my-2 w-100'>
                        <h4 className='py-3'>UserName :- ndas</h4>
                        <h4 className='py-3'>DOB :- 12/09/2002</h4>
                        <h4 className='py-3'>AGE :- 20</h4>
                        <h4 className='py-3'>Blood Group :- B+</h4>
                        <h4 className='py-3'>Address :- Kolkata</h4>
                        <h4 className='py-3'>Type of User :- Donor</h4>
                        <h4 className='py-3'>Phone Number :- 0000000000</h4>
                        <Link className="btn btn-warning my-4 rounded-pill" to="#"><h5 className='m-1 p-0'>Edit Information</h5></Link>
                    </div>
                </div>
                <div className="col-auto col-md-5 col-sm-12 m-0 w-10">
                    <div className="row m- w-100">
                        <div className="col col-md-7 col-sm-8">
                            <img style={{ height: "100px", width: "120px" }} src={blood} className="rounded-5 m-3" alt="imageHere" />
                        </div>
                        <div className="col col-md-5 col-sm-8">
                            <Link className="btn btn-warning m-1" to="#">My Donations</Link>
                            <Link className="btn btn-warning m-1" to="#">My Receivings</Link>
                        </div>
                        <h4 className="d-block border-bottom border-white py-1 my-2"><Link to="/MyDonationTypes" className='text-light' >My donation types</Link></h4>
                        <h4 className="d-block border-bottom border-white py-1 my-2"><Link to="/DonationHistory" className='text-light' >Donation history</Link></h4>
                        <h4 className="d-block border-bottom border-white py-1 my-2"><Link to="/ReceivingHistory" className='text-light' >Receiving history</Link></h4>
                        <h4 className="d-block border-bottom border-white py-1 my-2"><Link to="/ReferalDonors" className='text-light' >Referral donors</Link></h4>
                        <h4 className="d-block border-bottom border-white py-1 my-2"><Link to="/ReferalDonationHistory" className='text-light' >Referral donation history</Link></h4>
                        <h4 className="d-block border-bottom border-white py-1 my-2"><Link to="/ESevaCard" className='text-light' >Dowload E-Seva Card</Link></h4>
                        <h4 className="d-block border-bottom border-white py-1 my-2"><Link to="/" className='text-light' >Volunteer</Link></h4>
                        <h4 className="d-block border-bottom border-white py-1 my-2">Social coins: XXXXX</h4>
                        <div className="row">
                            <div className="col">
                                <h4>Referral Code:</h4>
                            </div>
                            <div className="col-3 mx-auto">
                                <Link className="btn btn-warning" to="#">Share</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Profile;