"use client";
import { useState } from 'react';
import getReelData from '../components/getReelData';
import HoverLink from '../components/hoverLink';

export default async function Reel() {

    const reelData = getReelData();


    const [showVideo, setShowVideo] = useState(false);

    const handleWatchClick = () => {
        setShowVideo(true);
    };

    return (
        <>
        <HoverLink />
            {showVideo ? (
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
        )}
            <div className='rightsContainerMobile'>
                <p>All Rights Reserved ©</p>
            </div>
        </>
    )
}