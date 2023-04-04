import { React, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, Setuser] = useState({
    fullname: "", userName: "", email: "", password: "", bloodGroup: "", age: ""
  });
  let key, value;
  const handleUser = (e) => {
    key = e.target.name
    value = e.target.value
    Setuser({ ...user, [key]: value })
  }
  const handleSubmit = async () => {
    const registered = {
      fullname: user.fullname,
      userName: user.userName,
      email: user.email,
      password: user.password,
      age: user.age,
      bloodGroup: user.bloodGroup
    }
    if (document.getElementById("checkbox").checked && user.fullname && user.age && (user.bloodGroup.toUpperCase().includes("+VE") || user.bloodGroup.toUpperCase().includes("-VE")) && user.email.includes("@") && user.userName && user.password.length > 5) {
      // const { fullname, userName, email, password } = user;
      axios.post('http://localhost:4000/app/signup', registered).then(response => { console.log(response.data) })
      navigate("/SignupSuccess")
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
    else {
      alert("Enter all the details properly")
    }
  }
  let oncheck = () => {
    if (document.getElementById("checkbox").checked) {
      document.getElementById("checkbox_warning").style.display = "none";
      document.getElementById("checkbox_success").style.display = "block";
    }
    else {
      document.getElementById("checkbox_warning").style.display = "block";
      document.getElementById("checkbox_success").style.display = "none";
    }
  }
  return (
    <>
      <Header loggedIn={true} />
      <QuickLinks />
      <div className="signup container-xl mx-auto">
        <h3 className=" pt-4 pb-3 text-center">Registration Form</h3>
        <div className="signup-container">
          <form method="POST">

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
              <input type="text" id="form3Example1cg" className="form-control form-control-lg"
                name='fullname'
                value={user.fullname}
                onChange={handleUser}
                placeholder="Enter name" />
              {user.fullname ? <p className="text-success">Looks Good!!!</p> : <p className="text-danger">Enter your Name.</p>}
            </div>
            <div className="form-outline mb-1 row">
              <div className="form-outline col-lg-6 col-sm-12 col-md-6">
                <label className="form-label" htmlFor="form3Example2cg">Age</label>
                <input type="number" id="form3Example2cg" className="form-control form-control-lg"
                  name='age'
                  value={user.age}
                  onChange={handleUser} />
                {user.age ? <p className="text-success">Looks Good!!!</p> : <p className="text-danger">Enter your Age.</p>}
              </div>
              <div className="form-outline col-lg-6 col-sm-12 col-md-6">
                <label className="form-label" htmlFor="form3Example3cg">Blood Group</label>
                <input type="email" id="form3Example3cg" className="form-control form-control-lg"
                  name='bloodGroup'
                  value={user.bloodGroup}
                  onChange={handleUser} />
                {user.bloodGroup.toUpperCase().includes("+VE") || user.bloodGroup.toUpperCase().includes("-VE") ? <p className="text-success">Looks Good!!!</p> : <p className="text-danger">Enter your Blood group. Eg: O+ve</p>}
              </div>
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example4cg">User-Name</label>
              <input type="email" id="form3Example4cg" className="form-control form-control-lg"
                name='userName'
                value={user.userName}
                onChange={handleUser} />
              {user.userName ? <p className="text-success">Looks Good!!!</p> : <p className="text-danger">Enter your User-Name.</p>}
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example5cg">Email </label>
              <input type="email" id="form3Example5cg" className="form-control form-control-lg"
                name='email'
                value={user.email}
                onChange={handleUser} />
              {user.email.includes("@") ? <p className="text-success">Looks Good!!!</p> : <p className="text-danger">Enter your Email.</p>}
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example6cg">PassWord</label>
              <input type="password" id="form3Example6cg" className="form-control form-control-lg"
                name="password"
                value={user.password}
                onChange={handleUser} />
              {user.password.length > 5 ? <p className="text-success">Looks Good!!!</p> : <p className="text-danger">Password must contain atleast 6 characters.</p>}
            </div>

            <div className="form-check d-flex justify-content-center">
              <input className="form-check-input me-2" type="checkbox" value="" id="checkbox" onClick={oncheck} />
              <label className="form-check-label">
                I agree all statements in <Link to="#!" className="text-body"><u>Terms of service</u></Link>
              </label>
            </div>
            <p className="text-center text-danger" id="checkbox_warning">Accept the Terms and Conditions.</p>
            <p className="text-center text-success" style={{ display: "none" }} id="checkbox_success">All Good!!!</p>
            <div className="d-flex justify-content-center">
              <button type="button"
                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handleSubmit}>Register</button>
            </div>
            <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="#!"
              className="fw-bold text-body"><u>Login here</u></Link></p>
          </form>
        </div>
      </div>
    </>
  )
}
export default Signup