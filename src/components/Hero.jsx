
import Title from "./Title";    

function Hero() {
    const scrollToProjects = () => {
        document.querySelector("#works").scrollIntoView({ behavior: "smooth" });
    };
    return (
    <div>
        <div className="">
        <Title showToggle={true}> About Me </Title>
        </div>
        <section id="Home" className="flex flex-col md:flex-row justify-around 
        md:py-16 py-6">
            <div className="">
                    <div className="text-center md:text-start mt-6 md:mt-20 mb-8">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-3 md:mb-5
                        font-bold">Cefrin Paanod</h2>
                        <div className="text-sm md:text-base">
                            <p className="text-lg font-medium"> Front-end web developer </p>
                            <p> Lets make the best thing out of this world. </p>
                        </div>
                    </div>
            </div>
            
            <div className="grid place-items-center mt-5"> 
                <img src="src/assets/herocef.jpg" alt="Cefrin Paanod" 
                    className="h-72 md:h-80 lg:h-96 w-auto mb-6 rounded-lg 
                    border-2 border-stone-500 dark:border-stone-300"/>
                <button className="= bg-white dark:bg-stone-900 w-full h-16 
                        border-2 rounded-lg border-stone-500 dark:border-stone-300
                        hover:border-sky-600 dark:hover:border-sky-800 hover:font-medium 
                        hidden md:block" onClick={scrollToProjects}> VIEW MY WORK </button>
            </div>  
        </section>
    </div>
    
    )
}



export default Hero;