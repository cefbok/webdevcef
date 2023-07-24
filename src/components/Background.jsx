import Title from "./Title";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoPython, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";


function Background() {
    return ( 
        <div>
            <Title> Background </Title>
            <div className="flex justify-center items-center  py-6 md:py-16">
                <img src="src/assets/Cef2.jpg" alt="background"
                className="object-cover w-10/12 md:h-48 lg:h-64 hidden md:block 
                border-2 border-stone-800 dark:border-stone-300 rounded-lg " />
            </div>
            <section className="flex flex-col md:flex-col lg:flex-row text-center 
                md:justify-evenly pb-6 md:pb-16 gap-8 mx-2 ">
                <div>
                    <p className="text-2xl font-semibold underline mb-3 lg:mb-6"> SKILLS </p>
                    <div className="flex flex-col h-46 w-60 mx-auto gap-4">
                        <ul className="flex gap-5">
                            <li className="">< BiLogoHtml5 size={64}/></li>
                            <li>< BiLogoCss3 size={64}/></li>
                            <li>< BiLogoJavascript size={64}/></li>
                        </ul>
                        <ul className="flex gap-5">
                            <li>< BiLogoPython size={64}/></li>
                            <li>< BiLogoReact size={64}/></li>
                            <li>< BiLogoTailwindCss size={64}/></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="text-2xl font-semibold underline mb-3 lg:mb-6"> EDUCATION </p>
                    <ul className="text-center text-lg ">
                        <li className="font-bold text-xl"> BET - Computer Engineering Technology </li>
                        <li className="font-medium"> Technological University of the Philippines - Cavite Campus </li>
                        <li className="font-normal"> 2019 - 2023 </li>
                        
                    </ul>
                </div>
                <div>
                    <p className="text-2xl font-semibold underline mb-3 lg:mb-6"> EXPERIENCE </p>
                    <ul className="text-center text-lg">
                        <li className="font-bold text-xl"> IT SUPPORT INTERN </li>
                        <li className="font-medium"> Bargn Farmaceutici Phils. Co. </li>
                        <li className="font-normal"> March - June 2023 </li>
                    </ul>
                </div>
            </section>
        </div>
        
    )
}

export default Background;