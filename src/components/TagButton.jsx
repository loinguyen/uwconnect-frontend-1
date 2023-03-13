import React, { useState} from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../styles/TagButton.css'


const TagButton = (props) => {
    const onUpdateValue = props.onUpdateValue
    const selected = props.selected
    const keyValue = props.keyValue
    const label = props.label
    const handleChecked = (e) => {
        onUpdateValue(keyValue, e.currentTarget.checked)
    }
    
    return (
        <>
            <ToggleButton
                id={"toggle-check-" +keyValue}
                key={"toggle-check-" +keyValue}
                className="mb-2 me-1"
                type="checkbox"
                variant="outline-primary"
                checked={selected}
                value={keyValue}
                onChange={handleChecked}
            >
                {label}
            </ToggleButton>
        </>
    );
}

export default TagButton