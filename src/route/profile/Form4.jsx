import React, {useState} from "react";
import '../../styles/formStyle.module.css';
import {redirect} from "react-router-dom";
import {useLocation} from 'react-router-dom';


// type UserFormProps = {
//     label1: string
//     label2: string
// }

function Form4({label1,label2}){


    return (
       <div>
            <label>Label1</label>
            <input  type="text" />
            <label>Label2</label>
            <input  type="text" />
           

       </div>
       

    )


}

export default Form4;