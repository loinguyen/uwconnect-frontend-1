import { CometChat } from "@cometchat-pro/chat";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CometChatUI, CometChatMessages, CometChatConversationList, CometChatUserList } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src";
import { Button } from "antd";
import { WeiboCircleOutlined } from '@ant-design/icons'
import GetRecommendation from '../../components/Recommendation'
import '../../styles/home.css'

const Home = () => {
    const [uid, setUid] = useState(null);
    const [conversationIdMap, setConversationIdMap] = useState(new Map());
    const [openConnection, setOpenConnection] = useState(false);
    
    let appID = process.env.REACT_APP_COMETCHAT_APPID;
    const region = "us";
    let authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY;

    useEffect(() => {
        console.log("trying to init cometchat", "q32ye")

            const appSetting = new CometChat.AppSettingsBuilder()
                .subscribePresenceForAllUsers()
                .setRegion(region)
                .build();
            CometChat.init(appID, appSetting).then(
                () => {
                    console.log("Initialization completed successfully");
                    CometChat.login("q32ye", authKey);
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

            setUid("q32ye");
    })

    const handleConversationSelect = (conversationWith, conversationType) => {
        for (let [key, value] of conversationIdMap) { 
            conversationIdMap.set(key, false)
        }
        setConversationIdMap(new Map(conversationIdMap.set(conversationWith.uid, true)))
    }

    const openConnectionPage = () => {
        setOpenConnection(!openConnection)
    }

    return (
        <div className="position-fixed" style={{inset: '0', top: '5vh'}}>
            {uid && 
                <div className="col-12 d-flex" style={{height: '95vh'}}>
                    <div className="col-3 h-100 align-self-end" style={{backgroundColor: 'rgba(255,255,255,0.1)'}}>
                        <div className="m-auto d-flex align-item-center pb-1" style={{height: '80px'}}>
                            <Button type="primary" className="connect-me-button h-100 m-auto w-100" icon={<WeiboCircleOutlined style={{ fontSize: '150%'}} />} 
                            onClick={openConnectionPage}>
                                    Connect Me
                            </Button>
                        </div>
                        {/* <CometChatConversationList onItemClick={handleConversationSelect}/> */}
                        <CometChatUserList friendsOnly={true} onItemClick={handleConversationSelect}/>
                    </div>
                    { !openConnection &&
                        [...conversationIdMap.keys()].map(k => (
                            conversationIdMap.get(k) && <div className="col-9 h-100">
                                <CometChatMessages chatWithUser={k}/>
                            </div>
                        ))
                        
                    }
                    { openConnection && 
                        <GetRecommendation />
                    }
                    
                </div>
            }
             
         </div>
    );

    }


export default Home;