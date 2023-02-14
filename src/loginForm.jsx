import React, {useState} from "react";
import './formStyle.css';


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
                <img src="https://uwaterloo.ca/canadian-semiconductor-science-technology-conference/sites/ca.canadian-semiconductor-science-technology-conference/files/styles/conference_sponsor/public/university_of_waterloo_logo_c.png?itok=IeGDcH--"
                >
                </img>
                {/* <img src="https://static.thenounproject.com/png/594218-200.png"></img> */}
                
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