import React, {useState} from "react";
import './formStyle.css';
import logo from './images/login_logo.png';
//import {useHistory} from 'react-router-dom';


function GetSignupForm(){

    //let history = useHistory();
    const [isClick,setClickStatus] = useState(false);
    const [isHover,setHover] = useState(false);
    const [Pass,setPWValue] = useState("");
    const [Email,setEmailValue] = useState(""); 
    const [PassError,setPWerror] = useState(""); 
    const [ConfirmError,setConfirmerror] = useState(""); 
    const [ConfirmPW, setConfirmPWValue] = useState(false);
    const [Msg, setRegisterMessage] = useState("");
    

    function ButtonClick(){
        setClickStatus(true);
        fetch('http://127.0.0.1:5000/user/register', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
                },
            body: JSON.stringify({
            email: Email,
            password: Pass,
                })
            })
            .then(response => response.json())
            .then(json => setRegisterMessage(json.message));    
        if (Msg != "success"){

        }
        //setRegisterMessage(JSON.stringify({email: Email, password: Pass}));
    }
    
    function MouseOver(){
        setHover(true);
    
    };
    
    function MouseOut(){
        setHover(false);
    }

    function HandlePWChange(event){
        setPWValue (event.target.value);
        if (/^[a-zA-Z0-9]{8,}$/.test(event.target.value) == false)
        {
            setPWerror ("Password need to be 8 character or more") ;
        }
        else{
            setPWerror ("") ;
        }

        //setRegisterMessage(JSON.stringify({email: Email, password: Pass}));
    }

    function OnConfirmChange(event){
        if (event.target.value != Pass){
            setConfirmPWValue(false);
            setConfirmerror("Password does not match");
            event.target.setCustomValidity("Password does not match");
        }
        else{
            setConfirmPWValue(true);
            setConfirmerror("");
        }
    }

    function OnEmailChange(event){
        setEmailValue(event.target.value);
    }

    

    return (

        <div className="loginContainer">
            {/* <form>  */}
                <img src={logo}></img>
                <h1>UWConnect</h1>
                <input type = "text" placeholder="Email" onChange={OnEmailChange}/>
                <input type = "password" placeholder="Password" onChange={HandlePWChange} />
                <p className="errorMsg">{PassError}</p>
                <input type = "password" placeholder="Confirm  Password" onChange={OnConfirmChange} />
                <p className="errorMsg">{ConfirmError}</p>
                <p>{Msg}</p>
                <button 
                    onClick={ButtonClick}
                    onMouseOver={MouseOver} 
                    onMouseOut={MouseOut}
                    style = {{ backgroundColor : isHover ? "orange" : "black"}}
                >Register
                </button>
                <p style={{fontSize: "18px"}}>Already have an account? <a href="/login" style={{color:"orange"}} >Login</a></p>
            {/* </form> */}
        </div>


    );


}

export default GetSignupForm;