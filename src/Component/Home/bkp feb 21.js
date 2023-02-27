

import React, { useState,useRef} from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BiWorld } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./createagent.css";

// import { yupResolver } from '@hookform/resolvers/yup'
// import { useForm } from 'react-hook-form'

// import Createagent1 from './Createagent1';
function Creatagent() {
  const { useState } = React;



  const Createagent1 = () => {
    const [errorMsg, setErrorMsg] = useState('');
    // const [successMsg, setSuccessMsg] = useState('');
  
  


    
const[agentbanner,setagentbanner]=useState();
const[agentlogo,setagentlogo]=useState();
const[displayname,setdisplayname]=useState();
const[agentdesc,setagentdesc]=useState();
const[agentpnumber,setagentpnumber]=useState();
const[agentplabel,setagentplabel]=useState();
const[agentwebsite,setagentwebsite]=useState();

const[agentwebsitelabel,setagentwebsitelabel]=useState();
const[agentemail,setagentemail]=useState();
const[agentemaillabel,setagentemaillabel]=useState();
const[privacy,setprivacy]=useState();
const[terms,setterms]=useState();
const[agent_experince,setagent_experience]=useState();
const[actions,setactions]=useState();

const[checked1,setchecked1]=useState(false);
const[checked2,setchecked2]=useState(false);
const[checked3,setchecked3]=useState(false);
const[checked4,setchecked4]=useState(false);




const [fileUrl, setFileUrl] = useState(null);

const [fileUrl1, setFileUrl1] = useState(null);
const agentbannerhandler=(e)=>{


  const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setFileUrl(imageUrl)
}
const agentelogohandler=(e)=>{


  const imageFile1 = e.target.files[0];
      const imageUrl1 = URL.createObjectURL(imageFile1);
      setFileUrl1(imageUrl1)
}
  
    const [activestep, setActivestep] = useState(0);
    // const [error, setError] = useState(false);

   
    const submitHandler =  async(e) => {
      
      e.preventDefault();
      if(agentbanner==="" || agentlogo ==="" || displayname===""){
        setErrorMsg(true);
      }else{
        setActivestep(activestep+1);
      }
    

      if(agentplabel==="" || agentpnumber ==="" || agentemail==="" || agentemaillabel==="" || agentwebsite===" " || agentwebsitelabel==="" || privacy===""){
        setErrorMsg(true);
      }else{
        setActivestep(activestep+1);
     
      }
      if(agent_experince==="" || actions ===""){
        setErrorMsg(true);
      }else{
        setActivestep(activestep+1);
      }
       
    console.log(fileUrl);
      console.log(fileUrl1);
      console.log(displayname);
      console.log(agentemail);
      console.log(agentemaillabel);
      console.log(agentpnumber);
      console.log(agentplabel);
      console.log(agentwebsite);
      console.log(agentwebsitelabel);
      console.log(agentplabel);
      console.log(actions);

      console.log(terms);
      console.log(privacy);
      console.log(agentdesc);

      console.log(agent_experince);


      console.log(checked1);
      console.log(checked2);
      console.log(checked3);


      console.log(checked4);


const formBody=[fileUrl,fileUrl1,displayname,agentemail,agentemaillabel,agent_experince,actions,terms,privacy,agentpnumber,agentplabel,agentwebsite,agentwebsitelabel]

    
    const response = await fetch("http://172.22.9.72:5000/agent_registration", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formBody)
    })
      .then(response => {
       console.log(response);
      })
      .catch(error => {
        console.log(error);
      })

     
        
      
      
  
    }

    return (
      
      

<>
            {/* left */}
<div class='main-panel' style={{paddingTop: '10px !important'}}>
  <div class="content-wrapper" style={{margin:'10px',marginLeft:'20px'}}>
    
        
      
      <div class="row">
        
      <h3 class="page-title" style={{marginTop:'60px',marginLeft:'0px'}} > rbm agent info </h3>
                    
      
                          <form onSubmit={submitHandler}  class=" card card-body col-md-6 col-12  " id="myform">
                                        


                                          
                                          {activestep === 0 ? (
                                              <div  id="form1"  >



                                             <h2 class = "rbm_agent_heading">Branding</h2>

                                            
                                              {/* <h2 style={{ marginLeft: '1' }}>Branding</h2> */}
                                              <div class="form-group">



                                                <label>Upload Banner</label>
                                                
                                                <div class="input-group col-xs-12">

                                                <small style={{color: '#2222228c'}}>Large Banner Image (1440x448)</small>
                                                <br />
                                                <input
                                                  type="file"
                                                  class="form-control"
                                                id="agentbanner"
                                                  name="agentbanner"
required
                                                  value={agentbanner}
                                                  onChange={agentbannerhandler}
                                               
                            style={{width:'100%'}}
                                                />
   

                                              </div>
                                              </div>

                                              <div class="form-group">
                                                <label>Upload Logo</label>

                                                <div class="input-group col-xs-12">
                                                  <small  style={{color: '#2222228c'}}>Small Size Image (224x224)</small>
                                                  <br />
                                                  <input
                                                    type="file"
                                                    class="form-control"
                                               id="agentlogo"
                                                    name="agentlogo"
                                                    value={agentlogo}
required
                                                    onChange={agentelogohandler}
                                                    

                                                  />
                                                                                                                                                     

   
                                                </div>
                                              </div>

                                              <div class="form-group">
                                                <label for="exampleInputUsername1">Display Name</label>
                                                <div class="input-group col-xs-12">

                                                <input
                                                  type="text"
                                                  class="form-control"
                                                  name="displayname"
                                                  value={displayname}
                                                required

                                                  id="displayname"
                                                  placeholder="Display Name"
                                                  onChange={(e)=> setdisplayname(e.target.value)}
                                                />
                                                                                                                                                  {errorMsg ?(<p style={{color:'red'}}>Required</p>):""}   
    
                            </div>
                                              </div>

                                              <div class="form-group">
                                                <label for="exampleInputUsername1">Description</label>
                                                
                                                <textarea
                                                  type="text"
                                                  class="form-control"
                                                  id="agentdesc"
                                                  name="agentdesc"
                                                  placeholder="Descripition"
                                                  maxlength="75"
                                                  size="75"
                                                  required
                                                  value={agentdesc}

                                                  onChange={(e)=>setagentdesc(e.target.value)}

                                                ></textarea>
                                                                                                       

                                              </div>

                                              <div>
                                                {/* <button type="button" id="prevbtncre" onclick="nextPrev(-1)" className='btncre'>Previous</button> */}
                                                <button
                                                  type="submit"
                                                   name="createAgent"
                                                 
                                                  className="btncre"
                                                >
                                                  Next
                                                </button>
                                              </div>
                                            
                                            {/* 2 */}

                                            {/* 3 */}
                                          </div>) : ("")}



                                          {activestep === 1 ? (
                                            <div id="form2">

                                            <h2 class = "rbm_agent_heading" >Point of Contact</h2>

                            <div class="form-group">
                              <label for="exampleInputUsername1">Primary phone Number</label>
                              <input
                                type="number"
                                class="form-control"
                                id="contact"
                                name="agentpnumber"
                                value={agentpnumber}

                                placeholder="Primary phone Number"
                                maxlength="15"
                                size="15"
                                required
                                onChange={e=>setagentpnumber(e.target.value)}

                              />
                            </div>
                            <div class="form-group">
                              <label for="exampleInputUsername1">Label phone Number</label>
                              <input
                                type="text"
                                class="form-control"
                                onkeydown="return /^[ A-Za-z_@./#&amp;+-]*$/i.test(event.key)"
                                id="labelforcontact"
                                name="agentplabel"
                                value={agentplabel}

                                placeholder="Label for primary phone Number"
                                required
                                onChange={e=>setagentplabel(e.target.value)}

                              />
                            </div>

                            <div class="form-group">
                              <label for="exampleInputUsername1">Primary Website</label>
                              <input
                                type="url"
                                class="form-control"
                                id="website"
                                name="agentwebsite"
                                value={agentwebsite}
                                placeholder="Primary Website"
                                required
                                onChange={e=>setagentwebsite(e.target.value)}

                              />
                            </div>
                            <div class="form-group">
                              <label for="exampleInputUsername1">
                                {" "}
                                Label Primary Website
                              </label>
                              <input
                                type="text"
                                onkeydown="return /^[ A-Za-z_@./#&amp;+-]*$/i.test(event.key)"
                                class="form-control"
                                // id="websitelabel"
                                name="agentwebsitelabel"
                                value={agentwebsitelabel}
                                placeholder="Label Primary website"
                                required
                                onChange={e=>setagentwebsitelabel(e.target.value)}

                              />
                            </div>
                            <div class="form-group">
                              <label for="exampleInputUsername1">Email</label>
                              <input
                                type="email"
                                class="form-control"
                                name="agentemail"
                                // id="Email"
                                value={agentemail}
                                placeholder="Email"
                                required
                                onChange={e=>setagentemail(e.target.value)}

                              />
                            </div>

                            <div class="form-group">
                              <label for="exampleInputUsername1">Label Primary Email</label>
                              <input
                                type="email"
                                class="form-control"
                                id="Emaillabel"
                                name="agentemaillabel"
                                placeholder="Label for primary Email"
                                required
                                value={agentemaillabel}

                                onChange={e=>setagentemaillabel(e.target.value)}

                              />
                            </div>

                            <div class="form-group">
                              <label for="exampleInputPassword1">Privacy Policy*</label>
                              <input
                                type="text"
                                class="form-control"
                                id="Privacy_Policy"
                                name="privacy"
                                value={privacy}
                                placeholder="Please enter Privacy policy URL"
                                required
                                onChange={e=>setprivacy(e.target.value)}

                              />
                            </div>

                            <div class="form-group">
                              <label for="exampleInputConfirmPassword1">
                                Terms and Conditions*
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="terms_of_Services"
                                name="terms"
                                value={terms}
                                placeholder="Please enter Terms and Conditions"
                                required
                                onChange={e=>setterms(e.target.value)}


                              />
                            </div>

                            <div>
                               <button
                                type="submit"
                                name="createAgent"
                                // id="nextbtncre"
                                
                                className="btncre"
                              >
                                Next
                              </button>
                              <button
                                type="button"
                                id="prevbtncre"
                                onClick={() => {
                                  setActivestep(activestep - 1);
                                }}
                                className="btncre"
                              >
                                Previous
                              </button>
                             
                            </div>
                            </div>) : ("")}

                                          {activestep === 2 ? ( <div >

                            <h2 class = "rbm_agent_heading" >Agent Experince</h2>
                                          
                                              <div class="form-group">
                                                <label for="mob">Agent Experince</label>
                                                <input
                                                  type="text"
                                                  name="agent_experince"
                                                  class="form-control"
                                                  id="mob"
                                                  placeholder="Please Provide your Experince"
                                                  required
                                                  value={agent_experince}

                                                  onChange={e=>setagent_experience(e.target.value)}


                                                />
                                              </div>
                                              <div class="form-group">
                                                <label for="address">
                                                  What actions trigger Messages to users?
                                                </label>
                                                <textarea
                                                  class="form-control"
                                                  name="actions"
                                                  placeholder="What actions trigger Messages to users?"
                                                  required
                                                  
                                                  value={actions}
                                                  onChange={e=>setactions(e.target.value)}

                                                ></textarea>
                                              </div>

                                              <div class="form-group">
                                                <label for="address">Select the Required Operator</label>
                                                <div class="row_operator">
                                                  <div class="coloumn_operator">
                                                    <input
                                                      type="checkbox"
                                                      name="checked1"
                                                      checked={checked1}

                                                      class="form-check-input"
                                                      required
                                                      onChange={e=>setchecked1(!checked1)}

                                                    />

                                                    <svg width="90" height="40">
                                                      <image
                                                        href="https://assets.airtel.in/static-assets/new-home/img/airtel-red.svg?v=1653038873041"
                                                        width="90"
                                                        height="40"
                                                      ></image>
                                                    </svg>
                                                  </div>
                                                  <div class="coloumn_operator">
                                                    <input
                                                      type="checkbox"
                                                      name="checked2"
                                                      checked={checked2}

                                                      class="form-check-input"
                                                      required
                                                      onChange={e=>setchecked2(!checked2)}

                                                    />
                                                    <svg width="90" height="40">
                                                      <image
                                                        href="https://www.myvi.in/content/dam/neogold/vi-logo.svg"
                                                        width="90"
                                                        height="40"
                                                      ></image>
                                                    </svg>
                                                  </div>
                                                  <div class="coloumn_operator">
                                                    <input
                                                      type="checkbox"
                                                      name="checked3"

                                                      checked={checked3}

                                                      class="form-check-input"
                                                      required
                                                      onChange={e=>setchecked3(!checked3)}

                                                    />
                                                    <svg width="90" height="40">
                                                      <image
                                                        href="https://www.bsnl.co.in/Logo-New.png"
                                                        width="90"
                                                        height="40"
                                                      ></image>
                                                    </svg>
                                                  </div>
                                                  <div class="coloumn_operator">
                                                    <input
                                                      type="checkbox"
                                                      name="checked4"
                                                      // value="Jio"
                                                      class="form-check-input"
                                                      required
                                                      checked={checked4}
                                                      onChange={e=>setchecked4(!checked4)}


                                                    />

                                                    <svg width="90" height="40">
                                                      <image
                                                        href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/800px-Reliance_Jio_Logo_%28October_2015%29.svg.png"
                                                        width="90"
                                                        height="40"
                                                      ></image>
                                                    </svg>
                                                  </div>

                                                </div>
                                              </div>

                                              <div>
                                              <button
                                                  type="submit"
                                                  name="createAgent"
                                                 
                                                  className="btncre"
                                                >
                                                  Submit
                                                </button>
                                                <button
                                                  type="button"
                                                  id="prevbtncre"
                                                  // onclick="nextPrev(-1)"
                                                  onClick={() => {
                                                    setActivestep(activestep - 1);
                                                  }}
                                                  className="btncre"
                                                >
                                                  Previous
                                                </button>
                                               
                                              </div>
                                            
                                          </div>) : ("")}
                                        
                                  
                                        
                          </form>
                    
                    <div class="col-md-6 col-12 mt-1 round-2 " style={{background: '#fff',padding: '10px',borderLeft: '1px solid #dddddd87'}}>
            
                      <div class="img-preview">
                        <div class="larger-banner">
                        
                                    <center style={{fontWeight:'bold',marginRight:'50%'}}>Info & options</center>
                                  
                                    <div style={{width:'292px',height:'160px !important'}}>
                                        <img
                                          src={fileUrl} className='file' alt='' />
                                        <img
                                          src={fileUrl1}
                                          className='file1' alt=''/>


                    
                                    </div>
                                <p className="infotitle">{displayname}</p>
                                  <p className="infodesc">{agentdesc}</p>
                                  <Tabs style={{ padding: '10px', fontSize: '12px', alignItems: 'center' }}>
                                  <TabList>
                                    <Tab style={{ padding: '10px', fontSize: '12px' }} > Info</Tab>
                                    <Tab style={{ padding: '10px', fontSize: '12px' }}>Options</Tab>
                                  </TabList>

                                  <TabPanel style={{ textAlign: 'left' }}>

                                    <FaPhoneSquareAlt />{agentpnumber}<br/>
                                    {agentplabel}<br/>
                                    <BiWorld />{agentwebsite}<br/>
                                    {agentwebsitelabel}<br/>

                                    <MdEmail style={{ borderBottom: '1px solid #ccc' }} />
                                    {agentemail}<br/>
                                    {agentemaillabel}
                                  </TabPanel>
                                  <TabPanel style={{ textAlign: 'left !important' }}>
                                    <div className="tabp">
                                      <p className="border-bottom">Notifications </p>

                                      <p>App Settings</p>
                                      <small>Business</small>


                                      <p className="border-bottom">Block and report spam</p>



                                      {/* <hr className="create-hr"/> */}
                                      <p className="border-bottom">View Privacy Policy</p>

                                      <p className="border-bottom">View  terms of Services</p>

                                    </div>
                                  </TabPanel>
                                </Tabs>
                                      
                        </div>
                      </div>
                    </div>
              
           
         
   
      </div>
   </div>
</div>
            

    
   </>     
    
    );
  };

  return (
    <>
      < div id="wrapper" >
        <Sidebar />

        <Createagent1 />



        
      </div>
    </>
  );
}
export default Creatagent;

let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };