import React from 'react'
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Modal, Button} from 'react-bootstrap';  


import './usrprofile.css'

const Userprofile = () => {

  const [show, setShow] = useState(false);  
  
  const modalClose = () => setShow(false);  
  const modalShow = () => setShow(true);  
  const [tabIndex, setTabIndex] = useState(1);
  // const onClick = () => setShowResults(true)
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(true)
  
  // const Results = () => (
    
  // )
  

  return (
    <>
<Header/>
<Sidebar/>
<div>  
      
  <Modal show={show} onHide={modalClose}>  
  <Modal.Header closeButton>  
    <Modal.Title>New User</Modal.Title>  
  </Modal.Header>  
  
  <Modal.Body>  
  <div className='popup'>     

      
      




    
     

{/* <button type="submit" class="bbtnu" name="createuser" onClick={()=>setShowResults(!showResults)}>x</button> */}

                  <div >
                      <label>User Name</label>
                      <input type="text" name="username" class="form-controlp" id="cardtitle req1" minlength="4" maxlength="45" size="45" required="" placeholder="Card Title with Min 4 &amp; Max 45 characters"/>
                  </div>

                  <div >
                            <label>Mobile Number</label>
                            <input type="text" name="mobile_number" class="form-controlp " id="cardtitle req1" minlength="4" maxlength="45" size="45" required="" placeholder="Card Title with Min 4 &amp; Max 45 characters"/>
                  </div>

                  <div >
                            <label>Email Id</label>
                            <input type="text" name="email_id" class="form-controlp " id="cardtitle req1" minlength="4" maxlength="45" size="45" required="" placeholder="Card Title with Min 4 &amp; Max 45 characters"/>
                  </div>
                 <div className='Role'>
                    <h4 className="card-title">Roles</h4>



                        <label class="form-check-label">
                          <input type="radio" class="form-check-input" name="role" id="optionsRadios1" value="5"/> Company Operations <i class="input-helper"></i><i class="input-helper"></i></label>


                        <label class="form-check-label">
                          <input type="radio" class="form-check-input" name="role" id="optionsRadios1" value="6"/> Company Finance <i class="input-helper"></i><i class="input-helper"></i></label>


                 </div>












</div> 
  </Modal.Body>  
  
  <Modal.Footer>  
  <Button variant="info" name="createuser">Invite</Button>

    <Button variant="danger"  onClick={modalClose}>Close Modal</Button>  
    <Button variant="primary">Save changes</Button>  
  </Modal.Footer>  
</Modal>  </div>  

    <div class="user-maincont" >
          
    {/* { showResults ? <Results /> : null } */}


          <h4 style={{color: "#763b75" ,fontSize:20,paddingLeft:10}}>User Profile</h4>
            
            <div class="user-subcont">
                <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                <TabList>
      <Tab>Account</Tab>
      <Tab>Team</Tab>
      
    </TabList>
             <TabPanel>
             <div>
                        <div style={{paddingLeft:20}}>
                          <h5 style={{fontSize:25}}>Swetha </h5>
                          <hr></hr>  

                        </div>
                      
                        <div className="details">
                        

                              <div style={{marginRight:10 ,fontSize:18,fontWeight:'bold'}}>
                                  <h5>Role</h5>
                                  <h5>Phone</h5>
                                  <h5>Email</h5>
                              </div>

                              <div style={{marginRight:10 ,fontSize:18}}>
                                  <h5>COMPANY_SUPER_ADMIN</h5>
                                  <h5>9010667333</h5>
                                  <h5>swetha.s@pyrogroup.com</h5>
                              </div>


                  
                
                        </div>
              </div>
                </TabPanel> 
                <TabPanel>

                <div>

                            
                                  

<div class="team">

  <Button  onClick={modalShow} className="m-2" >  
+InviteUser
      </Button> 

  



<table class="table table-striped display" id="example">
<thead>
<tr>
<th><p class="arrow"><i class="icon-long-arrow-up" id="up"></i><i class="icon-long-arrow-down" id="up"></i>User name</p></th>
<th><p class="arrow"><i class="icon-long-arrow-up" id="up"></i><i class="icon-long-arrow-down" id="up"></i>Email</p></th>
<th><p class="arrow"><i class="icon-long-arrow-up" id="up"></i><i class="icon-long-arrow-down" id="up"></i>Role</p></th>
</tr>
</thead>
<tbody>
<tr>

  <td>Damodar</td>
  <td>damodar@pyrotelecom.com</td>
  <td>  COMPANY_ADMIN</td>


</tr>

  <tr><td>Radhika</td>
  <td>radhika.ramesh@pyrogroup.com</td>
  <td>  COMPANY_ADMIN</td>


</tr>

  <tr><td>Swetha</td>
  <td>swetha.s@pyrogroup.com</td>
  <td>  COMPANY_ADMIN</td>


</tr>

  <tr><td>venkat</td>
  <td>venkata.krishna@beeinnovations.com</td>
  <td>  COMPANY_ADMIN</td>


</tr>

  <tr><td>Damodar</td>
  <td>damodar@gmail.com</td>
  <td>  COMPANY_ADMIN</td>


</tr>

</tbody>
</table>
</div>
</div>


                    </TabPanel>      
                </Tabs>
            
              

                {/* <div >
                    
                       <p className="tabname" onClick={() => setVisible(!visible)}>Account</p>
                       <p className="tabname" onClick={() => setVisible(!visible)}>Team</p>

                </div> */}
                     {/* <div >
                        <div style={{paddingLeft:20}}>
                          <p style={{fontSize:25,}}>Swetha </p>
                          <hr ></hr>  

                        </div>
                      
                        <div className="details">
                        

                              <div style={{marginRight:10 ,fontSize:18,fontWeight:'bold'}}>
                                  <p>Role</p>
                                  <p>Phone</p>
                                  <p>Email</p>
                              </div>

                              <div style={{marginRight:10 ,fontSize:18}}>
                                  <p>COMPANY_SUPER_ADMIN</p>
                                  <p>9010667333</p>
                                  <p>swetha.s@pyrogroup.com</p>
                              </div>


                  
                
                        </div>
                    </div> */}
                    
                

            </div>    
		





                
            

            
    </div>
    
 
    </>


    )
}

export default Userprofile