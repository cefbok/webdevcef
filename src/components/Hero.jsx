
import { useEffect } from "react";
import aosLoad from "./AOS/aosLoad";
import Title from "./Title";  

function Hero() {
    useEffect(() => {
        aosLoad();
    }, []);
    const scrollToProjects = () => {
        document.querySelector("#works").scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth"});
    };
    return (
    <div>
        <div data-aos="fade-down" data-aos-duration="800">
        <Title showToggle={true}> About Me </Title>
        </div>
        <section id="Home" className="flex flex-col md:flex-row justify-around 
        md:py-16 py-6 md:px-10 lg:px-0">
            <div className="">
                    <div className="text-center md:text-start mt-6 md:mt-20 mb-8" data-aos="fade-right" data-aos-duration="1500">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-3 md:mb-5
                        font-bold">Cefrin <span className="before:block before:absolute 
                        before:-inset-2 md:before:-skew-y-3 md:before:bg-sky-500 relative inline-block">
                        <span className="relative text-stone-900 dark:text-stone-300
                        md:text-white md:dark:text-stone-900">Paanod</span></span></h2>
                        <div className="mx-5 md:mx-auto text-base">
                            <p>Hi there! I{"'"}m a front-end web developer and web design enthusiast, <br className="hidden sm:block"/>
                            passionate about creating clean and functional websites. <br className="hidden sm:block"/>
                            I strive to provide visually appealing and user friendly interfaces
                            <br className="hidden sm:block"/> with seamless user experience.
                            </p>
                        </div>
                        <div className="flex flex-none gap-4 text-sm justify-center md:justify-start">
                            <button className="flex items-center justify-center 
                                rounded-lg underline hover:no-underline hover:border-2 border-stone-500 dark:border-stone-300
                                hover:border-sky-400 dark:hover:border-sky-400 p-2 h-8 mt-8
                                hover:scale-105 hover:shadow-md hover:font-medium" onClick={scrollToContact}>
                                Contact Me
                            </button>
                            <a href="assets/CefrinPaanodResume.pdf" 
                                target="_blank" 
                                rel="noopener noreferer"
                                className="relative inline-block">
                            <button className="flex items-center justify-center 
                                rounded-lg underline hover:no-underline hover:border-2 border-stone-500 dark:border-stone-300
                                hover:border-sky-400 dark:hover:border-sky-400 p-2 h-8 mt-8
                                hover:scale-105 hover:shadow-md hover:font-medium">
                                DowndloadCV
                            </button>
                            </a>
                        </div>  
                    </div>
            </div>
            
            <div className="grid place-items-center mt-4" data-aos="fade-left" data-aos-duration="2000"> 
                <img src="assets/hcef.jpg" alt="Cefrin Paanod" 
                    className="h-72 md:h-80 lg:h-96 w-auto mb-4 rounded-lg 
                    border-2 border-stone-500 dark:border-stone-300"/>
                <button className="md:w-60 lg:w-72 md:h-14 lg:h-16 border-2 rounded-lg border-stone-500 dark:border-stone-300
                        hover:border-sky-400 dark:hover:border-sky-400 hover:font-medium
                        hidden md:block hover:scale-105 hover:shadow-md" onClick={scrollToProjects}> VIEW MY WORK </button>
            </div>  
        </section>
    </div>
    
    )
}



export default Hero;