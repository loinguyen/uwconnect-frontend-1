import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setProfileVisible, setAgreement } from '../../redux/profile/profileSlice'
import style from '../../styles/formStyle.module.css';
import Switch from 'react-switch';

//https://stackoverflow.com/questions/63939772/rsuite-not-working-properly-how-to-fix-reactjs

/*
When user login, if user profile is not exist then redirect user to user profile page. user profile page included 3 screen:

The 1st screen: 
display name: only allow input alphabet character
select profile picture: user can choose to user a profile pictures from list of 6 profile picture pre-set gender

The 2nd screen:
Program: user can choose between: Undergraduate, Graduated
Admission year: user can choose the year that user joined the program
display a list of available faculties such that: ECE,CS, MSCI…
Currently Taking Course: user can pick the class that they currently joined.

=======================================================
The 3rd screen: <= This Part
Custom tag: all the optional tag that user can select.
=======================================================

The 4th screen:
A check box as user to make your profile public
A check box as user accept the user agreement.
A submit button to submit data to create user Profile
*/

function GetMakePublic() {
    const dispatch = useDispatch();
    //Use `useState` to declare variables and setters to update variable
    const toggle = useSelector((state) => state.user.profile_visible)
    const userAgreeValue = useSelector((state) => state.user.agreement);
    const [isHover,setHover] = useState(false);
    const [msg, setProfileMsg] = useState("");

    function CheckProfileStatus() {
        // CHECK THE COMPLETENESS OF THE PROFILE INFORMATION AND NAVIGATE TO HOME PAGE
    }

    function ButtonClick() {
        // TALK TO THE BACKEND AND SAVE RESPONSE TO <msg>
    }

    function MouseOver() {
        setHover(true);
    };
    
    function MouseOut() {
        setHover(false);
    }

    function handleToggle() {
        dispatch(setProfileVisible(!toggle));
    }
    
    function handleUserAgreeValue() {
        dispatch(setAgreement(!userAgreeValue));
    }

    return (
        <div className={style.loginContainer}>
            <h1>Make Profile Public</h1>
            <label style={{ fontSize:30, padding: "0 10px 0 0", display:"inline" }}>Show me on UWConnect</label>
            <Switch
                display="inline"
                onChange={handleToggle}
                checked={toggle}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
            />
            <div>
                <input
                    style={{ display:"inline", width:10}}
                    type="checkbox"
                    checked={userAgreeValue}
                    onChange={handleUserAgreeValue}
                />
                <label style = {{display:"inline", fontSize:18}}>I have read and agree to the <a style={{ color:"dodgerblue", fontSize:18 }}>terms of service</a></label>
            </div>
            {/* <button 
                    onClick={ButtonClick}
                    onMouseOver={MouseOver} 
                    onMouseOut={MouseOut}
                    onMouseUp={CheckProfileStatus}
                    style={{ backgroundColor : isHover ? "orange" : "black" }}
                >Submit
            </button> */}
        </div>
    );
}

export default GetMakePublic;