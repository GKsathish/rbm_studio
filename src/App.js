import Creatagent from './Component/Home/Creatagent';
import Sidebar from './Component/Sidebar/Sidebar';
import Billing from './Component/Billing/Billing';
import Rcscheck from './Component/Home/Rcscheck';
import Login from './Component/Login/Login';
import Text from './Component/Campaign/Text';
import Dashboard from './Component/Dashboard/Dashboard';
import Richcard from './Component/Campaign/Richcard';
import Corousel from './Component/Campaign/Corousel';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
{/* <Sidebar/> */}
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route  path="/Dashboard" element={<Dashboard/>}/>

        <Route  path="/Creatagent" element={<Creatagent/>}/>
        <Route path="/Billing" element={<Billing/>}/>

        <Route path="/Rcscheck" element={<Rcscheck/>}/>
        <Route path="/Text" element={<Text/>}/>
        
        <Route path="/Richcard" element={<Richcard/>}/>
        <Route path="/Corousel" element={<Corousel/>}/>

      
      </Routes>
    </BrowserRouter>
   
      
    </>
  );
}

export default App;
