import { useState } from "react";


export default function Navbar() {

    const [open, setOpen] = useState(false)


    return (

        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur z-50">

            <div className="max-w-7xl mx-auto flex justify-between items-center p-6">


                <h1 className="text-2xl font-bold text-blue-600">
                    RemoteRecruit
                </h1>


                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>


                <div className={`${open ? "block" : "hidden"} md:flex gap-8`}>

                    <a href="#features">Features</a>

                    <a href="#works">How it works</a>

                    <a href="#faq">FAQ</a>


                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full">

                        Get Started

                    </button>

                </div>


            </div>


        </nav>

    )

}