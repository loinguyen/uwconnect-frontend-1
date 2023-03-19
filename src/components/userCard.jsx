import React, { useState } from "react";
import { MessageTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import "../styles/userCard.css";
import Badge from 'react-bootstrap/Badge';

function UserCard(props){
    const [visibility, setVisibility] = useState(true);

    function removeSelf(){
        setVisibility (false);
    }

    return (
        <div>
        {visibility && (
        <div className="cardContainer">
            <div className="cardImg"><img  src = {props.img} style={{height : "100%" , borderRadius: "50%"}} ></img></div>
            <div className = "cardName"><p style={{fontSize: 24}} >{props.name}</p></div>
            <div className="cardButton1"><button className="accept"  ><MessageTwoTone twoToneColor={"#20f50c"} /></button></div>
            <div className="cardButton2"><button className="decline" onClick={removeSelf} ><CloseCircleTwoTone twoToneColor={"red"} /></button></div>
            <div className = "cardPad">
                <div className="tagList">
                <h5 style={{display : "inline"}}><Badge bg = "warning" text = "dark">{props.course} </Badge></h5>{' '}
                <h5 style={{display : "inline"}}> <Badge bg = "warning" text = "dark">{props.hobby1}</Badge></h5>{' '}
                <h5 style={{display : "inline"}}><Badge bg = "warning" text = "dark">{props.hobby2}</Badge></h5>
                </div>
            </div>
        </div> )
        }
        </div>

    );

}

export default UserCard;