import React from 'react';
import Logo from './blockchain.gif';
import './Home.css';

const Home = () => {
  return (
    <div className='Login'>
        <img src={Logo} />
        <p>DBANK</p>
        <div className='name py-2 px-2'>
            
            <input type="text" placeholder='Enter Your name'/>
            <button className=" px-2">Click Me!</button>
        </div>

    </div>
  )
}

export default Home;