import Creatagent from './Component/Home/Creatagent';
import Sidebar from './Component/Sidebar/Sidebar';
import Billing from './Component/Billing/Billing';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Creatagent/>}/>
        <Route path="/Sidebar" element={<Sidebar/>}/>
        <Route path="/Billing" element={<Billing/>}/>

      
      </Routes>
    </BrowserRouter>
   
      
    </>
  );
}

export default App;
