'use client';
import { useRef, useState, useEffect } from 'react';

export default function MusicPlayer({ tracks }) {

    const audioRef = useRef(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.3);

    const playPauseHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const skipHandler = (forwards = true) => {
        setCurrentTrackIndex((prevIndex) => {
            let nextIndex = forwards ? prevIndex + 1 : prevIndex - 1;
            if (nextIndex < 0) nextIndex = tracks.length - 1;
            if (nextIndex >= tracks.length) nextIndex = 0;
            return nextIndex;
        });
    };

    const rewindHandler = () => {
        audioRef.current.currentTime = 0;
        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
      };
    
      useEffect(() => {
        const audio = audioRef.current;
    
        const updateProgress = () => {
          setProgress((audio.currentTime / audio.duration) * 100);
        };
    
        const handleEnded = () => {
          skipHandler(true); // Move to the next track when the current one ends
        };
    
        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnded);
    
        return () => {
          audio.removeEventListener('timeupdate', updateProgress);
          audio.removeEventListener('ended', handleEnded);
        };
      }, [currentTrackIndex, isPlaying]);
    
      useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        }
      }, [currentTrackIndex, isPlaying]);
    
      useEffect(() => {
        audioRef.current.volume = volume;
      }, [volume]);

    return (
        <>
            <div className="soundOnContainer">
                <p className="navItem">Radio {isPlaying ? 'On' : 'Off'} </p>
                <div className="controls">

                    <audio ref={audioRef} src={tracks[currentTrackIndex].url} />

                    <svg onClick={() => skipHandler(false)}
                        className="svgControl rewind" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#fff" stroke="none">
                            <path d="M1445 3523 c-786 -524 -1431 -957 -1433 -961 -1 -5 643 -439 1433
                                -965 l1435 -957 2 745 3 745 1118 -745 1117 -745 0 1920 0 1920 -1117 -745
                                -1118 -745 -5 743 -5 744 -1430 -954z"
                            />
                        </g>
                    </svg>

                    <svg onClick={playPauseHandler}
                        className="svgControl" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        {!isPlaying ?

                            <g className='play' transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#fff" stroke="none">
                                <path d="M370 2564 c0 -1405 3 -2554 7 -2554 10 0 4372 2544 4372 2550 0 3
                                -985 580 -2189 1282 l-2190 1276 0 -2554z"
                                />
                            </g>

                            :

                            <g className='pause' transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#fff" stroke="none">
                                <path d="M27 5093 c-4 -3 -7 -1151 -7 -2550 l0 -2543 1070 0 1070 0 -2 2548
                                -3 2547 -1061 3 c-583 1 -1064 -1 -1067 -5z"
                                />
                                <path d="M3100 2550 l0 -2550 1010 0 1010 0 0 2550 0 2550 -1010 0 -1010 0 0
                                -2550z"
                                />
                            </g>
                        }

                    </svg>

                    <svg onClick={() => skipHandler(true)}
                        className="svgControl skip" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#fff" stroke="none">
                            <path d="M0 2560 l0 -1920 1117 745 1118 745 3 -745 2 -745 1435 957 c789 526
                                1435 959 1435 963 0 4 -646 437 -1435 963 l-1435 957 -2 -745 -3 -745 -1117
                                745 -1118 745 0 -1920z"
                            />
                        </g>
                    </svg>

                </div>
                <div className='progressBarContainer'>
                    <div className='progressBar' style={{ width: `${progress}%` }}></div>
                </div>
                {/* <div className='volumeControlContainer'>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className='volumeSlider'
                    />
                </div> */}
            </div>
        </>
    )
}