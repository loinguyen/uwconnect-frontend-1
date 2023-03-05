import React, { useState } from "react";
import { Form, Col, Row } from 'react-bootstrap';
import '../../styles/formStyle.css';
import logo from '../../images/login_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

function GetLoginForm() {

    const [isClick,setClickStatus] = useState(false);
    const [isHover,setHover] = useState(false);
    var LoginStatus = false;
    const [Email,setEmailValue] = useState("");
    const [Pass,setPWValue] = useState("");
    const [Msg, setRegisterMessage] = useState("");
    const [EmailError,setEmailerror] = useState(""); 
    const [passwordType, setPasswordType] = useState("password");
    // const [PassError,setPWerror] = useState(""); 
    const navigate = useNavigate();

    function TogglePass() {
        if (passwordType === "password") {
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    }

    function ButtonClick() {
        setClickStatus(true);
        
        if (EmailError === "") {
            fetch(process.env.REACT_APP_API_LINK + '/user/validate', {
            //fetch('http://127.0.0.1:5000/user/validate', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
                },
            body: JSON.stringify({
            email: Email,
            password: Pass,
            checkUserOnly: false,
                })
            })
            .then(response => response.json())
            .then(json => setRegisterMessage(json.message));
        }     
    }

    function CheckLoginStatus() {
        if (LoginStatus === true) {
            navigate('/home',{state:{name:Email}});
        } 
    }
    
    function MouseOver() {
        setHover(true);
    };
    
    function MouseOut() {
        setHover(false);
    }

    function UpdateEmail(event) {
        setEmailValue(event.target.value);

        if (/@uwaterloo.ca$/.test(event.target.value) == false)
        {
            setEmailerror ("Please use a uwaterloo email");
        }
        else {
            setEmailerror ("");
        }
    }

    function UpdatePass(event) {
        setPWValue(event.target.value);
        // if (/^(?=.{8,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(event.target.value) == false)
        // {
        //     setPWerror ("Password needs to be at least 8 in length, one number, one upper case, one lower case and one special character");
        // }
        // else {
        //     setPWerror ("");
        // }
        //setRegisterMessage(JSON.stringify({email: Email, password: Pass,checkUserOnly: false,}));
    }

    React.useEffect(() => {
        if (Msg == "success") {
            LoginStatus = true;
        }

        if (Msg == "fail") {
            setRegisterMessage("Email or Password incorrect");
        }

        CheckLoginStatus();
      }, [Msg]);

    return (
        <div className="loginContainer">
            {/* <form>  */}
                <img src={logo}></img>
                <h1>UWConnect</h1>
                <input type="text" placeholder="Email" onChange={UpdateEmail}/>
                <p className="errorMsg">{EmailError}</p>
                <input type={passwordType} style={{display:"inline-block"}} className="password" placeholder="Password" onChange={UpdatePass}/>
                <button className="togglePass" onClick={TogglePass}>
                    { passwordType==="password" ? <Icon.EyeSlash color="black" /> : <Icon.Eye color="black" /> }
                </button>
                <p className="errorMsg">{Msg}</p>
                {/* <p>{process.env.REACT_APP_API_LINK + '/user/validate'}</p> */}
                <button 
                    onClick={ButtonClick}
                    onMouseOver={MouseOver} 
                    onMouseOut={MouseOut}
                    onMouseUp={CheckLoginStatus}
                    style={{ backgroundColor : isHover ? "orange" : "black"}}
                >Login
                </button>
                <p style={{fontSize: "18px"}}>New User? <a href="/register" style={{color:"orange"}}>Register</a></p>
            {/* </form> */}
        </div>
    );
}

export default GetLoginForm;