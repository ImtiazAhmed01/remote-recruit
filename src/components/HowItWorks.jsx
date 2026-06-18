import StepCard from "./StepCard";


const steps = [

    {
        number: "01",
        title: "Create Account",
        text: "Register your company profile."
    },

    {
        number: "02",
        title: "Find Candidates",
        text: "Search skilled remote workers."
    },

    {
        number: "03",
        title: "Start Working",
        text: "Hire and collaborate instantly."
    }

]



export default function HowItWorks() {


    return (

        <section id="works" className="py-20">


            <div className="max-w-6xl mx-auto px-6">


                <h2 className="text-4xl font-bold text-center">

                    How RemoteRecruit Works

                </h2>



                <div className="grid md:grid-cols-3 gap-8 mt-12">


                    {
                        steps.map((s, i) => (

                            <StepCard

                                key={i}

                                {...s}

                            />

                        ))
                    }


                </div>


            </div>


        </section>


    )

}