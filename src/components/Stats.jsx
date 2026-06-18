const stats = [

    ["10K+", "Remote Workers"],

    ["500+", "Companies"],

    ["99%", "Success Rate"]

]


export default function Stats() {


    return (

        <section className="bg-blue-600 text-white py-16">


            <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center">


                {
                    stats.map((s, i) => (


                        <div key={i}>


                            <h2 className="text-5xl font-bold">

                                {s[0]}

                            </h2>


                            <p className="mt-3">

                                {s[1]}

                            </p>


                        </div>


                    ))
                }



            </div>


        </section>

    )

}