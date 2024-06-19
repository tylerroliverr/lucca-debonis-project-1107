"use client";
import { useState, useEffect, useRef } from 'react';
import HoverLink from '../components/hoverLink';
import Vimeo from '@vimeo/player';
import getReelData from '../components/getReelData';

export default function Reel() {

    const [reelData, setReelData] = useState([]);
    const [showVideo, setShowVideo] = useState(false);
    const [showWatchAgain, setShowWatchAgain] = useState(false);
    const [isMute, setIsMute] = useState(true);
    const [isMutedText, setIsMutedText] = useState(false);
    const iframeRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getReelData();
            setReelData(data);
        };

        fetchData();
    }, []);

    const handleWatchClick = () => {
        setShowVideo(true);
        setShowWatchAgain(false);
    };

    const handleWatchAgainClick = () => {
        setShowVideo(true);
        setShowWatchAgain(false);
    };

    const attachUnmuteListener = () => {
        document.addEventListener('click', unmuteVideo);
    };

    const unmuteVideo = () => {
        if (playerRef.current) {
            playerRef.current.setVolume(0.7).catch((error) => {
                console.error("Error setting volume:", error);
            });
        }
        setIsMute(!isMute);
        setIsMutedText(false);
    };

    useEffect(() => {
        if (iframeRef.current && showVideo) {
            playerRef.current = new Vimeo(iframeRef.current);
            playerRef.current.on('loaded', () => {
                playerRef.current.play().then(() => {
                    playerRef.current.setVolume(0); // Ensure volume is initially set to 0
                    attachUnmuteListener();
                    setIsMutedText(true);
                }).catch((error) => {
                    console.error("Error playing video:", error);
                });
            });
            playerRef.current.on('ended', () => {
                setShowVideo(false);
                setShowWatchAgain(true);
            });
        }

        return () => {
            document.removeEventListener('click', unmuteVideo);
        };
    }, [showVideo]);

    const handleCloseReelClick = () => {
        setShowVideo(false);
        setShowWatchAgain(false);
    }

    return (
        <div className={showWatchAgain ? 'lowerOpacity' : ''}>
            <HoverLink />
            {showVideo ? (
                <>
                    <div className='projectContainer'>
                        <div className='projectImageContainer'>
                            <div className="reelVideoWrapper">
                                <iframe
                                    ref={iframeRef}
                                    title="vimeo-player"
                                    src={`https://player.vimeo.com/video/961963352?h=bc259af20d&muted=1&loop=0&title=0&byline=0&portrait=0&controls=0&quality=1080p`}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                ></iframe>
                                <div className='overlayCursor'>
                                    {isMutedText ? (
                                        <p>click to unmute</p>
                                    ) : (null)}
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ) : showWatchAgain ? (

                <div className="playReelAgain">
                    <span className='closeReel' onClick={handleCloseReelClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" /></svg>
                    </span>
                    <p className="link" onClick={handleWatchAgainClick}>
                        Watch Again
                    </p>
                </div>
            ) : (
                <>
                    <div className='playReel'>
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
            <div className='rightsContainer reelrights'>
                <p>All Rights Reserved ©</p>
            </div>
            <div className='rightsContainerMobile reelrights'>
                <p>All Rights Reserved ©</p>
            </div>
        </div>
    )
}