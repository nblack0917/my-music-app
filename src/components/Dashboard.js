
import React, { Component, useState, useEffect } from 'react'
import OnlineMode from './OnlineMode'
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';
import { render } from '@testing-library/react';

class Dashboard extends Component {
    constructor() {
        super();

        this.state={
            notifications: [],
            onlineState: true,
        }
    }
    
    handleOnlineState = () => {
        const messageOne = "Your application is offline. You won't be able to share or stream music to other devices."
        this.setState({onlineState: !this.state.onlineState})
        console.log("state changed")
        if(this.state.onlineState === true) {
            this.setState({notifications: [...this.state.notifications].concat([messageOne])})
        }
    }

    // componentDidUpdate() {
    //     return (
    //         <div className="dashboardContainer">
    //             <h2 style={{color: "gray", fontSize: "32px"}}>Welcome User!</h2>
    //             <div className="dashboardCards">
    //                 <OnlineMode handleOnlineState={e => this.handleOnlineState(e)}/>
    //                 <MasterVolume />
    //                 <SoundQuality />
    //             </div>
    //             <h3 style={{ fontWeight: "800", fontSize: "24px"}}>System Notifications:</h3>
    //             <h3>Hello</h3>
    //             {/* <ul>
    //                 <li> {this.state.notifications.map((noti, index) => {
    //                     return noti
    //                     })}
    //                 </li>
    //             </ul> */}
    //         </div>
    //     )
    // }

    render() {
        return (
            <div className="dashboardContainer">
                <h2 style={{color: "gray", fontSize: "32px"}}>Welcome User!</h2>
                <div className="dashboardCards">
                    <OnlineMode handleOnlineState={e => this.handleOnlineState(e)}/>
                    <MasterVolume />
                    <SoundQuality />
                </div>
                <h3 style={{ fontWeight: "800", fontSize: "24px"}}>System Notifications:</h3>
            </div>
        )
    }
}

export default Dashboard
