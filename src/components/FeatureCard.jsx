export default function FeatureCard({ icon, title, description }) {


    return (

        <div

            className="bg-white p-8 rounded-3xl shadow hover:-translate-y-2 transition"

        >


            <div className="text-blue-600 text-4xl">

                {icon}

            </div>


            <h3 className="text-xl font-bold mt-5">

                {title}

            </h3>


            <p className="mt-3 text-gray-600">

                {description}

            </p>


        </div>

    )

}