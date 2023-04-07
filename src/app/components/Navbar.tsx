import Link from "next/link";

export default function Navbar() {
    return <div className="flex md:justify-between justify-center px-16 py-4 shadow-xl bg-white sticky top-0 z-10">

        <div >
            <h1 className="hover:bg-gray-200 font-bold md:font-normal font-mono">Gourmet Catering</h1>
        </div>

        <div className="space-x-10 font-mono hidden md:inline-block">
            <Link href={"#homepage"} target="_parent" className="hover:bg-gray-200">Home</Link>
            <Link href={"#aboutpage"} target="_parent" className="hover:bg-gray-200">About</Link>
        </div>
    </div>;
}
