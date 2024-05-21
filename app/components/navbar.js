import Link from "next/link";
import MusicPlayer from "./musicPlayer";

export default function Navbar() {

    const tracks = [
        { name: 'track 1', url: '/music/1107_IntroSong_AiVoice.mp3' },
        { name: 'track 2', url: '/music/13_(Original Mix).mp3' },
        { name: 'track 3', url: '/music/Ageispolis_(Original Mix).mp3' },
        { name: 'track 4', url: '/music/Delphium_(Original Mix).mp3' },
        { name: 'track 5', url: '/music/Urban Myth_(Original Mix).mp3' }
    ];

    return (
        <>
            <div className="navbarContainer">
                <Link href={"/about"}>
                    <p className="navItem">About</p>
                </Link>
                <Link href={"/"}>
                    <p className="navItem">1107® Reel</p>                
                </Link>
                <MusicPlayer tracks={tracks}/>
            </div>
        </>
    )
}