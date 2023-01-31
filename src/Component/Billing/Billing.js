import React from 'react'
import  Sidebar from '../Sidebar/Sidebar'
import Header from  '../Header/Header'

import './billing.css'

const Billing = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    <div class="main-panel">
    <div class="content-wrapper"  >
        {/* <div class="page-header" > */}
              <h4 class="page-title" >Payments</h4>
              
        {/* </div> */}
            <div>
        <div >
          <div className='rowcont'>
                  <div className="cont-add">
		                 <h5>Current Balance</h5>
                    <small>last payment 12/05/2022 </small>
		                    <br/>
                        <br/>
                    
                    <div>
                      
                    <h5>Add Money</h5>
                    
                    <input type="text" className="form-controlB"   placeholder=""/>
                
           
                <button type="submit" value="" class="bbtnB"  > Transaction to bank</button>
                 <button type="submit" value="" class="bbtnB"> Proceed to Pay</button>
              
                      </div>

                </div>

                <div className="cont-add">
                
                  
                    <h5>Payed Amount</h5>
                     
                     <h3>₹60,210.13</h3>

                      <h5>Invoice Breakup</h5>

                    <a href="#">View Invoice</a>
                  <div class="Invoice" >
                    <div>
                      <p>Taxes</p>
                      <p>Billable Amount</p>
                      <p>GST @18%</p>
                      <h4><b>Payed Amount</b></h4>
                    </div>
                   
                    <div>
                        <p >₹4,802.98</p>
                        <p >₹51,025.53</p>
                        <p >₹9,184.60</p>
                        <h4 ><b>₹60,210.13</b></h4>

                    </div>
                  </div>
                  
              </div>
         
              </div>
            </div>
          
            

        
          
                  
          
      <div class="rowcont">    
          <div class="cont-add">
              <div >
                <div >
                  <div>
                   
                       
                    <form class="forms-sample">
                      
                      <div >
                        
                      
                       <label for="">Account Number</label>
                         <div >
                        <input type="text" class="form-controlB" id="" placeholder="Enter Bank Account Number"/>
                      </div>
                      
                        <div>
                      
                       <label for="">Account Holder's Name</label>
                        
                        <input type="text" class="form-controlB" id="" placeholder="Enter Bank Account Holder's Name" />
                      </div>
                      </div>


                      <div >
                       <label for="">IFSC Code</label>
                         <div>
                        <input type="text" class="form-controlB" id="" placeholder="Enter IFSC Code number"/>
                      </div>
                      </div>
                      <div >
                       <label for="">Mode of Transfer</label>
                         <div >
                        <select class="form-controlBB" id="exampleFormControlSelect1">
                      <option>--select --</option>
                      <option>IMPS</option>
                      <option>NEFT</option>
                      <option>RTGS</option>
                     </select>
                      </div>
                      </div>
                    
                     
                      <button type="submit" class="bbtnBB">Submit</button>
                          
                    </form>

                  </div>
                
              </div>
            </div>
          </div>


      

<div class="cont-add">
	
                <div class="cardb">
                  <div class="card-bodyb">
                   <h4>Transactional  Details</h4>
                    <table class="table">
                      <thead>
                        <tr>
                          <th >Date</th>
                          <th >Amount</th>
                          <th>Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>04-06-2022</td>
                          <td>&#8377; 533.00</td>
                          <td>No Remarks</td>
                        </tr>
			<tr>
			  <td>01-06-2022</td>
                          <td>&#8377; 745.00</td>
                          <td>No Remarks</td>
                        </tr>
			<tr>
			  <td>28-05-2022</td>
                          <td>&#8377; 634.00</td>
                          <td>No Remarks</td>

                        </tr>
			<tr>

			<td>27-05-2022</td>
                          <td>&#8377; 678.00</td>
                          <td>No Remarks</td>

                        </tr>
			<tr>
				<td>25-05-2022</td>
                          <td>&#8377; 934.00</td>
                          <td>No Remarks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

</div>
</div>              
               
           
             
</div>



    </div></>


  )
}

export default Billing