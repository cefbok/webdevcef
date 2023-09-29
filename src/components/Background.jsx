import { useEffect } from "react";
import aosLoad from "./AOS/aosLoad";
import Title from "./Title";
import SkillList from "./infoSection/skills";
import Education from "./infoSection/education";
import Experience from "./infoSection/experience";

function Background() {
    useEffect(() => {
        aosLoad();
    }, []);
    return ( 
        <div>
            <div data-aos="fade-up" data-aos-duration="1500">
                <Title> Background </Title>
            </div>
            <div className="flex justify-center items-center  py-6 md:py-16" 
            data-aos="fade-up" data-aos-duration="1500">
                <img src="assets/bgcef.jpg" alt="background"
                className="object-cover w-10/12 md:h-48 lg:h-64 hidden md:block 
                border-2 border-stone-400 dark:border-stone-300 rounded-lg"/>
            </div>
            <section className="flex flex-col md:flex-col lg:flex-row text-center 
                md:justify-evenly pb-6 md:pb-16 gap-10 mx-10">
                < SkillList />
                < Education />
                < Experience />
            </section>
        </div>
        
    )
}

export default Background;