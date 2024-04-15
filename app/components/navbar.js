import Link from "next/link";
import MusicPlayer from "./musicPlayer";

export default function Navbar() {
    return (
        <>
            <div className="navbarContainer">
                <Link href={"/about"}>
                    <p className="navItem">About</p>
                </Link>
                <Link href={"/"}>
                    <p className="navItem">1107 Reel</p>                
                </Link>
                <MusicPlayer/>
            </div>
        </>
    )
}