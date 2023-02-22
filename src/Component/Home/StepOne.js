// import React, { useState } from "react";
// import { Form } from "react-bootstrap";
// import validator from "validator";

// // creating functional component ans getting props from app.js and destucturing them
// const StepOne = ({ nextStep, handleFormData, values }) => {
//   //creating error state for validation
//   const [error, setError] = useState(false);

//   // after form submit validating the form data using validator
//   const onSubmit = (e) => {
//     e.preventDefault();

//     // checking if value of first name and last name is empty show error else take to step 2
//     if (
//       validator.isEmpty(values.agentbanner) ||
//       validator.isEmpty(values.agentlogo)||
//       validator.isEmpty(values.displayname)||
//       validator.isEmpty(values.agentdesc)


//     ) {
//       setError(true);
    
//     } else {
//       nextStep();
//     }
//   };
//   // const [fileUrl, setFileUrl] = useState(null);

//   // const [fileUrl1, setFileUrl1] = useState(null);
//   // const agentbannerhandler=(e)=>{
  
  
//   //   const imageFile = e.target.files[0];
//   //       const imageUrl = URL.createObjectURL(imageFile);
//   //       setFileUrl(imageUrl)
//   // }
//   // const agentelogohandler=(e)=>{
  
  
//   //   const imageFile1 = e.target.files[0];
//   //       const imageUrl1 = URL.createObjectURL(imageFile1);
//   //       setFileUrl1(imageUrl1)
//   // }
    
//   return (
  
//        <form    onSubmit={onSubmit}>



// <h2 class = "rbm_agent_heading">Branding</h2>

                                      
//                                         {/* <h2 style={{ marginLeft: '1' }}>Branding</h2> */}
//                                         <div class="form-group">



//                                           <label>Upload Banner</label>
                                          
//                                           <div class="input-group col-xs-12">

//                                           <small style={{color: '#2222228c'}}>Large Banner Image (1440x448)</small>
//                                           <br />
//                                           <input
//                                             type="file"
//                                             class="form-control"
                                        
//                                             name="agentbanner"
                                            

//                                             defaultValue={values.agentbanner}

//                                             // onChange={agentbannerhandler}
//                                             onChange={handleFormData("agentbanner")}

                                         
//                       style={{width:'100%'}}
//                                           />
//                                         {error ? (
//                 <div style={{ color: "red" }}>
//                   This is a required field
//                 </div>
//               ) : (
//                 ""
//               )}
//                                         </div>
//                                         </div>

//                                         <div class="form-group">
//                                           <label>Upload Logo</label>

//                                           <div class="input-group col-xs-12">
//                                             <small  style={{color: '#2222228c'}}>Small Size Image (224x224)</small>
//                                             <br />
//                                             <input
//                                               type="file"
//                                               class="form-control"
//                                         //  id="agentlogo"
//                                               name="agentlogo"
//                                               defaultValue={values.agentlogo}


//                                             onChange={handleFormData("agentlogo")}
                                              
                                              

//                                             />
//                                                 {error ? (
//                 <div style={{ color: "red" }}>
//                   This is a required field
//                 </div>
//               ) : (
//                 ""
//               )} 
//                                           </div>
//                                         </div>

//                                         <div class="form-group">
//                                           <label for="exampleInputUsername1">Display Name</label>
//                                           <div class="input-group col-xs-12">

//                                           <input
//                                             type="text"
//                                             class="form-control"
//                                             name="displayname"
//                                             // value={displayname}
                                            
//                                             defaultValue={values.displayname}
//                                             // id="displayname"
//                                             placeholder="Display Name"
//                                             onChange={handleFormData("displayname")}

//                                             // onChange={(e)=> setdislayname(e.target.value)}
//                                           />
//                                            {error ? (
//                 <div style={{ color: "red" }}>
//                   This is a required field
//                 </div>
//               ) : (
//                 ""
//               )}
                                             
//                       </div>
//                                         </div>

//                                         <div class="form-group">
//                                           <label for="exampleInputUsername1">Description</label>
                                          
//                                           <textarea
//                                             type="text"
//                                             class="form-control"
//                                             // id="agentdesc"
//                                             name="agentdesc"
//                                             defaultValue={values.agentdesc}

//                                             placeholder="Descripition"
//                                             maxlength="75"
//                                             size="75"
//                                             // required
//                                             // value={agentdesc}
//                                             onChange={handleFormData("agentdesc")}

//                                             // onChange={(e)=>setagentdesc(e.target.value)}

//                                           ></textarea>
//                                            {error ? (
//                 <div style={{ color: "red" }}>
//                   This is a required field
//                 </div>
//               ) : (
//                 ""
//               )}
//                                         </div>

//                                         <div>
//                                           {/* <button type="button" id="prevbtncre" onclick="nextPrev(-1)" className='btncre'>Previous</button> */}
//                                           <button
//                                             type="submit"
//                                              name="createAgent"
                                           
//                                             className="btncre"
//                                           >
//                                             Next
//                                           </button>
//                                         </div>
                                      
                                     
//                                     </form>
  
//   );
// };

// export default StepOne;
