export default function StepCard({ number, title, text }) {


    return (

        <div className="border rounded-3xl p-8 hover:shadow-lg transition">


            <div className="text-blue-600 text-3xl font-bold">

                {number}

            </div>


            <h3 className="text-xl font-bold mt-5">

                {title}

            </h3>


            <p className="text-gray-600 mt-3">

                {text}

            </p>


        </div>

    )

}