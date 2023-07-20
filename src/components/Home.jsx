import React from 'react';
import './Home.css';
import { Typewriter } from 'react-simple-typewriter';


const Home = () => {
    return (
        <>
            <div className='home-page'>
                <div className='container'>
                    <div className='portfolio'>STUDENT&nbsp;&nbsp;<span><Typewriter
                                        words={["TRAVELLERS", " VLOGGERS", "TOURISTS"]}
                                        loop
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={150}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                        
                                    /></span></div>
                    <h2>A student trying to explore out BLOCKCHAIN & WEB DEVELOPMENT </h2>
                    <button>MY RESUME</button>
                </div>
            </div>
        </>
    )
}

export default Home