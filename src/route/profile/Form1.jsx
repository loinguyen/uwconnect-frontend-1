import React, {useState} from "react";
import '../../styles/formStyle.module.css';
import {redirect} from "react-router-dom";
import {useLocation} from 'react-router-dom';


// type UserFormProps = {
//     firstName: string
//     lastName: string
//     age: string
// }

function Form1({firstName, lastName,age}){


    return (
       <div>
            <label>First Name</label>
            <input autoFocus type="text" />
            <label>Last Name</label>
            <input type="text" />
            <label>Age</label>
            <input min={1} type="number" />

       </div>
       

    )


}

export default Form1;