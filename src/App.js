import Creatagent from './Component/Home/Creatagent';
import Sidebar from './Component/Sidebar/Sidebar';
import Billing from './Component/Billing/Billing';
import Rcscheck from './Component/Home/Rcscheck';
import Login from './Component/Login/Login';
import Text from './Component/Campaign/Text';
import Newtext from './Component/Campaign/Newtext';
import Userprofile from './Component/Userprofile/Userprofile';
import Dashboard from './Component/Dashboard/Dashboard';
import Richcard from './Component/Campaign/Richcard';
import Corousel from './Component/Campaign/Corousel';
import Header from './Component/Header/Header';
import Userprogile from './Component/Userprofile/Userprogile';
import CampaignA from './Component/Approval/CampaignA';
import Agent from './Component/Approval/Agent';
import User from './Component/Approval/User';
import Support from './Component/Support/Support';
import Forgotpassword from './Component/Forgotpassword/Forgotpassword';
import Forgetpassword from './Component/Forgotpassword/Forgetpassword';
import Devicedetails from './Component/Device/Devicedetails';

import Faq from './Component/Foq/Faq'
import SI from './Component/te/SI'
import Newside from './Component/Dashboard/newside/Newside'

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reports from './Component/Reports/Reports';
// import Sidebar1 from './Component/Sidebar/Sidebar1';
// import Textside from './Component/Textside/Textside';

function App() {
  return (
    <>
    {/* <Header/>
    // <Sidebar/> */}

    
    <BrowserRouter>
    {/* <Sidebar/> */}
      <Routes>
      <Route exact path="/Side" element={<Sidebar/>}/>

      <Route exact path="/" element={<Login/>}/>
      <Route  path="/Dashboard" element={<Dashboard/>}/>
      <Route  path="/S" element={<SI/>}/>

        <Route path="/Creatagent" element={<Creatagent/>}/>
        <Route path="/Billing" element={<Billing/>}/>
        <Route path="/Userprofile" element={<Userprofile/>}/>
        <Route path="/Userprogile" element={<Userprogile/>}/>

        <Route path="/Rcscheck" element={<Rcscheck/>}/>
        <Route path="/Text" element={<Text/>}/>
        <Route path="/Newtext" element={<Newtext/>}/>

        <Route path="/Richcard" element={<Richcard/>}/>
        <Route path="/Corousel" element={<Corousel/>}/>
        <Route path="/Reports" element={<Reports/>}/>
        <Route path="/CampaignA" element={<CampaignA/>}/>
        <Route path="/User" element={<User/>}/>
        <Route exact  path="/Agent" element={<Agent/>}/>
        <Route  exact path="/Support" element={<Support/>}/>
        <Route exact  path="/Faq" element={<Faq/>}/>

        <Route exact path="/Forgotpassword" element={<Forgotpassword/>}/>
        <Route exact path="/Sidebar" element={<Sidebar/>}/>
        <Route exact path="/Header" element={<Header/>}/>
      
        <Route exact path="/Forgetpassword" element={<Forgetpassword/>}/>
        <Route exact path="/Devicedetails" element={<Devicedetails/>}/>
        <Route exact path="/Newside" element={<Newside/>}/>

      
      </Routes>
    </BrowserRouter>
   
    
      
    </>
  );
}

export default App;
