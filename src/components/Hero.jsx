
import Title from "./Title";    

function Hero() {
    return (
    <div>
        <div className="">
        <Title showToggle={true}> About Me </Title>
        </div>
        <section id="Home" className="flex flex-col md:flex-row justify-around 
        md:py-16 py-6">
            <div className="">
                    <div className="text-center md:text-start mt-6 md:mt-20 mb-8">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-3 md:mb-6
                        font-bold">Cefrin Paanod</h2>
                        <div className="text-sm md:text-base">
                            <p>Software Engineer & Web Developer</p>
                            <p>This is my Portfolio pls</p>
                        </div>
                    </div>
            </div>
            
            <div className="grid place-items-center mt-5"> 
                <img src="src/assets/herocef.jpg" alt="Cefrin Paanod" 
                    className="h-72 md:h-80 lg:h-96 w-auto mb-6 rounded-lg 
                    border-2 border-stone-800 dark:border-stone-300"/>
                <button className="= bg-white dark:bg-stone-900 w-full 
                h-16 border-2 rounded-lg border-stone-600 dark:border-stone-300
                         hover:border-sky-800 dark:hover:border-sky-800 
                         hover:font-medium hidden md:block"> VIEW MY WORK </button>
            </div>    
        </section>
    </div>
    
    )
}



export default Hero;