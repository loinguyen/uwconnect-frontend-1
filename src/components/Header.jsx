import React from 'react'
import { Avatar } from 'antd';

import logo from '../images/login_logo.png';

function Header() {
    
    return (
        <div className='row' style={{height: '5vh', backgroundColor: 'rgba(0,0,0,0.9)', color: '#FFFFFF'}}>
            <div className='col-12 d-flex flex-row'>
                <div className='col-4 d-flex' style={{maxHeight: '50px'}}>
                    <Avatar className='my-auto' size={30} src={<img src={logo} alt="" />} />
                    <span className='fs-5 fw-bold my-auto'>UW Connect</span>
                </div>
            </div>
        </div>
    )
}

export default Header