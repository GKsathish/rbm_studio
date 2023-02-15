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


                    <div className=' bg-white  col-12 col-lg-6 m-3 ' style={{height:'100vh' ,padding:'20px'}}>

                      <div class="form-groupT">
                        <label className="p-2">Campaign  Name</label><br />

                        <input type="text" name="" class="form-controlT"  placeholder="Campaign Nick Name" required minlength="5" maxlength="10" size="10" />
                      </div>

                      <div class="form-groupT">
                        <label>Select agent</label><br />
                        <select class="form-controlT" name="agent" required onChange={handleSelectChange}>
                          <option>-Select Agent-</option>
                          <option value="Mobile Masala">Mobile Masala</option>
                          <option value="Zing">Zing</option>


                        </select>
                      </div>



                      <div class="form-groupT">
                        <label >Message</label><br />

                        <textarea class="form-controlT" id="messagetext" name="textmessage" rows="5" col="20" placeholder="Please enter text message" minlength="10" maxlength="320" size="320" required onChange={handleSelectChangemesage} ></textarea>
                      </div>

                      <div class="form-groupT">
                        <label>Select Base File</label><br />
                        <select class="form-controlT" name="rcsfilenamerich" required>
                          <option>--Select File--</option>
                          <option value="0">base1</option>
                          <option value="1">base2</option>


                        </select>
                      </div>
                      <button type="submit" name="textsubmit" class="btn-primary btn-bg  rounded-2 m-3 b-0" >Test Campaign</button>
                      <button type="submit" name="settest" class="btn-primary btn-bg rounded-2 m-3 b-0" >Set Campaign</button>






                    </div>

                    <div className=' bg-white col-12 col-lg-5 m-3' style={{height:'100vh'}}>


                      <center><h6 style={{marginBottom:'8px'}}>Message Preview</h6></center>
                      <div className='mystT'>

                        <div style={{display:'flex',marginTop:'40px'}}>
                        <AiOutlineArrowLeft style={{ width:'40px', height:'20',marginTop:'5px',paddingRight:'5px'}}/>
                      
                      {selectedoperator} 
                        </div>
                      <p className='messagecont' >
                      {selectedmessage}</p>
                      

                      </div>





                    </div>
                

                </div>
              </div>

        </div>
          
        
      </>

    )
  }

  export default Text