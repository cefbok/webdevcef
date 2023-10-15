import { useEffect } from "react";
import aosLoad from "../AOS/aosLoad";

function Experience() {
    useEffect(() => {
        aosLoad();
    }, []);
    return (
        <div data-aos="fade-left" data-aos-duration="600" data-aos-offset="100"
        data-aos-easing="ease-in-sine">
            <p className="text-2xl md:font-semibold underline mb-3 lg:mb-6"> EXPERIENCE </p>
            <ul className="text-center md:text-lg">
                <li className="font-bold md:text-xl"> IT SUPPORT INTERN </li>
                <li className="font-medium"> Bargn Farmaceutici Phils. Co. </li>
                <li className="font-normal"> March - June 2023 </li>
            </ul>
        </div>
)
}

export default Experience;