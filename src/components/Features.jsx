import FeatureCard from "./FeatureCard";

import {
    FaUsers,
    FaGlobe,
    FaClock,
    FaShieldAlt
} from "react-icons/fa";


const features = [

    {
        icon: <FaUsers />,
        title: "Top Remote Talent",
        description: "Connect with skilled professionals globally."
    },


    {
        icon: <FaGlobe />,
        title: "Worldwide Hiring",
        description: "Build teams without location limits."
    },


    {
        icon: <FaClock />,
        title: "Fast Recruitment",
        description: "Reduce hiring time with smart matching."
    },


    {
        icon: <FaShieldAlt />,
        title: "Secure Platform",
        description: "Safe and reliable hiring experience."
    }


]



export default function Features() {


    return (

        <section id="features" className="py-20 bg-gray-50">


            <div className="max-w-7xl mx-auto px-6">


                <h2 className="text-4xl font-bold text-center">

                    Everything You Need

                </h2>



                <div className="grid md:grid-cols-4 gap-6 mt-12">


                    {
                        features.map((item, index) => (

                            <FeatureCard

                                key={index}

                                {...item}

                            />

                        ))
                    }


                </div>


            </div>


        </section>


    )

}