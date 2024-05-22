"use client";
import React, { useState, useEffect } from 'react';

export default function TimeAndLocation() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const tick = () => {
            let now = new Date();
            let options = {
                timeZone: 'Australia/Sydney',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false,
            };

            let formatter = new Intl.DateTimeFormat('en-AU', options);
            let formattedTime = formatter.format(now);
            setTime(`AEST ${formattedTime}`);
        };

        // Update the time immediately on component mount
        tick();

        // Set up an interval to update the time every second
        const interval = setInterval(tick, 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="timeAndLocationContainer">
                <p className="timeText">28.0167° S, 153.4000° E</p>
                <p className="timeText">{time}</p>
            </div>
        </>
    );
}
