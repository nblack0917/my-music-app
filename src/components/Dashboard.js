import React from 'react'
import OnlineMode from './OnlineMode'

function Dashboard() {
    return (
        <div className="dashboardContainer">
            <h2 style={{color: "gray", fontSize: "32px"}}>Welcome User!</h2>
            <div className="dashboardCards">
                <OnlineMode />
            </div>
            <h3 style={{ fontWeight: "800", fontSize: "24px"}}>Sytem Notifications:</h3>
        </div>
    )
}

export default Dashboard

