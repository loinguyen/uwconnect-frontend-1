import React, {useState} from "react";
import style from '../styles/formStyle.module.css';
import {redirect} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import UserCard from "./userCard";
import cat1 from '../images/cat1.jpeg';
import cat2 from '../images/cat2.jpeg';
import dog1 from '../images/dog1.jpeg';
import dog2 from '../images/dog2.jpeg';

var jsonstring = 
[{ "email": "user@example.com", "username": "Johnny Depp 1", "gender": "string","faculty": "string","program": "string","year": 0,"courses": ["ECE-650"],"tags": ["teaefae","vhsroshsh1"],"bio": "string","id": "string"},
{ "email": "user@example.com", "username": "Johnny Depp 2", "gender": "string","faculty": "string","program": "string","year": 0,"courses": ["ECE-651"],"tags": ["tesrgs","videsbss"],"bio": "string","id": "string"},
{ "email": "user@example.com", "username": "Johnny Depp 3", "gender": "string","faculty": "string","program": "string","year": 0,"courses": ["ECE-652"],"tags": ["taeeas","viasfbe"],"bio": "string","id": "string"},
{ "email": "user@example.com", "username": "Johnny Depp 4", "gender": "string","faculty": "string","program": "string","year": 0,"courses": ["ECE-653"],"tags": ["taets","vidsfbeae"],"bio": "string","id": "string"},
{ "email": "user@example.com", "username": "Johnny Depp 5", "gender": "string","faculty": "string","program": "string","year": 0,"courses": ["ECE-654"],"tags": ["taettnis","vsbsdme"],"bio": "string","id": "string"},
{ "email": "user@example.com", "username": "Johnny Depp 6", "gender": "string","faculty": "string","program": "string","year": 0,"courses": ["ECE-655"],"tags": ["tesets","vixbsdge"],"bio": "string","id": "string"},
{ "email": "user@example.com", "username": "Johnny Depp 7", "gender": "string","faculty": "string","program": "string","year": 0,"courses": ["ECE-656"],"tags": ["tsdgcvs","vhjsgrame"],"bio": "string","id": "string"},
{ "email": "user@example.com", "username": "Johnny Depp 8", "gender": "string","faculty": "string","program": "string","year": 0,"courses": ["ECE-657"],"tags": ["tsgis","vixfhe"],"bio": "string","id": "string"},
{ "email": "user@example.com", "username": "Johnny Depp 9", "gender": "string","faculty": "string","program": "string","year": 0,"courses": ["ECE-658"],"tags": ["txggis","vidxfbxe"],"bio": "string","id": "string"},
{ "email": "user@example.com", "username": "Johnny Depp 10", "gender": "string","faculty": "string","program": "string","year": 0,"courses": ["ECE-659"],"tags": ["texfbbgis","vixfg"],"bio": "string","id": "string"}                

];

function GetRecommendation(){

    // var jsonparse = JSON.parse(jsonstring);
    const Recommendation = jsonstring.map((data) => {
                            return (
                                <div style={{display : "inline"}}>
                                <UserCard img = {cat1} name = {data.username} course = {data.courses[0]} hobby1 = {data.tags[0]} hobby2 = {data.tags[1]}/>
                                </div>
                            )})

    return (
        <div style={{width:"auto" , height: 470, overflow: "auto" }}>
        <div style={{width:1100 , height: "auto", overflow: "auto" , columns : 2, display:"flex", flexWrap: "wrap"}}>
            {
                Recommendation
                
            }
        </div>
        </div>
        
        // <div><UserCard img = {cat1} name = "Johnny Depp" course = "Test Course 123" hobby1 = "Test Hobby 123" hobby2 = "Test Hobby 456"/></div>
    )


}

export default GetRecommendation;