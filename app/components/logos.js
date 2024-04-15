import Link from "next/link"

export default function Logos() {
    return (
        <>
            <div className="logoContainer">
                <Link href={"/"}>
                    <img className="logo" src="./logo.png" />
                </Link>
            </div>
        </>
    )
}