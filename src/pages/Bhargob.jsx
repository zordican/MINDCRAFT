import { useState } from 'react';


const XPProgressBar = () => {
    const [currentXP, setCurrentXP] = useState(0);
    const xpPerTask = 10;

    const earnXP = () => {
        // Simulate earning XP
        setCurrentXP(prevXP => prevXP + xpPerTask);
    };

    const progressPercentage = (currentXP / 100) * 100; // Assuming 100 XP is the maximum

    return (
        <div className="xp-progress-container">
            <div className="xp-progress-bar" style={{ width: `${progressPercentage}%` }}></div>
            <button onClick={earnXP}>Earn XP</button>
        </div>
    );
};

export default XPProgressBar;

