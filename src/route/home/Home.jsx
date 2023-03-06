import React, {useState} from "react";
import style from '../../styles/formStyle.module.css';
import {redirect} from "react-router-dom";
import {useLocation} from 'react-router-dom';


function Home(){

    const location = useLocation();

    return (
        <div className={style.loginContainer}>
                <p>Welcome to UWConnect '{location.state.name}' </p>   
                <p>This is your home page</p>
        </div>
    );


}

export default Home;