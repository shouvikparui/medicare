import React from 'react';
import { SiHtml5 } from 'react-icons/si';
import './SKILL.css';

const SKILL = () => {
  return (
    <>
       <div className="skills">
        <div className="container">
           <div className="title">
               SKILL
           </div>
           <div className="tech mt-5">
                <div className="item">
                  <SiHtml5 style={{fontSize:"50px"}}/>
                  <p>HTML 5</p>
                </div>
                <div className="item">
                  <SiHtml5/>
                  <p>HTML 5</p>
                </div>
                <div className="item">
                  <SiHtml5/>
                  <p>HTML 5</p>
                </div>
                <div className="item">
                  <SiHtml5/>
                  <p>HTML 5</p>
                </div>
                <div className="item">
                  <SiHtml5/>
                  <p>HTML 5</p>
                </div>
                <div className="item">
                  <SiHtml5/>
                  <p>HTML 5</p>
                </div>
           </div>
        </div>
     </div>
    </>
  )
}

export default SKILL