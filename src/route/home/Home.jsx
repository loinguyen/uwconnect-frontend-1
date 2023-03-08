import { CometChat } from "@cometchat-pro/chat";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CometChatUI } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src";


const Home = () => {
    const [uid, setUid] = useState(null);

    const appID = "2341304f6c94b6b0";
    const region = "us";
    const authKey = "62a7f4ed9a36e08fe7c0c71c5435fb4fea1e452b";

    useEffect(() =>{
        fetch('http://localhost:5000/user/who', { credentials: 'include' })
        .then(response => {
            if (response.status === 403) {
                window.location.href = '/';
            }
            return response.json()
        })
        .then(response => {

            console.log("trying to init cometchat", response.email.split('@')[0])

            const appSetting = new CometChat.AppSettingsBuilder()
                .subscribePresenceForAllUsers()
                .setRegion(region)
                .build();
            CometChat.init(appID, appSetting).then(
                () => {
                    console.log("Initialization completed successfully");
                    CometChat.login(response.email.split('@')[0], authKey);
                },
                (error) => {
                    console.log("Initialization failed with error:", error);
                    // Check the reason for error and take appropriate action.
                }
            ).then(
                (user) => {
                    console.log("Login Successful:", { user });
                },
                (error) => {
                    console.log("Login failed with exception:", { error });
                }
            )

            setUid(response.email.split('@')[0]);

        });
    })
    
    return (
        <div style={{ width: "100wh", height: "100vh" }}>
            {/* {console.log('rerendered')} */}
            {uid && <CometChatUI />}
        </div>
    );

    }


export default Home;