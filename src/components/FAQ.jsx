const faq = [

    "How does RemoteRecruit work?",
    "Can I hire internationally?",
    "Is there a free plan?"

]


export default function FAQ() {


    return (

        <section id="faq" className="py-20">

            <div className="max-w-4xl mx-auto px-6">


                <h2 className="text-4xl font-bold text-center">
                    Common Questions
                </h2>


                <div className="mt-10 space-y-5">


                    {
                        faq.map((q, i) => (

                            <div
                                key={i}
                                className="border p-5 rounded-xl"
                            >

                                {q}

                            </div>

                        ))
                    }


                </div>


            </div>


        </section>

    )

}