import React from 'react';
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';

function Dashboard() {
    return (
        <div>
            <MasterVolume />
            <SoundQuality />
        </div>
    )
}

export default Dashboard
