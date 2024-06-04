import getReelData from '../components/getReelData';
import HoverLink from '../components/hoverLink';

export default async function Reel() {

    const reelData = getReelData();


    return (
        <>
            <HoverLink />
            <div className="videoWrapper">
                <iframe
                    src={"https://player.vimeo.com/video/953370934?h=478beb15a9&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0&background=1"}
                    className="projectVideo"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                ></iframe>
            </div>

            <div className="playReel">
                <button className="link">Watch Reel</button>
            </div>

            <div className="playReelMobile">
                <div className='mobileExpDiv'>
                    <p className='mobileExp'>For a better mobile experience</p>
                </div>
                <div className='turnDiv'>
                    <p className="turnScreen">turn your screen</p>
                </div>
                <div className='watchDiv'>
                    <p className='watchReel'>Watch 1107<span className='trademark'>®</span> Reel</p>
                </div>
            </div>
            <div className='rightsContainerMobile'>
                <p>All Rights Reserved ©</p>
            </div>
        </>
    )
}