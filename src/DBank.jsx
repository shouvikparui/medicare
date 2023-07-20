import React from 'react';
import './DBank.css';
import { MdDoubleArrow } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FcMoneyTransfer } from 'react-icons/fc';
import { AiOutlineArrowRight } from 'react-icons/ai';


const DBank = () => {
    return (
        <div className='banking py-5 px-md-5 '>
            <div className='transactions '>

                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>
                <div className='item'>
                    <div className='bullet'><MdDoubleArrow style={{fontSize:"25px"}} /></div>
                    <div className='detail'>
                        Rs 300 credited on 19:07:08<br />
                        <b>Transaction ID : 3787058905850-83-0</b>
                    </div>

                </div>

            </div>
            
            <div className='calculation'>
                <div className='heading'>
                    Hi Kaushan welcome to DBank, your personalized DApp
                </div>
                <div className='transaction '>
                    <div className='credit px-5 py-5 mt-5'>
                        <div className='image'>
                           <FcMoneyTransfer style={{fontSize:"100px"}}/>
                        </div>
                        <div className='input mt-2'>
                            <input type="number" placeholder='Enter amount...' />
                            <button className='px-2 mt-3'>Credit</button>
                        </div>
                        <div className='message'>
                            

                        </div>
                    </div>
                    <div className='debit px-5 py-5 mt-5'>
                        <div className='image'>
                            <GiTakeMyMoney style={{fontSize:"100px"}}/>
                        </div>
                        <div className='input mt-2'>
                            <input type="number" placeholder='Enter amount...' />
                            <button className='px-2 mt-3'>Debit</button>
                        </div>
                        <div className='message'>
                           

                        </div>
                    </div>
                </div>
                <div className='checkBalance mt-5'>
                    Your current balance Rs 3000
                </div>

            </div>
        </div>

    )
}

export default DBank