import React, {useState} from "react";
import './formStyle.css';
import logo from './images/login_logo.png'


function GetLoginForm(){

    const [isClick,setClickStatus] = useState(false);
    const [isHover,setHover] = useState(false);

    function ButtonClick(){
        setClickStatus(true);
    }
    
    function MouseOver(){
        setHover(true);
    
    };
    
    function MouseOut(){
        setHover(false);
    }

    return (

        <div className="loginContainer">
            <form> 
                <img src={logo}></img>
                <h1>UWConnect</h1>
                <input type = "text" placeholder="Email"/>
                <input type = "password" placeholder="Password"/>
                <button 
                    onClick={ButtonClick}
                    onMouseOver={MouseOver} 
                    onMouseOut={MouseOut}
                    style = {{ backgroundColor : isHover ? "orange" : "black"}}
                >Login
                </button>
                <p style={{fontSize: "18px"}}>New User? <a href="123" style={{color:"orange"}}>Register</a></p>
            </form>
        </div>


    );


}

export default GetLoginForm;