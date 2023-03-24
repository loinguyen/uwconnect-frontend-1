import React from 'react'
import { DownOutlined, LogoutOutlined, ProfileOutlined, SettingOutlined } from '@ant-design/icons';
import  { Avatar, Dropdown, Space, message  } from 'antd';
import { persistor } from '../redux/store'

import logo from '../images/login_logo.png';
import { useSelector } from 'react-redux';


const items = [
  {
    key: '1',
    label: "Profile",
    icon: < ProfileOutlined />
  },
  {
    key: '2',
    danger: true,
    label: "Sign out",
    icon: < LogoutOutlined />
  },
];

const handleMenuClick = ({ key }, email ) => {
    message.info(`Click on item ${key}`);
    if (key === "2"){
        // clear all redux states
        fetch(process.env.REACT_APP_API_LINK + '/user/logout', {
            // fetch('http://localhost:5000/user/validate', {
            credentials: 'include',
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                email: email,
            })
        })
        .then(response => {
            if (response.status === 200){
                persistor.purge()
                window.location.href = '/'
            }
        })
    }
  };

function Header() {
    const email = useSelector((state) => state.user.email)

    return (
        <div className='row' style={{height: '5vh', backgroundColor: 'rgba(0,0,0,0.9)', color: '#FFFFFF'}}>
            <div className='col-12 d-flex flex-row'>
                <div className='col-4 d-flex' style={{maxHeight: '50px'}}>
                    <Avatar className='my-auto' size={30} src={<img src={logo} alt="" />} />
                    <span className='fs-5 fw-bold my-auto'>UW Connect</span>
                    <span className='fs-5 fw-bold my-auto' style={{ float: 'right' }}>
                        <Dropdown
                            menu={{
                                items,
                                onClick: (e) => handleMenuClick(e, email)
                            }}
                            >
                            <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Options
                                <SettingOutlined />
                            </Space>
                            </a>
                        </Dropdown>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
