import { React } from "react"
import "../../Styles/header.scss"
import user from "../../Images/User_icon.png"
import hamburger from '../../Images/hamburger.png'
import link from "../../Images/link.png"
import { Link } from "react-router-dom"

const header = (props) => {
  // const [signupForm, setSignUpForm] = useState()
  let NavAppear = () => {
    let k = document.getElementById('middle').style;
    if (k.display === "flex") {
      k.display = "none";
    }
    else {
      k.display = "flex";
    }
  }
  let QuickLinkAppear = () => {
    if (document.getElementById('QuickLinks').style.animation === "0.5s ease 0s 1 normal forwards running entry") {
      document.getElementById('QuickLinks').style.animation = "exit 0.5s ease 0s 1 forwards";
      document.getElementById('link').style.boxShadow = "";
    }
    else {
      document.getElementById('QuickLinks').style.animation = "entry 0.5s ease 0s 1 forwards";
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.getElementById('link').style.boxShadow = "black 1px 1px 10px";
    }
  }
  const signuphandler = () => {
    //  setSignUpForm(1)
    console.log(1);
  }
  return (
    <nav className="flex">
      <div id="left">
        <h2 className="text-danger px-3">BloodRide</h2>
      </div>
      <div className="flex" id="middle">
        <ul className="flex">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/RaiseRequest">Raise Request</Link></li>
          <li><Link to="/LiveRequest">Live Request</Link></li>
          <li><Link to="/">Need Cab</Link></li>
          <li><Link to="/">Consult Doctor</Link></li>
        </ul>
        <ul className="flex">
          <li><Link to="/" id='blessUs'>Bless Us</Link></li>
          <button className="signup-button" onClick={signuphandler} >  <Link to="/Signup"> Sign up </Link> </button>
        </ul>
      </div>
      <div className="flex" id="right">
        <button id="nav-button" className="flex">
          <img src={hamburger} onClick={NavAppear} id="NavAppear" alt="" />
        </button>
        <button id="link" className="flex" onClick={QuickLinkAppear}>
          <img src={link} alt="" />
        </button>
        <div className="dropdown flex">
          <img id='UserImg' src={user} alt="User" />
          <div id="dropdown-content">
            {props.loggedIn && <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/">Log Out</Link>
              </li>
            </ul>}
            {props.loggedIn === false && <ul>
              <li>
                <Link to="/">Log In</Link>
              </li>
            </ul>}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default header;