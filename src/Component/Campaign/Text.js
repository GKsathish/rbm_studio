  import React,{useState} from 'react'
  import Sidebar from '../Sidebar/Sidebar';
  import Header from '../Header/Header'
  import {AiOutlineArrowLeft} from 'react-icons/ai'
  import './text.css';



  const Text = () => {
    const [selectedoperator,setSelectedoperator] = useState([]);
    const [selectedmessage,setSelectedmessage]=useState('');

      function handleSelectChange(event) {
          setSelectedoperator(event.target.value);
      }
      function handleSelectChangemesage(event) {
        setSelectedmessage(event.target.value);
    }

    return (
      <>
        <div id="wrapper" className='row'>
          <Sidebar />
          



            
            <div className='col-12 pl-5 mt-5'>
                <div className='row '>
                  
                   <h4 className='texttitle'>Text Message Campaign</h4>


                    <div className=' bg-white  col-12 col-lg-6 m-3 ' style={{height:'100vh'}}>

                      <div class="form-groupT">
                        <label className="p-2">Campaign  Name</label><br />

                        <input type="text" name="" class="form-controlT" id="carddesc" placeholder="Campaign Nick Name" required minlength="5" maxlength="10" size="10" />
                      </div>

                      <div class="form-groupT">
                        <label>Select agent</label><br />
                        <select class="form-controlT" name="agent" required onChange={handleSelectChange}>
                          <option>-Select Agent-</option>
                          <option value="Mobile Masala">MobileMasala</option>
                          <option value="Zing">Zing</option>


                        </select>
                      </div>



                      <div class="form-groupT">
                        <label>Message</label><br />

                        <textarea class="form-controlT" id="messagetext" name="textmessage" rows="5" placeholder="Please enter text message" minlength="10" maxlength="320" size="320" required onChange={handleSelectChangemesage}></textarea>
                      </div>

                      <div class="form-groupT">
                        <label>Select Base File</label><br />
                        <select class="form-controlT" name="rcsfilenamerich" required>
                          <option>--Select File--</option>
                          <option value="0">base1</option>
                          <option value="1">base2</option>


                        </select>
                      </div>
                      <button type="submit" name="textsubmit" class="btnT  m-3" >Test Campaign</button>
                      <button type="submit" name="settest" class="btnT1 m-3" >Set Campaign</button>






                    </div>

                    <div className=' bg-white col-12 col-lg-5 m-3' style={{height:'100vh'}}>


                      <center>Message Preview</center><br />
                      <div className='mystT'>

                        <div style={{display:'flex',marginTop:'40px'}}>
                        <AiOutlineArrowLeft style={{ width:'40px', height:'20',marginTop:'4px',paddingRight:'5px'}}/>
                      
                      {selectedoperator} 
                        </div>
                      <div  className='messagecont'>
                      <p>{selectedmessage}</p>
                      </div>

                      </div>





                    </div>
                

                </div>
              </div>

        </div>
          
        
      </>

    )
  }

  export default Text