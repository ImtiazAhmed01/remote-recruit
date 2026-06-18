import { motion } from "framer-motion";


export default function Hero() {


    return (

        <section className="pt-40 pb-20">


            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


                <motion.div

                    initial={{ opacity: 0, x: -50 }}

                    animate={{ opacity: 1, x: 0 }}

                    transition={{ duration: .7 }}

                >


                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">


                        Hire Remote Talent

                        Without Borders


                    </h1>



                    <p className="mt-6 text-gray-600 text-lg">

                        RemoteRecruit helps companies discover, interview and hire world-class remote professionals.

                    </p>



                    <div className="mt-8 flex gap-4">


                        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:scale-105 transition">

                            Find Talent

                        </button>


                        <button className="border px-8 py-3 rounded-xl hover:bg-gray-100">

                            Learn More

                        </button>


                    </div>



                </motion.div>



                <motion.img

                    initial={{ opacity: 0, scale: .8 }}

                    animate={{ opacity: 1, scale: 1 }}

                    transition={{ duration: .7 }}

                    loading="lazy"

                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"

                    className="rounded-3xl shadow-xl"

                />


            </div>


        </section>


    )

}