import React, { useState, useEffect } from "react";
import { TagPicker } from 'rsuite';
//https://stackoverflow.com/questions/63939772/rsuite-not-working-properly-how-to-fix-reactjs
import "rsuite/dist/rsuite.min.css";

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

function GetProfileHobbies() {

    //Use `useState` to declare variables and setters to update variable

    // hobbiesList: All hobbies List read from the database (the options for the picker)
    const [hobbiesList, setHobbiesList] = useState([]);
    // userHobbies: Has to be read from the database and set as user default value
    const [userHobbies, setUserHobbies] = useState([]);

    //Arrow function to parse data into dict
    const ParseDataForTagPicker = (data) => data.map(item => ({label: item, value: item}));
    
    const AddItemToUserList = (item) => setUserHobbies([...userHobbies, item]);
    const HandleSelect = (value, item, event) => {
        setUserHobbies(value);
        //console.log(value);
        //console.log(userHobbies); //Why userHobbies doesn't match with value?
        //^ https://stackoverflow.com/questions/41446560/react-setstate-not-updating-state
    };

    //Fetch the API from the backend to get the hobbies list
    //UseEffect is a safe way to update the variable `hobbiesList`
    useEffect(() => {
        //fetch(process.env.REACT_APP_API_LINK + '/user/validate')
        fetch('http://127.0.0.1:5000/hobbies')
          .then(response => response.json()) //Arrow function to turn fetched data into json
          .then(json => json["hobbies"]) //Arrow function to get hobbies
          .then(array_dup => [...new Set(array_dup)]) //Arrow function to remove duplicates if any
          .then(array => setHobbiesList(array)) //Arrow function to set the variable
          .catch(e => console.log('Error: ', e));
      }, []);
    //console.log(hobbiesList);

    //https://rsuitejs.com/components/tag-picker/
    return (
        <div className="profileHobbiesTag">
            <h1>My Hobbies</h1>
            <TagPicker 
                data={ParseDataForTagPicker(hobbiesList)} 
                defaultValue={userHobbies}
                onSelect={HandleSelect}
                size="lg"
                block
                placeholder="Hobbies"
                style={{width: 300, color: '#999', display: 'block', marginBottom: 0}} //color #999 for black text
                menuStyle={{ width: 300 }}
            />
            <hr></hr>

            <h4>Dummy guy Hobbies (Viewing other person hobbies)</h4>
            <TagPicker
                //Quick demo on how would it look like on other people's hobby profile
                plaintext
                data={ParseDataForTagPicker(hobbiesList)}
                defaultValue={["Tennis", "Reading"]}
                //defaultValue={userHobbies} //Has to match with data
                style={{ width: 300 }}
                menuStyle={{ width: 300 }}
            />
        </div>
    );
}

export default GetProfileHobbies;