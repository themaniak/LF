import React, { useState } from "react";
import './FAQ.css';
import Stroke from './images/Stroke.png';


 
function FAQ() {
 
  const [isOpen1, setIsOpen1] = useState(false)
 
  const onClickEvent1 = () => {
    setIsOpen1(!isOpen1);
  }
 
  const [isOpen2, setIsOpen2] = useState(false)
 
  const onClickEvent2 = () => {
    setIsOpen2(!isOpen2);
  }
 
 
 
  return (
 <div>
    <div className="faq">
      <div className="faq-name">

        <div className="heading-about">
          <div className="heading-title">Teams</div>
          <div className="stroke-img"><img src={Stroke} alt="" /></div>
          </div>
 
        <div className="ques-1">
          <div className={`ques-wrapper-1 ${isOpen1 ? 'ques-wrapper-1-active' : ''} `}>
 
            <div className="ques-heading">
 
              <div className="ques-heading-titlebox">
              
                <div className="ques-heading-m">Team 1</div>
                <div onClick={onClickEvent1} className="more-options-m"><div className="more-option-show">+</div><div className="more-option-hide">-</div></div>
              </div>
 
              <div className="list">
                <div className="list-item">
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ducimus, sit necessitatibus magni velit sint! Dolor eos, consequatur aliquid itaque repellat tempora eligendi sunt excepturi aliquam. Incidunt, rem. Itaque, unde.
                </div>
 
  
 
              </div>
            </div>
          </div>
 
          <div className="ques-2">
            <div className={`ques-wrapper-2 ${isOpen2 ? 'ques-wrapper-2-active' : ''} `}>
 
              <div className="ques-heading">
                <div className="ques-heading-titlebox">
                
                  <div className="ques-heading-m">Team 2</div>
                  <div onClick={onClickEvent2} className="more-options-m"><div className="more-option-show">+</div><div className="more-option-hide">-</div></div>
                </div>
 
                <div className="list">
                  <div className="list-item">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti possimus voluptates culpa, at amet explicabo magnam. Nesciunt provident blanditiis nulla fugit placeat dolore qui pariatur perferendis illum. Itaque, natus odio.
                  </div>
 
              
                </div>
 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



 </div>
  )
}
 
 
 
export default FAQ


