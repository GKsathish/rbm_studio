import React, { useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BiWorld } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./createagent.css";

// import Createagent1 from './Createagent1';
function Creatagent() {
  const { useState } = React;


  // createagent1

  const Createagent1 = () => {

    // const [form2,setForm2]=useState();
  
    // const setagentimage = (event) => {
    //   setAgenbanner(URL.createObjectURL(event.target.files[0]));
    // };
    // const setagentimage1 = (event) => {
    //   setAgentlogo(URL.createObjectURL(event.target.files[0]));
    // };
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

    
    const submitHandler = (e) => {
      e.preventDefault();

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




    }


    return (
      
      

          <>
            {/* left */}

            <div style={{marginTop:'20px'}}>
            <h4 style={{paddingLeft:"30px"}}> rbm agent info </h4>

            <form onSubmit={submitHandler} className="form-cont">
< div className=" left bg-white">
              {activestep === 0 ? (
              <div >




                
                  <h2 style={{ marginLeft: 15 }}>Branding</h2>
                  <div class="form-groupCrt">



                    <label>Upload Banner</label>
                    <br />
                    <div class="input-group col-xs-12">

                    <small>Large Banner Image (1440x448)</small>
                    <br />
                    <input
                      type="file"
                      class="form-controlCrt"
                      // id="imgInp"
                      // value={form3.agentbanner}
                      // accept="image/png, image/jpg, image/jpeg"
                      name="agentbanner"
                      required=""
                      value={agentbanner}
                      onChange={agentbannerhandler}
                    // acceptpng"
                    // onChange={setagentimage}

                    />
                  </div>
                  </div>

                  <div class="form-groupCrt">
                    <label>Upload Logo</label>

                    <div class="input-group col-xs-12">
                      <small>Small Size Image (224x224)</small>
                      <br />
                      <input
                        type="file"
                        class="form-controlCrt"
                        // id="imgInp1"
                        name="agentlogo"
                        value={agentlogo}
                        // accept="image/png, image/jpg, image/jpeg"
                        required=""
                        onChange={agentelogohandler}
                        // onChange={setagentimage1}

                      />
                    </div>
                  </div>

                  <div class="form-groupCrt">
                    <label for="exampleInputUsername1">Display Name</label>
                    <div class="input-group col-xs-12">

                    <input
                      type="text"
                      class="form-controlCrt"
                      name="displayname"
                      value={displayname}

                      placeholder="Display Name"
                      onChange={(e)=> setdisplayname(e.target.value)}
                    />
</div>
                  </div>

                  <div class="form-groupCrt">
                    <label for="exampleInputUsername1">Descripition</label>
                    
                    <textarea
                      type="text"
                      class="form-controlCrt"
                      // id="discription"
                      name="agentdesc"
                      placeholder="Descripition"
                      maxlength="75"
                      size="75"
                      required=""
                      value={agentdesc}

                      onChange={(e)=>setagentdesc(e.target.value)}

                    ></textarea>
                  </div>

                  <div>
                    {/* <button type="button" id="prevbtncre" onclick="nextPrev(-1)" className='btncre'>Previous</button> */}
                    <button
                      type="button"
                      //  name="createAgent"
                      //  id="nextbtncre"
                      onClick={() => {
                        setActivestep(activestep + 1);
                      }}
                      className="btncre"
                    >
                      Next
                    </button>
                  </div>
                
                {/* 2 */}

                {/* 3 */}
              </div>) : ("")}



              {activestep === 1 ? (<div className="m-2">
                <h2>Point of Contact</h2>

<div class="form-groupCrt">
  <label for="exampleInputUsername1">Primary phone Number</label>
  <input
    type="number"
    class="form-controlCrt"
    id="contact"
    name="agentpnumber"
    value={agentpnumber}

    placeholder="Primary phone Number"
    maxlength="15"
    size="15"
    required=""
    onChange={e=>setagentpnumber(e.target.value)}

  />
</div>
<div class="form-groupCrt">
  <label for="exampleInputUsername1">Label phone Number</label>
  <input
    type="text"
    class="form-controlCrt"
    onkeydown="return /^[ A-Za-z_@./#&amp;+-]*$/i.test(event.key)"
    id="labelforcontact"
    name="agentplabel"
    value={agentplabel}

    placeholder="Label for primary phone Number"
    required=""
    onChange={e=>setagentplabel(e.target.value)}

  />
</div>

<div class="form-groupCrt">
  <label for="exampleInputUsername1">Primary Website</label>
  <input
    type="url"
    class="form-controlCrt"
    id="website"
    name="agentwebsite"
    value={agentwebsite}
    placeholder="Primary Website"
    required=""
    onChange={e=>setagentwebsite(e.target.value)}

  />
</div>
<div class="form-groupCrt">
  <label for="exampleInputUsername1">
    {" "}
    Label Primary Website
  </label>
  <input
    type="text"
    onkeydown="return /^[ A-Za-z_@./#&amp;+-]*$/i.test(event.key)"
    class="form-controlCrt"
    // id="websitelabel"
    name="agentwebsitelabel"
    value={agentwebsitelabel}
    placeholder="Label Primary website"
    required=""
    onChange={e=>setagentwebsitelabel(e.target.value)}

  />
</div>
<div class="form-groupCrt">
  <label for="exampleInputUsername1">Email</label>
  <input
    type="email"
    class="form-controlCrt"
    name="agentemail"
    // id="Email"
    value={agentemail}
    placeholder="Email"
    required=""
    onChange={e=>setagentemail(e.target.value)}

  />
</div>

<div class="form-groupCrt">
  <label for="exampleInputUsername1">Label Primary Email</label>
  <input
    type="email"
    class="form-controlCrt"
    id="Emaillabel"
    name="agentemaillabel"
    placeholder="Label for primary Email"
    required=""
    value={agentemaillabel}

    onChange={e=>setagentemaillabel(e.target.value)}

  />
</div>

<div class="form-groupCrt">
  <label for="exampleInputPassword1">Privacy Policy*</label>
  <input
    type="url"
    class="form-controlCrt"
    id="Privacy_Policy"
    name="privacy"
    value={privacy}
    placeholder="Please enter Privacy policy URL"
    required=""
    onChange={e=>setprivacy(e.target.value)}

  />
</div>

<div class="form-groupCrt">
  <label for="exampleInputConfirmPassword1">
    Terms and Conditions*
  </label>
  <input
    type="url"
    class="form-controlCrt"
    id="terms_of_Services"
    name="terms"
    value={terms}
    placeholder="Please enter Terms and Conditions"
    required=""
    onChange={e=>setterms(e.target.value)}


  />
</div>

<div>
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
  <button
    type="button"
    // name="createAgent"
    // id="nextbtncre"
    onClick={() => {
      setActivestep(activestep + 1);
    }}
    className="btncre"
  >
    Next
  </button>
</div>
</div>
            
              
                 
              
              ) : ("")}

              {activestep === 2 ? (<div  >
                {/* 3 */}

                
                  <h2 class="rbm_agent_heading">Agent Experince</h2>
                  <div class="form-groupCrt">
                    <label for="mob">Agent Experince</label>
                    <input
                      type="text"
                      name="agent_experince"
                      class="form-controlCrt"
                      id="mob"
                      placeholder="Please Provide your Experince"
                      required=""
                      value={agent_experince}

                      onChange={e=>setagent_experience(e.target.value)}


                    />
                  </div>
                  <div class="form-groupCrt">
                    <label for="address">
                      What actions trigger Messages to users?
                    </label>
                    <textarea
                      class="form-controlCrt"
                      name="actions"
                      placeholder="What actions trigger Messages to users?"
                      required=""
                      
                      value={actions}
                      onChange={e=>setactions(e.target.value)}

                    ></textarea>
                  </div>

                  <div class="form-groupCrt">
                    <label for="address">Select the Required Operator</label>
                    <div class="row_operator">
                      <div class="coloumn_operator">
                        <input
                          type="checkbox"
                          name="checked1"
                          checked={checked1}

                          class="form-check-input"
                          required=""
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
                          required=""
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
                          required=""
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
                          required=""
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
                    <button
                      type="submit"
                      name="createAgent"
                      // id="nextbtncre"
                      // onClick={() => {
                      //   setStep(step + 1);
                      // }}
                      className="btncre"
                    >
                      Submit
                    </button>
                  </div>
                
              </div>) : ("")}
             
    </div>    
            
            <div className=" bg-white  right  ">
              
                {/* <center style={{textAlign:'center'}}>Message Preview</nter><br/> */}
                <div className="mystCtr">
                  <div>


                    <center style={{ paddingTop: '40px' }}>
                      <b id="agenttarget">Info & Options</b>
                    </center>


                    <div >
                    <div className="prev-img-cont">
                  <img src={fileUrl} className="file"/>
                  <img src={fileUrl1} className="file1"/>
                    </div>



                    
                      <p style={{ overflowWrap: 'break-word', fontSize: '16px', fontWeight: 'bold' }}>{displayname}</p>
                      <p style={{ overflowWrap: 'break-word' }}>{agentdesc}</p>
                    </div>

                    <Tabs style={{ padding: '10px', fontSize: '12px', alignItems: 'center' }}>
                      <TabList>
                        <Tab style={{ paddingRight: '70px', fontSize: '14px' }} > Info</Tab>
                        <Tab style={{ paddingRight: '60px', fontSize: '14px' }}>Options</Tab>
                      </TabList>

                      <TabPanel style={{ textAlign: 'left' }}>

                        <FaPhoneSquareAlt />{agentpnumber}<br />
                        {agentplabel}<br /><br />
                        <BiWorld />{agentwebsite}<br />
                        {agentwebsitelabel}<br /><br />

                        <MdEmail style={{ borderBottom: '1px solid #ccc' }} />
                        {agentemail}<br />
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

            
          </form>
          </div>
            

          </>
        
    
    );
  };
  return (
    <>
      <div id="wrapper" >
        <Sidebar />

        <div className="agt-cont "><Createagent1 />



        </div>
      </div>
    </>
  );
}

export default Creatagent;
