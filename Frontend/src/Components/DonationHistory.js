import Header from "./header/header"
import QuickLinks from "./quick-links/QuickLinks"
import UserIcon from "../Images/User_icon.png"
import blood from "../Images/blood.png"

function DonationHistory() {
    return (
        <>
            <Header loggedIn={true}></Header>
            <QuickLinks></QuickLinks>
            <div className='vh-100 text-light' style={{ backgroundColor: "red" }}>
                <h1 className="p-3">Donation History{' >'}</h1>
                <div className='m-2 p-3 mt-4'>
                    <img src={UserIcon} style={{ height: "100px", width: "120px" }} alt="/" /><span className='fs-2 m-2 mx-4 p-3'>XYZ</span>
                </div>
                <div className='row m-2'>
                    <div className="col-auto">
                        <img src={blood} style={{ height: "100px", width: "150px" }} alt="/"></img>
                    </div>
                    <div className="col-auto col-md-5 ">
                        <h4><span className='text-warning'>105</span> My Donations</h4>
                        <h4><span className='text-warning'>10</span> My Receivings</h4>
                        <h4><span className='text-warning'>25</span> My Referal Donation</h4>
                        <h4><span className='text-warning'>O +ve</span> My Blood Type</h4>
                    </div>
                </div>
                <div className="table-responsive p-3">
                    <table className="table table-striped bg-light mt-4" style={{boxShadow:"black 5px 5px 10px",borderRadius:"5px"}}>
                        <thead>
                            <tr>
                                <th scope="col">S. No.</th>
                                <th scope="col">Date</th>
                                <th scope="col">Units Given</th>
                                <th scope="col">Component Given</th>
                                <th scope="col">Patient Blood Group</th>
                                <th scope="col">Patient Name</th>
                                <th scope="col">Disease of Patient</th>
                                <th scope="col">Hospital Name</th>
                                <th scope="col">Place/Address</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-dark">
                            <tr>
                                <th scope="row">1</th>
                                <td>12/02/2021</td>
                                <td>5</td>
                                <td>RBC</td>
                                <td>O+ve</td>
                                <td>Mark</td>
                                <td>Malaria</td>
                                <td>XYZ Hospital</td>
                                <td>Gwalior</td>
                                <td>Active</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DonationHistory
