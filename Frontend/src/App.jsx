import React from 'react';
import "./App.css"
import { Route,BrowserRouter,Routes} from "react-router-dom";
import Home from './home';
import Profile from './Components/profile/profile'
import Signup from './Components/Signup';
import SignupSuccess from './Components/SignupSuccess';
import RaiseRequest from './Components/RaiseRequest';
import DonorForm from './Components/DonorForm';
import ReceiverForm from './Components/ReceiverForm';
import InternshipForm from './Components/InternshipForm';
import CelebrityForm from "./Components/CelebrityForm";
import NgoRegistration from "./Components/NgoRegistration"
import CompanyForm from "./Components/CompanyForm"
import SchoolForm from "./Components/SchoolForm"
import CollegeForm from "./Components/CollegeForm"
import HospitalForm from "./Components/HospitalForm"
import PoliticalPartyForm from "./Components/PoliticalPartyForm"
import OcassionalDonorForm from './Components/OcassionalDonorForm';
import MyDonationTypes from './Components/MyDonationTypes';
import DonationHistory from './Components/DonationHistory';
import ReceivingHistory from './Components/ReceivingHistory'
import ReferalDonationHistory from './Components/ReferalDonationHistory';
import ReferalDonors from './Components/ReferalDonors';
import ESevaCard from './Components/ESevaCard';
import QuickLinksPPT from './Components/quick-links/QuickLinksPPT';
import LiveRequests from './Components/LiveRequests';
import RequestDetails from './Components/RequestDetails';
import RequestAccepted from './Components/RequestAccepted';

const App = () =>(
  <>
  <BrowserRouter>
    <Routes id="routes">
      <Route path="/" element={<Home/>}/>
      <Route path="/CelebrityForm" element={<CelebrityForm/>}/>
      <Route path ="/RaiseRequest" element={<RaiseRequest/>}/>
      <Route path ="/NgoForm" element={<NgoRegistration/>}/>
      <Route path ="/DonorForm" element={<DonorForm/>}/>
      <Route path ="/OcassionalDonorForm" element={<OcassionalDonorForm/>}/>
      <Route path ="/PoliticalPartyForm" element={<PoliticalPartyForm/>}/>
      <Route path ="/SchoolForm" element={<SchoolForm/>}/>
      <Route path ="/HospitalForm" element={<HospitalForm/>}/>
      <Route path ="/CollegeForm" element={<CollegeForm/>}/>
      <Route path="/CompanyForm" element={<CompanyForm/>}/>
      <Route path ="/ReceiverForm" element={<ReceiverForm/>}/>
      <Route path="/profile" element={<Profile/>} />
      <Route path ="/Signup" element={<Signup/>}/>
      <Route path ="/ESevaCard" element={<ESevaCard/>}/>
      <Route path ="/ReferalDonors" element={<ReferalDonors/>}/>
      <Route path ="/ReferalDonationHistory" element={<ReferalDonationHistory/>}/>
      <Route path ="/DonationHistory" element={<DonationHistory/>}/>
      <Route path ="/ReceivingHistory" element={<ReceivingHistory/>}/>
      <Route path="/InternshipForm" element={<InternshipForm/>}/>
      <Route path="/MyDonationTypes" element={<MyDonationTypes/>}/>
      <Route path="/SignupSuccess" element={<SignupSuccess/>}/>
      <Route path="/UnderstandingBlood" element={<QuickLinksPPT/>}/>
      <Route path="/FunctionsOfBlood" element={<QuickLinksPPT/>}/>
      <Route path="/ComponentsOfBlood" element={<QuickLinksPPT/>}/>
      <Route path="/Plasma" element={<QuickLinksPPT/>}/>
      <Route path="/Platelets" element={<QuickLinksPPT/>}/>
      <Route path="/RBC" element={<QuickLinksPPT/>}/>
      <Route path="/WBC" element={<QuickLinksPPT/>}/>
      <Route path="/FactsAboutBlood" element={<QuickLinksPPT/>}/>
      <Route path="/UnderstandingBloodGroup" element={<QuickLinksPPT/>}/>
      <Route path="/InheritenceOfBloodGroup" element={<QuickLinksPPT/>}/>
      <Route path="/Bloodtest" element={<QuickLinksPPT/>}/>
      <Route path="/NeedOfBloodDonation" element={<QuickLinksPPT/>}/>
      <Route path="/TypesOfBlooddonation" element={<QuickLinksPPT/>}/>
      <Route path="/DonationProcess" element={<QuickLinksPPT/>}/>
      <Route path="/Eligibility" element={<QuickLinksPPT/>}/>
      <Route path="/BenefitsOfBloodDonation" element={<QuickLinksPPT/>}/>
      <Route path="/BenefitsOfOnlineDonation" element={<QuickLinksPPT/>}/>
      <Route path="/EatAndDrink" element={<QuickLinksPPT/>}/>
      <Route path="/WholeBlood" element={<QuickLinksPPT/>}/>
      <Route path="/LiveRequest" element={<LiveRequests/>}/>
      <Route path="/RequestDetails" element={<RequestDetails/>}/>
      <Route path="/RequestAccepted" element={<RequestAccepted/>}/>


      </Routes>
  </BrowserRouter>
  </>
)
export default App;
