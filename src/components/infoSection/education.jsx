import { useEffect } from "react";
import aosLoad from "../AOS/aosLoad";

function Education() {
    useEffect(() => {
        aosLoad();
    }, []);
    return (
        <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="100"
        data-aos-easing="ease-in-sine">
            <p className="text-2xl md:font-semibold underline mb-3 lg:mb-6"> EDUCATION </p>
            <ul className="text-center md:text-lg ">
                <li className="font-bold md:text-xl"> BET - Computer Engineering Technology </li>
                <li className="font-medium"> Technological University of the Philippines - Cavite Campus </li>
                <li className="font-normal"> 2019 - 2023 </li>
            </ul>
        </div>
    )
}

export default Education;