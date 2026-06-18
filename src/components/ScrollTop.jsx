import { useEffect, useState } from "react";


export default function ScrollTop() {

    const [show, setShow] = useState(false);


    useEffect(() => {

        window.addEventListener(
            "scroll",
            () => setShow(window.scrollY > 400)
        )

    }, [])


    return show && (

        <button

            onClick={() => window.scrollTo(0, 0)}

            className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full"

        >

            ↑

        </button>

    )

}