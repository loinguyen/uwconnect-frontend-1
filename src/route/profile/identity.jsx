import React, { useState } from "react";
import Select from 'react-select';
import style from '../../styles/formStyle.module.css';
import cat1 from '../../images/cat1.jpeg';
import cat2 from '../../images/cat2.jpeg';
import dog1 from '../../images/dog1.jpeg';
import dog2 from '../../images/dog2.jpeg';


//https://stackoverflow.com/questions/63939772/rsuite-not-working-properly-how-to-fix-reactjs

/*
When user login, if user profile is not exist then redirect user to user profile page. user profile page included 3 screen:

The 1st screen: 
display name: only allow input alphabet character
select profile picture: user can choose to user a profile pictures from list of 6 profile picture pre-set gender

The 2nd screen:
Program: user can choose between: Undergraduate, Graduated
Admission year: user can choose the year that user joined the program
display a list of available faculties such that: ECE,CS, MSCI…
Currently Taking Course: user can pick the class that they currently joined.

=======================================================
The 3rd screen: <= This Part
Custom tag: all the optional tag that user can select.
=======================================================

The 4th screen:
A check box as user to make your profile public
A check box as user accept the user agreement.
A submit button to submit data to create user Profile
*/

function GetIdentity() {

    //Use `useState` to declare variables and setters to update variable

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    //Make sure to check gender's value when submitting since it could be empty
    const [gender, setGender] = useState("");
    const [selectedGender, setSelectedGender] = useState(null);
    const [profilePic, setProfilePic] = useState("");
    const [selectedProfilePic, setSelectedProfilePic] = useState(null);
    const [nameError, setNameError] = useState("");

    const genders = [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' }
    ];

    const profilePics = [
        { value: 'dog1', label: <div><img src={dog1} alt="" height="100px" width="100px"/></div>},
        { value: 'dog2', label: <div><img src={dog2} alt="" height="100px" width="100px"/></div>},   
        { value: 'cat1', label: <div><img src={cat1} alt="" height="100px" width="100px"/></div>},
        { value: 'cat2', label: <div><img src={cat2} alt="" height="100px" width="100px"/></div>}
 ];

    function UpdateFirstName(event) {
        setFName(event.target.value);

        if (/^(?=.*[a-zA-Z])(?=.{1,}).*$/.test(event.target.value) === false || /^(?=.*[a-zA-Z])(?=.{1,}).*$/.test(lName) === false)
        {
            setNameError ("First and last names cannot be empty and can only be alphabet letters");
        }
        else {
            setNameError ("");
        }
    }

    function UpdateLastName(event) {
        setLName(event.target.value);

        if (/^(?=.*[a-zA-Z])(?=.{1,}).*$/.test(fName) === false || /^(?=.*[a-zA-Z])(?=.{1,}).*$/.test(event.target.value) === false)
        {
            setNameError ("First and last names cannot be empty and can only be alphabet letters");
        }
        else {
            setNameError ("");
        }
    }

    function handleGenderChange(e) {
        setSelectedGender(e);
        setGender(e.value);
    }

    function handleProfilePicChange(e) {
        setSelectedProfilePic(e);
        setProfilePic(e.value);
    }

    return (
        <div className={style.loginContainer}>
            <h1>Profile</h1>
            <Select
                className={style.selectionBox}
                styles={{
                    indicatorsContainer: (baseStyles, state) => ({
                        ...baseStyles,
                        height: '100px',
                    }),
                }}
                placeholder="--Select Profile Picture--"
                value={selectedProfilePic}
                options={profilePics}
                onChange={handleProfilePicChange}
            />
            <input type="text" placeholder="First Name" onChange={UpdateFirstName}/>
            <input type="text" placeholder="Last Name" onChange={UpdateLastName}/>
            <p className={style.errorMsg}>{nameError}</p>
            <Select
                className={style.selectionBox} 
                styles={{
                    indicatorsContainer: (baseStyles, state) => ({
                        ...baseStyles,
                        height: 45,
                    }),
                }}
                placeholder="--Select Gender--"
                value={selectedGender}
                options={genders}
                onChange={handleGenderChange}
            />
        </div>
    );
}

export default GetIdentity;