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

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reports from './Component/Reports/Reports';

function App() {
  return (
    <>
{/* <Sidebar/> */}
    <BrowserRouter>
    {/* <Header/>  */}

      <Routes>
      {/* <Route exact path="/Side" element={<Sidebar/>}/> */}

      <Route exact path="/" element={<Login/>}/>
      <Route  path="/Dashboard" element={<Dashboard/>}/>

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

      
      </Routes>
    </BrowserRouter>
   
      
    </>
  );
}

export default App;
