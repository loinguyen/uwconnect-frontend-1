import { async } from "q";
import React, { useState, useEffect } from "react";
import TagButton from '../../components/TagButton'
import style from '../../styles/formStyle.module.css';

/*
When user login, if user profile is not exist then redirect user to user profile page. user profile page included 3 screen:

=======================================================
The 3rd screen: <= This Part
Custom tag: all the optional tag that user can select.
=======================================================

*/

function GetProfileHobbies() {

    //Use `useState` to declare variables and setters to update variable
    // hobbiesList: All hobbies List read from the database (the options for the picker)
    const [hobbiesList, setHobbiesList] = useState([]);
    // userHobbies: Has to be read from the database and set as user default value
    const [userHobbies, setUserHobbies] = useState([]);

    //Arrow function to parse data into dict
    const parseDataForTagPicker = (data) => {
        const dataList = data.map(item => ({label: item, value: item}))
        setHobbiesList(dataList)
    };

    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked
          ? [...userHobbies, tag]
          : userHobbies.filter((t) => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setUserHobbies(nextSelectedTags);
      };

    //Fetch the API from the backend to get the hobbies list
    //UseEffect is a safe way to update the variable `hobbiesList`
    useEffect(() => {
        fetch(process.env.REACT_APP_API_LINK + '/hobbies')
        //fetch('http://127.0.0.1:5000/hobbies')
          .then(response => response.json()) //Arrow function to turn fetched data into json
          .then(json => json["hobbies"]) //Arrow function to get hobbies
          .then(array_dup => [...new Set(array_dup)]) //Arrow function to remove duplicates if any
          .then(array => parseDataForTagPicker(array)) //Arrow function to set the variable
          .catch(e => console.log('Error: ', e));
      }, []);

    //https://rsuitejs.com/components/tag-picker/
    return (
        <div className={style.loginContainer}>
            <div className="profileHobbiesTag">
                <h1>My Hobbies</h1>
                <div className="mw-100" style={{overflow:'auto', maxHeight: '31vh'}}>
                {
                    hobbiesList.map((item) => (
                        <TagButton
                            key={item.value}
                            keyValue={item.value}
                            label={item.label} 
                            selected={userHobbies.includes(item.value)}
                            onUpdateValue={handleChange}
                        />
                    ))
                }
                </div>
            </div>
        </div>
    );
}

export default GetProfileHobbies;