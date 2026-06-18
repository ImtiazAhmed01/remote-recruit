import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {

    const [menu, setMenu] = useState(false);


    return (

        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-sm">


            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">


                <h1 className="text-2xl font-bold text-blue-600">
                    RemoteRecruit
                </h1>


                <div className="hidden md:flex items-center gap-8">


                    <a href="#features"
                        className="hover:text-blue-600 transition">
                        Features
                    </a>


                    <a href="#works"
                        className="hover:text-blue-600 transition">
                        How it works
                    </a>


                    <a href="#faq"
                        className="hover:text-blue-600 transition">
                        FAQ
                    </a>


                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">

                        Get Started

                    </button>


                </div>



                <button
                    className="md:hidden text-xl"
                    onClick={() => setMenu(!menu)}
                >

                    {
                        menu ? <FaTimes /> : <FaBars />
                    }

                </button>



            </div>



            {
                menu &&

                <div className="md:hidden px-6 pb-6 flex flex-col gap-5">


                    <a href="#features">
                        Features
                    </a>


                    <a href="#works">
                        How it works
                    </a>


                    <a href="#faq">
                        FAQ
                    </a>



                    <button className="bg-blue-600 text-white py-3 rounded-full">

                        Get Started

                    </button>


                </div>


            }


        </nav>

    )

}