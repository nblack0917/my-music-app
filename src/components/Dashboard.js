
import React, { Component } from 'react'
import OnlineMode from './OnlineMode'
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state={
            notifications: [],
            onlineState: true,
            volumeState: 20,
            qualityState: 2,
        }
    }

    handleOnlineState = (currentOnline) => {
        // const messageOne = "Your application is offline. You won't be able to share or stream music to other devices."
        this.setState({onlineState: !this.state.onlineState})
        console.log("state 1 changed to ", currentOnline)
        if(currentOnline === false) {
            // this.setState({notifications: [...this.state.notifications].concat([messageOne])})
            this.updateNotifications(1)
        }
        // console.log(this.state.onlineState)
    }
    
    handleVolumeState = (volume) => {
            const messageTwo = "Listening to music at a high volume could cause long-term hearing loss."
        // console.log(volume)
        this.setState({ volumeState: volume })
        console.log("state 2 changed to: ", volume)
            if(volume > 70 && volume < 110) {
                // this.setState({notifications: [...this.state.notifications].concat([messageTwo])})
                this.updateNotifications(2)
            } else if (volume === 110) {
                this.updateNotifications(4)
            }
    }
    
    handleQualityState = (qualityLevel) => {
        // let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
        // const messageThree = "Music quality is degraded. Increase quality if your connection allows it."
        console.log(qualityLevel)
        this.setState({ qualityState: qualityLevel })
        console.log("state 3 changed to: ", qualityLevel)
        if(qualityLevel === 1) {
                // this.setState({notifications: [...this.state.notifications].concat([messageThree])})
                this.updateNotifications(3)
            }
    }

    updateNotifications = (message) => {
        let notiMessage;
        let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
        const messageOne = "Your application is offline. You won't be able to share or stream music to other devices."
        const messageTwo = "Listening to music at a high volume could cause long-term hearing loss."
        const messageThree = "Music quality is degraded. Increase quality if your connection allows it."
        const messageFour = "Well, it's one louder, isn't it? It's not ten. You see, most blokes, you know, will be playing at ten. These go to eleven"
        if (message === 1) {
            notiMessage = `${hour}:${minute}:${second} - ${messageOne}`
        } else if(message === 2) {
            notiMessage = `${hour}:${minute}:${second} - ${messageTwo}`
        } else if(message === 3) {
            notiMessage = `${hour}:${minute}:${second} - ${messageThree}`
        }else if(message === 4) {
            notiMessage = `${hour}:${minute}:${second} - ${messageFour}`
        }
        this.setState({notifications: [...this.state.notifications].concat([notiMessage])})
    }

    componentDidUpdate() {
        console.log("new onlineState: ", this.state.onlineState)
        console.log("new volumeState: ",this.state.volumeState)
        console.log("new qualityState: ",this.state.qualityState)
        // const messageOne = "Your application is offline. You won't be able to share or stream music to other devices."
        // if(this.prevState.onlineState === true) {
        //     this.setState({notifications: [...this.state.notifications].concat([messageOne])})
        // }
    }

    render() {
        return (
            <div className="dashboardContainer">
                <h2 style={{color: "gray", fontSize: "32px"}}>Welcome {this.props.name}!</h2>
                <div className="dashboardCards">
                    <OnlineMode handleOnlineState={e => this.handleOnlineState(e)} />
                    <MasterVolume handleVolumeState={e => this.handleVolumeState(e)} />
                    <SoundQuality handleQualityState={e => this.handleQualityState(e)}/>
                </div>
                <h3 style={{ fontWeight: "800", fontSize: "24px"}}>System Notifications:</h3>
                <ul style={{ listStyle: "none"}}>
                    {this.state.notifications.map(notif => {
                        return <li> {notif} </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Dashboard
