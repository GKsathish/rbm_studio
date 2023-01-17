import React from 'react'

const Billing = () => {
  return (
    
<div class="main-panel">
    <div class="content-wrapper"  >
        <div class="page-header" >
              <h4 class="page-title" >Payments</h4>
              
        </div>
            <div class="row">
              <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
		  <h4>Current Balance</h4>
                    <small class="date">last payment 12/05/2022 </small>
		    <br/>
                    <h5 >Add Money</h5>
                    <div class="form-group ">
                       <input type="text" class="form-control"   placeholder=""/>
                   
                  </div>
                   <button type="submit" value="" class="btn  btn-gradient-primary mr-2"  id="direct"> Transaction to bank</button>
                  <button type="submit" value="" id="mid" class="btn  btn-gradient-primary mr-2"> Proceed to Pay</button>
                 

                </div>
              </div>
            </div>
          
         <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Payed Amount</h5>
                     
                     <h2>₹60,210.<span class="letter">13</span></h2>

                      <h6>Invoice Breakup</h6>

                    <a href="">View Invoice</a>
                  <div class="Invoice" >
                    <p>Taxes</p>
                    <h6 class="voice">₹4,802.98</h6>
                    <p>Billable Amount</p>
                    <h6 class="voice">₹51,025.53</h6>
                    <p>GST @18%</p>
                    <h6 class="voice">₹9,184.60</h6>
                  
                    <h4>Payed Amount</h4>
                    <h3 class="voice">₹60,210.13</h3>

                    <span></span>
                    </div>
                  </div>
                </div>
              </div>
            

        
          
                  
                  <div class="row">
              <div class="col-md-6 grid-margin stretch-card">
                <div class="card" id="trans">
                  <div class="card-body">
                    <h4 class="card-title"></h4>
                    <p class="card-description">  </p>
                       
                    <form class="forms-sample">
                      
                      <div class="form-group">
                        
                      
                       <label for="">Account Number</label>
                         <div class="col-sm-6">
                        <input type="text" class="form-control" id="" placeholder="Enter Bank Account Number"/>
                      </div>
                      </div>
                        <div class="form-group">
                      
                       <label for="">Account Holder's Name</label>
                         <div class="col-sm-6">
                        <input type="text" class="form-control" id="" placeholder="Enter Bank Account Holder's Name" />
                      </div>
                      </div>


                      <div class="form-group">
                       <label for="">IFSC Code</label>
                         <div class="col-sm-6">
                        <input type="text" class="form-control" id="" placeholder="Enter IFSC Code number"/>
                      </div>
                      </div>
                      <div class="form-group">
                       <label for="">Mode of Transfer</label>
                         <div class="col-sm-6">
                        <select class="form-control " id="exampleFormControlSelect1">
                      <option>--select --</option>
                      <option>IMPS</option>
                      <option>NEFT</option>
                      <option>RTGS</option>
                     </select>
                      </div>
                      </div>
                    <center>
                     
                      <button type="submit" class="btn btn-gradient-primary btn-lg mr-2">Submit</button>
                          </center>
                    </form>

                  </div>
                
              </div>
            </div>
          </div>


                        <div class="col-md-6 grid-margin stretch-card" id="div2">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title"></h4>
                    <p class="card-description">  </p>
                    




 <div class="card-body" id="t2">

                      <div class="form-group">
                        <div class="row">
                        <label for="" >Card Number</label>
                         <div class="col-sm-6">
                        <input type="text" class="form-control" id="" placeholder="Enter Card Number" />
                      </div>
                    </div>
                  </div>


                   <div class="form-group">
                        <div class="row">
                        <label for="" >Name On Card</label>
                         <div class="col-sm-6">
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Name On Card"/>
                      </div>
                    </div>
                  </div>

                   <div class="form-group">
                        <div class="row">
                        <label for="" >Expiry Month&year</label>
                         <div class="col-sm-6">
                        <select>
                          <option>Month</option>
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                          <option>06</option>
                          <option>07</option>
                          <option>08</option>
                          <option>09</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          
                        </select>
                        <select>
                          <option>Year</option>
                          <option>2022</option>
                          <option>2023</option>
                          <option>2024</option>

                          <option>2025</option>

                          <option>2026</option>
                          <option>2027</option>
                          <option>2028</option>
                          <option>2029</option>
                          <option>2030</option>
                         




                        </select>

                      </div>
                    </div>
                  </div>

                      <div class="form-group" >
                        
                        <label for="" >CVC</label>
                         <div class="col-sm-6">
                        <input type="text" class="form-control" id="" placeholder="Enter CV Code" />
                      </div>
                    
                  </div>
                  <center>
                    <button type="submit" value="" disabled class="btn  btn-gradient-primary mr-2" >  Pay Now</button>
                  </center>
</div>
</div>

<div id="Tokyo" class="tabcontent">
  <div class="card-body" id="t3">
  <h5>Enter UPI ID
</h5>

<div class="form-group">
                        <div class="row">
                     
                         <div class="col-sm-6">
                        <input type="text" class="form-control" id="" placeholder="MobileNumber@upi"/ >
                        <center>
                         <button type="submit" disabled class="btn btn-gradient-primary mr-2">Pay</button>
                       </center>
                      </div>
                     
                    </div>
                  </div>
  </div>
</div>
         <div id="Newyork" class="tabcontent">
          <div class="card-body" id="t4">
  <h5>Enter Phone Number
</h5>

<div class="form-group">
                        <div class="row">
                     
                         <div class="col-sm-6">
                        <input type="text" class="form-control" id="" placeholder="MobileNumber@upi" />
                        <center>
                         <button type="submit" disabled class="btn btn-gradient-primary mr-2">Pay</button>
                       </center>
                      </div>
                    </div>
                  </div>
  
</div>   

              
                  </div>




                </div>



            
	      </div>

</div>

<div class="col-lg-6 grid-margin stretch-card">
	
                <div class="card">
                  <div class="card-body">
                   <h4>Transactional  Details</h4>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Amount</th>
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

  )
}

export default Billing