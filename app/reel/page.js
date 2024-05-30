import HoverLink from '../components/hoverLink';

export default function Reel() {

    return (
        <>
        <HoverLink/>
            <div className="playReel">
                <p className="link">Watch Reel</p>
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