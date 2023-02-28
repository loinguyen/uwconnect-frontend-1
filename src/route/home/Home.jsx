import React, {useState} from "react";
import '../../styles/formStyle.css';
import {redirect} from "react-router-dom";
import {useLocation} from 'react-router-dom';


function Home(){

    const location = useLocation();

    return (
        <div className="loginContainer">
                <p>Welcome to UWConnect '{location.state.name}' </p>   
                <p>This is your home page</p>
        </div>
    );


}

export default Home;