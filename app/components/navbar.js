"use client";
import Link from "next/link";
import MusicPlayer from "./musicPlayer";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname();
    const isAboutPage = pathname === '/about';
    const noDifference = isAboutPage ? 'noDifference link' : 'reel link navItem';
    const noDiffNavContainer = isAboutPage ? 'navbarContainerNoDiff' : 'navbarContainer';
    const notDiffNavItem = isAboutPage ? 'navItemNoDiff link' : 'navItem link';

    const tracks = [
        { name: 'track 1', url: '/music/1107_IntroSong_AiVoice.mp3' },
        { name: 'track 2', url: '/music/13_(Original Mix).mp3' },
        { name: 'track 3', url: '/music/Ageispolis_(Original Mix).mp3' },
        { name: 'track 4', url: '/music/Delphium_(Original Mix).mp3' },
        { name: 'track 5', url: '/music/Urban Myth_(Original Mix).mp3' }
    ];

    return (
        <>
            <div className={noDiffNavContainer}>
                <Link href={"/about"}>
                    <p className={notDiffNavItem}>About</p>
                </Link>
                <Link href={"/reel"}>
                    <p className={noDifference}>1107® Reel</p>                
                </Link>
                <MusicPlayer tracks={tracks}/>
            </div>
        </>
    )
}