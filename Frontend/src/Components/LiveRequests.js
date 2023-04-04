import React from 'react'
import Header from "./header/header";
import QuickLinks from "./quick-links/QuickLinks"
import { Link } from 'react-router-dom';

const LiveRequests = () => {
    return (
        <>
            <Header loggedIn={true}></Header>
            <QuickLinks></QuickLinks>
            <table className="table table-striped table-dark w-75 mx-auto">
                <thead>
                    <tr>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Component Needed</th>
                        <th scope="col">No of Unit</th>
                        <th scope="col">Date of Requirement</th> 
                        <th scope="col">Accept Request</th>                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Abhishek Kumar</th>
                        <td>A+ve</td>
                        <td>Platelets</td>
                        <td>2</td>
                        <td>20-05-2023</td>
                        <td><Link to="/RequestDetails">View Request</Link></td> 
                    </tr>
                    <tr>
                        <th scope="row">Ankit Singh</th>
                        <td>B+ve</td>
                        <td>Platelets</td>
                        <td>2</td>
                        <td>20-05-2023</td>
                        <td><Link to="/RequestDetails">View Request</Link></td> 
                    </tr>
                    <tr>
                        <th scope="row">Riyan Khan</th>
                        <td>A+ve</td>
                        <td>RBC</td>
                        <td>3</td>
                        <td>20-05-2023</td>
                        <td><Link to="/RequestDetails">View Request</Link></td> 
                    </tr>
                    <tr>
                        <th scope="row">Priya Thakur</th>
                        <td>O -ve</td>
                        <td>Whole Blood</td>
                        <td>4</td>
                        <td>20-05-2023</td>
                        <td><Link to="/RequestDetails">View Request</Link></td> 
                    </tr>
                    <tr>
                        <th scope="row">Saket Gupta</th>
                        <td>A+ve</td>
                        <td>WBC</td>
                        <td>2</td>
                        <td>20-05-2023</td>
                        <td><Link to="/RequestDetails">View Request</Link></td> 
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default LiveRequests
