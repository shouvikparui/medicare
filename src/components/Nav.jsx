import React,{useState,useEffect} from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { FaLaptopCode } from 'react-icons/fa';
import { BsFillTrophyFill} from 'react-icons/bs';

import { IoMdContact } from 'react-icons/io';
import {MdColorLens } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';

import {BsFillMoonFill} from 'react-icons/bs';
import './Nav.css';

const Nav = () => {
  const [mode,setMode]=useState(0);
  return (
    <div className='navbar container px-5-sm-none  mt-5 '>
         <ul>
            <li><a href=""><AiFillHome style={{width:"20",height:"20",position:"relative",top:"5px"}}/><span>&nbsp;&nbsp;HOME</span></a></li>
            <li>|</li>
            <li><a href=""><FaLaptopCode style={{width:"20",height:"20",position:"relative",top:"5px"}}/><span>&nbsp;&nbsp;SKILL</span></a></li>
            <li>|</li>
            <li><a href=""><BsFillTrophyFill style={{width:"17",height:"17",position:"relative",top:"4px"}}/><span>&nbsp;&nbsp;ACTIVITIES</span></a></li>
            <li>|</li>
            <li><a href=""><IoMdContact style={{width:"20",height:"20",position:"relative",top:"5px"}}/><span>&nbsp;&nbsp;CONTACT</span></a></li>
            <li>|</li>
            <li><input type="color" onChange={(event)=>{
                   console.log(event.target.value)
            }}/><span>&nbsp;&nbsp;THEME</span></li>
            <li>|</li>
            <li onClick={()=>{
              if(mode==0){setMode(1)}
              else {setMode(0)}
            }}>{mode==0?<BsFillSunFill style={{width:"20",height:"20",position:"relative",top:"5px"}}/>:<BsFillMoonFill style={{width:"20",height:"20",position:"relative",top:"5px"}}/>}<span>&nbsp;&nbsp;MODE</span></li>
         </ul>
    </div>
  )
}

export default Nav