import React from 'react'
import './support.css'

const Support = () => {
  return (
    <div  className='container'>
				  
					<form  className="subcontainer">
            <div style={{padding:50}}>
                                        <h3>Contact Us</h3>
					<p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p><br/>
					
				
					
					<input type="text" class="form-controls" placeholder="Email" required=""/><br/>
					<textarea class="form-controls " placeholder="Message" required="" style={{height: 85}}></textarea><br/>
					<input type="file" class="form-controls" multiple="" required=""/><br/>

					<button name="contactus" type="submit" class="btns">Send</button>
          </div>
          <div style={{background:'purple',height:500,width:100,marginRight:-167 }}>
            
            </div>
  
					</form>


    </div>

                                    
                                
  )
}

export default Support