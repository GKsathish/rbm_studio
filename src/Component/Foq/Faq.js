// import React from 'react'
// // import Accordion from './Accordian';
// import './faq.css'

// const Faq = () => {


//   return (
//     <div className='faq-container'>
//       {/* <div class="container1">


// <ul class="accordion-list" style={{background :'white', margin : 2, padding : 2, borderRadius : 4}}>
//   <li class="li_faqs">
//     <h4 class="h4_faqs">What is Rich Communication Service? <i class="icon-plus-sign"></i></h4>
//     <div class="answer" style="display: none;">
//       <p class="p_faqs"> RCS is an upgrade to SMS messaging which allows Businesses to broadcast more engaging content using rich media features for branding. It allows two-way communication with customers and call to action
//             features gives business better control of interaction.</p>
      
      
      
        
//     </div>
//   </li>
//   <li class="li_faqs">
//     <h4 class="h4_faqs">What does it cost for users to use RCS Messaging?<i class="icon-plus-sign"></i>+</h4>
//     <div class="answer" style="display: none;"><p class="p_faqs">RCS Business messaging is very cost efficient. Reach out to us for more information about verified message costs and promotions. </p></div>
//   </li>
//   <li class="li_faqs">
//     <h4 class="h4_faqs">What makes RCS unique compared to conventional text messaging? <i class="icon-plus-sign"></i>+</h4>
//     <div class="answer" style="display: none;">
      
// <p class="p_faqs"> SMS requires cellular connection whereas RCS messaging can also be done using network connection and Wi-Fi. Businesses can use RCS rich features to send expressive verified messages.</p>
//     </div>
//   </li>
//   <li class="li_faqs">
//     <h4 class="h4_faqs">What security does RCS offer? <i class="icon-plus-sign"></i>+ </h4>
//     <div class="answer" style="display: none;">
      
      
      
//       <p class="p_faqs">RCS being a Google verified service, messages and their attachments sent are end-to-end encrypted. RCS verifies the business profile and provides verification badges to prevent user from any fraud.  </p>
//     </div>
//   </li>
//   <li class="li_faqs">
//     <h4 class="h4_faqs">Can I send RCS message to anyone? <i class="icon-plus-sign"></i>+</h4>
//     <div class="answer" style="display: none;">
      
      
//       <p class="p_faqs"> RCS enabled phones will receive rich media messages but users which are not RCS enabled will receive Conventional text message/ SMS.</p>
      
//     </div>
//   </li>
//   <li class="li_faqs">
//     <h4 class="h4_faqs">Why should a company use RCS? <i class="icon-plus-sign"></i> +</h4>
//     <div class="answer" style="display: none;">
      
//       <p class="p_faqs"> RCS allows businesses to broadcast real time information to their customers using Rich media features. RCS chat features are similar to WhatsApp and Facebook Messenger, but we can send it to default messaging app of mobile device. Higher customer retention can be done using Chatbot integration and rich experience through quick transaction and payment features.
// </p>
        
//     </div>
//   </li>
// </ul>






// </div> */}
// <div className="accordion">
//         {/* {accordionData.map(({ title, content }) => (
//           <Accordion title={title} content={content} /> */}
      
//       </div>

//     </div>
//   )
// }

// export default Faq

import React, { useState, useRef } from "react";
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import './faq.css'
// import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const faqs = [
    {
        id: 1,
        header: "What is Rich Communication Service?",
        text:`RCS is an upgrade to SMS messaging which allows Businesses to broadcast more engaging content using rich media features for branding. It allows two-way communication with customers and call to action features gives business better control of interaction.

        `
    },
    {
        id: 2,
        header: "What does it cost for users to use RCS Messaging?",
        text:`RCS Business messaging is very cost efficient. Reach out to us for more information about verified message costs and promotions.

        `
      },
    {
        id: 3,
        header: "What makes RCS unique compared to conventional text messaging?",
        text:`SMS requires cellular connection whereas RCS messaging can also be done using network connection and Wi-Fi. Businesses can use RCS rich features to send expressive verified messages.

        `
      },
    {
        id: 4,
        header: "What security does RCS offer?",
        text:`RCS being a Google verified service, messages and their attachments sent are end-to-end encrypted. RCS verifies the business profile and provides verification badges to prevent user from any fraud.

        ` 
      },
    {
      id: 5,
      header: "Can I send RCS message to anyone?",
      text:`RCS enabled phones will receive rich media messages but users which are not RCS enabled will receive Conventional text message/ SMS.

        `
  },
  {
    id: 6,
    header: "Why should a company use RCS?",
    text: `RCS allows businesses to broadcast real time information to their customers using Rich media features. RCS chat features are similar to WhatsApp and Facebook Messenger, but we can send it to default messaging app of mobile device. Higher customer retention can be done using Chatbot integration and rich experience through quick transaction and payment features.`
}
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">{header}</h5>
                    <i className="fa fa-chevron-down rc-accordion-icon"></i>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0'>{text}</p>
                </div>
            </div>
        </div>
    )
}

const Faq = () => {
    
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
    
    return (
        <><Header/>
        <Sidebar/> <div className="container-fluid fas">
        <div className="row justify-content-center">
            <div className="col-md-8 mt-2">
                <div className="card">
                    <div className="card-body">
                      {/* <h4 className="form-heading mb-4 text-primary text-center mt-3">React Accordion</h4> */}
                        {faqs.map((faq, index) => {
                             return (
                                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div></>
           
        
    );
};

export default Faq