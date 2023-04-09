import Image from "next/image";

export default function HeroSection() {
    return <div id="homepage">
        <div >
            <Image src={"/hamburger2.jpg"} alt="" width={1300} height={100} className="w-screen" />
        </div>
    </div>;
}
