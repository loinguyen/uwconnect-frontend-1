import React, {useState} from "react";
import '../../styles/formStyle.module.css';
import {redirect} from "react-router-dom";
import {useLocation} from 'react-router-dom';


// type UserFormProps = {
//     customtag: string
    
// }

function Form3({customtag}){


    return (
       <div>
            <label>Custom Tag</label>
            <input  type="text" />

       </div>
       

    )


}

export default Form3;