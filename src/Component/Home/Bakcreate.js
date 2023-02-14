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


    const [form3, setForm3] = useState({
      //  agentbanner:" ",
      //  agentlogo:" ",
      //     displayname:" ",
      //     agentdesc:" ",
      //     agentpnumber:" ",
      //     agentplabel:" ",
      //     agentwebsite:" ",
      //     agentwebsitelabel: " ",
      //     agentemail:" ",
      //     agentemaillabel:" ",
      //     privacy:" ",
      //      terms:" ",
      //      agent_experince:" ",
      //      actions:" ",
    }

    );


    const [fileUrl, setFileUrl] = useState([]);
    // const [file1Url, setFile1Url] = useState(null);

    const [activestep, setActivestep] = useState(0);

    const form3Handle = (e) => {


      setForm3({ ...form3, [e.target.name]: e.target.value });
      
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setFileUrl(imageUrl)
      // const image1File = e.target.files[-1];
      // const image1Url = URL.createObjectURL(image1File);
      // setFileUrl(image1Url)
      // var image=setForm3(form3.agentbanner, URL.createObjectURL(e.target.files[0]));


      // console.log(URL.createObjectURL(e.target.files[0]));

      // setForm3( URL.createObjectURL(e.target.files[0]));

      // console.log(setForm3(result));
      // const image1=setForm3(...form3,URL.createObjectURL(e.target.[0]));
    }
    // const checkHandler=(e)=>{
    //   setCheckedbox({...checkedbox,[e.target.name]:e.target.value})
    // }
    const submitHandler = (e) => {
      e.preventDefault();

      console.log(form3);
    }
