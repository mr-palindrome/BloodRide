import React from 'react';
import "../../Styles/footer.scss"
import ig from '../../Images/ig.png';
import fb from '../../Images/fb.png'
import whatsapp from '../../Images/whatsapp.png'
import twitter from '../../Images/telegram.png'
import Mission from "../../Images/Mission.png"
import Vision from "../../Images/Vision.png"
import slide15_1 from "../../Images/slide15_1.png"
import slide15_2 from "../../Images/slide15_2.png"
import slide15_3 from "../../Images/slide15_3.png"
import slide15_4 from "../../Images/slide15_4.png"
import slide24_1 from "../../Images/slide24_1.png"
import slide24_2 from "../../Images/slide24_2.png"
import slide24_3 from "../../Images/slide24_3.png"
import slide24_4 from "../../Images/slide24_4.png"
import slide24_5 from "../../Images/slide24_5.png"
import slide24_6 from "../../Images/slide24_6.png"
import slide24 from "../../Images/slide24.png"

const Footer = () => {
    return (
        <>
            <div id='footer_outer'>
                <div className='w-100 mx-auto my-3 row text-light overflow-hidden' style={{ backgroundColor: "red" }}>
                    <h1 className='text-warning my-4 text-center'>Problems people face asking for Blood in Hospital</h1>
                    <div className="centered col-6 my-5 px-5">
                        <h2 className='my-2'>Shortage of Blood</h2>
                        <h4 className='mb-5'>The demand fro Blood is consistent in the hospital because of various medical conditions faced by a person.</h4>
                        <h2 className='my-2'>Unavailability of Fresh Blood</h2>
                        <h4 className='mb-5'>Availing safe and quality Blood remains a big challenge in the hospital to avoid any Transfusion Transmissible Infections.</h4>
                        <h2 className='my-2'>Lack of Voluntary Donors</h2>
                        <h4 className='mb-5'>There has been lack of voluntary donors who come forward during the immediate requirement of Blood.</h4>
                        <h2 className='my-2'>Ask for replacement</h2>
                        <h4 className='mb-5'>There is constant demand for replacement donors in hospital.</h4>
                    </div>
                    <div className="centered col p-0 my-auto mx-auto">
                        <img src={slide24} alt="/" className='image' style={{width:"500px"}} />
                    </div>
                </div>
                <div className='images w-100 mx-auto my-3 row' style={{ backgroundColor: "#2222ab" }}>
                    <div className="centered col text-center">
                        <div className="centered row m-3 bg-light text-danger">
                            <img src={slide24_1} className="w-25 p-3 mx-auto" alt="" />
                            <h4>PERSON WHO HAS DONATED MOST IN THE WORLD</h4>
                        </div>
                        <div className="centered row m-3 text-light" style={{ backgroundColor: "red" }}>
                            <img src={slide24_2} className="w-25 p-3 mx-auto" alt="" />
                            <h4>IDEAL BLOOD DONOR AND IDEAL BLOOD RECEIVER FOR BLOOD AND PLASMA</h4>
                        </div>
                        <div className="centered row m-3 bg-light text-danger">
                            <img src={slide24_3} className="w-25 p-3 mx-auto" alt="" />
                            <h4>BLOOD DONATION WEIGHT HEIGHT</h4>
                            <h4>(RATIO AND CALCULATOR)</h4>
                        </div>
                    </div>
                    <div className="centered col text-center">
                        <div className="centered row m-3 text-light" style={{ backgroundColor: "red" }}>
                            <img src={slide24_4} className="w-25 p-4 mx-auto" alt="" />
                            <h4>BLOOD CELL LIFE</h4>
                        </div>
                        <div className="centered row m-3 bg-light text-danger">
                            <img src={slide24_5} className="w-25 p-4 mx-auto" alt="" />
                            <h4>WHERE THIS BLOOD IS DISTRIBUTED</h4>
                        </div>
                        <div className="centered row m-3 text-light " style={{ backgroundColor: "red" }}>
                            <img src={slide24_6} className="w-25 p-4 mx-auto" alt="" />
                            <h4>BLOOD NEEDED CHART</h4>
                        </div>
                    </div>
                </div>
                <div className='w-100 mx-auto my-3 text-white row' style={{ backgroundColor: "red" }}>
                    <div className="centered row p-3">
                        <div className="centered col-4 my-auto px-4">
                            <div>
                                <h1 className='text-warning m-2'>Benefits of Donating Blood via BloodRide</h1>
                                <h4 className='mx-5 my-3'>BloodRide is an online Blood Donation platform that envisions to save lives of people by providing them blood during need and helping in connecting beneficiaries to ease out the process of Blood Donation</h4>
                                <button type="button" className=" m-3 btn btn-outline-dark rounded-pill"><h5 className='m-0 p-2'>Know more</h5></button>
                            </div>
                        </div>
                        <div className="centered col p-0">
                            <div className="centered row m-0 p-0">
                                <div className="centered col-sm-6 p-2 m-0">
                                    <img src={slide15_1} className="m-3" alt="/" />
                                    <h1>Online Blood-Donation</h1>
                                    <h5>Donors can register themselves online and requests for Blood can also be made online through the platform which wnhances the chances of reaching out to more people and helping them when they need Blood.</h5>
                                </div>
                                <div className="centered col-sm-6 p-2 m-0">
                                    <img src={slide15_2} className="m-3" alt="/" />
                                    <h1>Free Basic Medical Check-Up</h1>
                                    <h5>The Donors are benefitted by free basic medical check-up after their donation as the donated Blood is tested for various tests like Hepatitis B, Hepatitis C, Malaria, HIV and Syphilis.</h5>
                                </div>
                            </div>
                            <div className="centered row">
                                <div className="centered col-sm-6 p-2 m-0">
                                    <img src={slide15_3} className="m-3" alt="/" />
                                    <h1>Easy To and Fro</h1>
                                    <h5>The To and Fro charges of the donor is taken care of so that distance travel will not be a hurdle for the noble cause of Blood Donation.</h5>
                                </div>
                                <div className="centered col-sm-6 p-2 m-0">
                                    <img src={slide15_4} className="m-3" alt="/" />
                                    <h1>Direct Recommendations as per Blood Group</h1>
                                    <h5>The Donors are also provided a proper diet according to Blood Group and guidelines on what to do and what not to do before, during and after Blood Donation via an online platform.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-100 row mx-auto text-white' style={{ backgroundColor: "#2222ab" }}>
                    <div className="centered col">
                        <div className="centered flex justify-content-center row p-5 mx-5 my-3 rounded" style={{ backgroundColor: "red", boxShadow: "#282929 5px 10px 10px" }}>
                            <div className='col-8 col-md-7'>
                                <h1 className='text-warning mb-3'>Mission</h1>
                                <h4>BloodRide will pursue to enhance the services for the donors and receivers by providing safe supply of Blood. We will put continous efforts to keep on improving the managment system to make it more reliable.</h4>
                            </div>
                            <div className='centered col-md-3 my-auto'>
                                <img src={Mission} alt="" />
                            </div>
                        </div>
                        <div className="centered flex justify-content-center row mt-1 p-5 mx-5 my-3 rounded" style={{ backgroundColor: "red", boxShadow: "#282929 5px 10px 10px" }}>
                            <div className='col-8 col-md-7'>
                                <h1 className='text-warning mb-3'>Vision</h1>
                                <h4>BloodRide visions to save lives of people by providing them Blood during need, by making the country self-sufficient in the availability of Blood for donation. We are dedicated to provide immediate help to people and bring smiles on millions of faces.</h4>
                            </div>
                            <div className="centered col-md-3 my-auto">
                                <img className='px-auto' src={Vision} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="centered col-5 my-auto">
                        <h1 className='text-warning mb-4'>Values</h1>
                        <h3 className='m-3'>● Transparency and Honesty</h3>
                        <h3 className='m-3'>● Morality and Ethics</h3>
                        <h3 className='m-3'>● Integrity and Inclusiveness</h3>
                        <h3 className='m-3'>● People Helping People</h3>
                        <h3 className='m-3'>● Innovation</h3>
                        <h3 className='m-3'>● Building Empowerement</h3>
                    </div>
                </div>
                <div className="container-flow text-white p-3 my-2" style={{ backgroundColor: "#2222ab" }} >
                    <div className='centered-search w-50 mx-auto d-flex flex-wrap pt-5 flex-column align-content-center rounded' style={{ backgroundColor: "red", boxShadow: "#282929 10px 10px 20px" }}>
                        <h2 className='fs-1 mt-5 mb-0 px-2'>OUR NEWSLETTER</h2>
                        <h5 className='fs-4 px-3'>Get Daily Updates...</h5>
                        <form method='POST' className='m-5'>
                            <div className='search rounded-pill bg-white m-5' style={{ boxShadow: "#282929 5px 10px 10px" }}>
                                <input type="email" className='fs-5 p-3 px-5 rounded-pill border-0' placeholder='Email-Id' />
                                <input type="submit" className='fs-5 p-2 m-2 px-4 rounded-pill float-end border-0 text-white' style={{ backgroundColor: "red", boxShadow: "#282929 2px 5px 5px" }} />
                            </div>
                        </form>
                    </div>
                </div>
                <div id="footer" className="container-flow text-white" style={{ backgroundColor: "#2222ab" }}>
                    <div>
                        <div className="centered d-flex flex-column justify-content-center">
                            <p className="d-block fs-4 text-center text-warning"><u>FOLLOW US ON</u></p>
                            <div className="centered d-flex flex-wrap d-flex justify-content-center">
                                <img style={{ height: "50px", width: "100px", borderRadius: "50%" }} className="col-3 mx-3" src={ig} alt="Ig" />
                                <img style={{ height: "50px", width: "100px", borderRadius: "50%" }} className='col-3 mx-3' src={fb} alt="fb" />
                                <img style={{ height: "50px", width: "100px", borderRadius: "50%" }} className='col-3 mx-3' src={whatsapp} alt="whatsapp" />
                                <img style={{ height: "50px", width: "100px", borderRadius: "50%" }} className='col-3 mx-3' src={twitter} alt="telegram" />
                            </div>
                        </div>
                        <div className="centered d-flex flex-wrap d-flex justify-content-center mt-5 pb-2">
                            <p className="mx-2 my-1"> <a className="text-white" href="/">ABOUT US</a> </p>
                            <p className="mx-2 my-1"> <a className="text-white" href="/">OUR TEAM</a> </p>
                            <p className="mx-2 my-1"><a className="text-white" href="/">FEEDBACK</a> </p>
                            <p className="mx-2 my-1"><a className="text-white" href="/">PRIVACY POLICY</a> </p>
                            <p className="mx-2 my-1"><a className="text-white" href="/">TERMS OFSERVICE</a>  </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;