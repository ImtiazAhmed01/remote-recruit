import { motion } from "framer-motion";


export default function Hero() {


    return (

        <section className="pt-40 pb-20">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                >

                    <h1 className="text-5xl font-bold leading-tight">

                        Find Remote Talent.
                        Build Better Teams.

                    </h1>


                    <p className="mt-6 text-gray-600 text-lg">

                        RemoteRecruit connects companies with skilled remote professionals worldwide.

                    </p>


                    <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl hover:scale-105 transition">

                        Start Hiring

                    </button>


                </motion.div>



                <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                    className="rounded-3xl"
                />



            </div>

        </section>

    )

}