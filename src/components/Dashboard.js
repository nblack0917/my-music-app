
import React, { useState, useEffect } from 'react'
import OnlineMode from './OnlineMode'
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';

function Dashboard() {
    let [ notifications, setNotifications ] = useState([]);
    const [ onlineState, setOnlineState ] = useState(true);
    // const [ volumeState, setVolumeState ] = useState(20);
    // const [ qualityState, setQualityState ] = useState(2);

    const handleOnlineState = () => {
        setOnlineState(!onlineState)
        console.log("state changed")
    }

    const MessageOne = "Your application is offline. You won't be able to share or stream music to other devices."
    const MessageTwo = "Your application is offline. You won't be able to share or stream music to other devices."

    useEffect(() => {
        // if (!onlineState) {
        //    
        
        // }
    })

    return (
        <div className="dashboardContainer">
            <h2 style={{color: "gray", fontSize: "32px"}}>Welcome User!</h2>
            <div className="dashboardCards">
                <OnlineMode handleOnlineState={e => handleOnlineState(e)}/>
                <MasterVolume />
                <SoundQuality />
            </div>
            <h3 style={{ fontWeight: "800", fontSize: "24px"}}>System Notifications:</h3>
        </div>
    )
}

export default Dashboard