const  imagee=form3.agentbanner;
const imagee1=form3.agentlogo;

    return (
      <>
        <div>
          <h4> rbm agent info </h4>
          <form onSubmit={submitHandler}>
          <div className="main">
            {/* left */}

              {activestep === 0 ? (<div className="left-cont" >




                <div className="leftinside">
                  <h2 style={{ marginLeft: 15 }}>Branding</h2>
                  <div class="form-groupCrt">


                    <label>Upload Banner</label>
                    <br />

                    <small>Large Banner Image (1440x448)</small>
                    <br />
                    <input
                      type="file"
                      class="form-controlCrt"
                      // id="imgInp"
                      value={form3.agentbanner}
                      // accept="image/png, image/jpg, image/jpeg"
                      name="agentbanner"
                      required=""
                      onChange={form3Handle}
                    // acceptpng"
                    // onChange={setagentimage}

                    />
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
                        value={form3.agentlogo}
                        // accept="image/png, image/jpg, image/jpeg"
                        required=""
                        onChange={form3Handle}
                      // onChange={setagentimage1}

                      />
                    </div>
                  </div>

                  <div class="form-groupCrt">
                    <label for="exampleInputUsername1">Display Name</label>
                    <input
                      type="text"
                      class="form-controlCrt"
                      name="displayname"
                      value={form3.displayname}

                      placeholder="Display Name"
                      onChange={form3Handle}
                    />
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
                      value={form3.agentdesc}

                      onChange={form3Handle}

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
                </div>
                {/* 2 */}

                {/* 3 */}
              </div>) : ("")}



              {/* <!-- Circles which indicates the steps of the form: --> */}

              {/* Right */}







              {/* left */}
              {activestep === 1 ? (<div className="left-cont">
                {/* 2 */}
                <div className="leftinside">
                  <h2>Point of Contact</h2>

                  <div class="form-groupCrt">
                    <label for="exampleInputUsername1">Primary phone Number</label>
                    <input
                      type="number"
                      class="form-controlCrt"
                      id="contact"
                      name="agentpnumber"
                      value={form3.agentpnumber}

                      placeholder="Primary phone Number"
                      maxlength="15"
                      size="15"
                      required=""
                      onChange={form3Handle}

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
                      value={form3.agentplabel}

                      placeholder="Label for primary phone Number"
                      required=""
                      onChange={form3Handle}

                    />
                  </div>

                  <div class="form-groupCrt">
                    <label for="exampleInputUsername1">Primary Website</label>
                    <input
                      type="url"
                      class="form-controlCrt"
                      id="website"
                      name="agentwebsite"
                      value={form3.agentwebsite}
                      placeholder="Primary Website"
                      required=""
                      onChange={form3Handle}

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
                      value={form3.agentwebsitelabel}
                      placeholder="Label Primary website"
                      required=""
                      onChange={form3Handle}

                    />
                  </div>
                  <div class="form-groupCrt">
                    <label for="exampleInputUsername1">Email</label>
                    <input
                      type="email"
                      class="form-controlCrt"
                      name="agentemail"
                      // id="Email"
                      value={form3.agentemail}
                      placeholder="Email"
                      required=""
                      onChange={form3Handle}

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
                      value={form3.agentemaillabel}

                      onChange={form3Handle}

                    />
                  </div>

                  <div class="form-groupCrt">
                    <label for="exampleInputPassword1">Privacy Policy*</label>
                    <input
                      type="url"
                      class="form-controlCrt"
                      id="Privacy_Policy"
                      name="privacy"
                      value={form3.privacy}
                      placeholder="Please enter Privacy policy URL"
                      required=""
                      onChange={form3Handle}

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
                      value={form3.terms}
                      placeholder="Please enter Terms and Conditions"
                      required=""
                      onChange={form3Handle}

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
              </div>
              ) : ("")}






              {/* left */}

              {activestep === 2 ? (<div className="left-cont" >
                {/* 3 */}

                <div className="leftinside">
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
                      value={form3.agent_experince}

                      onChange={form3Handle}

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
                      onChange={form3Handle}
                      value={form3.actions}

                    ></textarea>
                  </div>

                  <div class="form-groupCrt">
                    <label for="address">Select the Required Operator</label>
                    <div class="row_operator">
                      <div class="coloumn_operator">
                        <input
                          type="checkbox"
                          name="checked1"
                          checked={form3.checked1}

                          class="form-check-input"
                          required=""
                          onChange={form3Handle}

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
                          checked={form3.checked2}

                          class="form-check-input"
                          required=""
                          onChange={form3Handle}

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

                          checked={form3.checked3}

                          class="form-check-input"
                          required=""
                          onChange={form3Handle}

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
                          onChange={form3Handle}
                          checked={form3.checked4}


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
                </div>
              </div>) : ("")}
              {/* <!-- Circles which indicates the steps of the form: --> */}

              {/* Right */}

            
            <div className="right-cont">
              <div className="fieldcontT1">
                {/* <center style={{textAlign:'center'}}>Message Preview</nter><br/> */}
                <div className="mystCtr">
                  <div>


                    <center style={{ paddingTop: '40px' }}>
                      <b id="agenttarget">Info & Options</b>
                    </center>


                    <div style={{ padding: '0px', textAlign: 'center' }}>
                      <img
                        src={fileUrl} style={{ height: "180px", width: "240px", border: "none" }}
                      />
                      <img
                        src={fileUrl}
                        style={{ height: "50px", width: "50px", borderRadius: "50%" }}/>


                      <p style={{ overflowWrap: 'break-word', fontSize: "16px", fontWeight: 'bold' }}>{form3.displayname}</p>
                      <p style={{ overflowWrap: 'break-word' }}>{form3.agentdesc}</p>
                    </div>

                    <Tabs style={{ padding: '10px', fontSize: '12px', alignItems: 'center' }}>
                      <TabList>
                        <Tab style={{ padding: '10px', fontSize: '12px' }} > Info</Tab>
                        <Tab style={{ padding: '10px', fontSize: '12px' }}>Options</Tab>
                      </TabList>

                      <TabPanel style={{ textAlign: 'left' }}>

                        <FaPhoneSquareAlt />{form3.agentpnumber}<br />
                        {form3.agentplabel}<br /><br />
                        <BiWorld />{form3.agentwebsite}<br />
                        {form3.agentwebsitelabel}<br /><br />

                        <MdEmail style={{ borderBottom: '1px solid #ccc' }} />
                        {form3.agentemail}<br />
                        {form3.agentemaillabel}
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
