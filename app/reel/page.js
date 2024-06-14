"use client";
import { useState } from 'react';
import HoverLink from '../components/hoverLink';
import Marquee from '../components/marquee';

export default function Reel() {

    const [showVideo, setShowVideo] = useState(false);

    const handleWatchClick = () => {
        setShowVideo(true);
    };

    return (
        <>
        <HoverLink />
        <Marquee />
            {/* {showVideo ? (
                <div className='projectContainer'>
                <div className='projectImageContainer'>
                <div className="videoWrapper">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/953370934?h=478beb15a9"    allowfullscreen></iframe>
                </div>
                </div>
                </div>
            ) : (
<>
            <div className="playReel">
                <p className="link" onClick={handleWatchClick}>
                    Watch Reel
                </p>
            </div>

            <div className="playReelMobile">
                <div className='mobileExpDiv'>
                    <p className='mobileExp'>For a better mobile experience</p>
                </div>
                <div className='turnDiv'>
                    <p className="turnScreen">turn your screen</p>
                </div>
                <div className='watchDiv'>
                    <p className='watchReel' onClick={handleWatchClick}>Watch 1107<span className='trademark'>®</span> Reel</p>
                </div>
            </div>
            </>
        )} */}
        <>
            <div className="playReel">
                <p className="link">
                    Coming Soon
                </p>
            </div>

            <div className="playReelMobile">
                <div className='watchDiv'>
                    <p className='watchReel'>Coming Soon</p>
                </div>
            </div>
            </>
            <div className='rightsContainerMobile'>
                <p>All Rights Reserved ©</p>
            </div>
        </>
    )
}