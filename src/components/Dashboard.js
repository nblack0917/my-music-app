
import React from 'react'
import OnlineMode from './OnlineMode'
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';

function Dashboard() {
    return (
        <div className="dashboardContainer">
            <h2 style={{color: "gray", fontSize: "32px"}}>Welcome User!</h2>
            <div className="dashboardCards">
                <OnlineMode />
                <MasterVolume />
                <SoundQuality />
            </div>
            <h3 style={{ fontWeight: "800", fontSize: "24px"}}>System Notifications:</h3>
        </div>
    )
}

export default Dashboard
