import React from 'react'
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Sidebar } from 'react-pro-sidebar';

import './usrprofile.css'

const Userprofile = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <><Sidebar/>
    <div class="user-maincont" >
          
        

          <h4 style={{color: "#763b75" ,fontSize:20,paddingLeft:10}}>User Porfile</h4>
            
            <div class="user-subcont">
                <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                <TabList>
      <Tab>Account</Tab>
      <Tab>Team</Tab>
      
    </TabList>
             <TabPanel>
             <div >
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
                    </div>
                </TabPanel> 
                <TabPanel>
                <div className="teamcont">

                            
                                  

<div class="team">

<button type="submit"  class="bbtnu" value="View Balance" ><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;+Invite</button>



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
		





                
            

            

    </div></>


    )
}

export default Userprofile