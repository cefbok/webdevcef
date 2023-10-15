import { useEffect } from "react";
import aosLoad from "./AOS/aosLoad";
import ProjectItems from './ProjectItems';
import data from '../data/data'
import Title from "./Title";

function Projects() {
  useEffect(() => {
    aosLoad();
  }, []);
  return (
    <div id="works">
      <div data-aos="fade-up">
        <Title> My Projects </Title>
      </div>
      <div  className="flex flex-col md:flex-row items-center justify-center pt-10 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine">
            {data.map((item) => (
             <ProjectItems
               imgUrl={item.imgUrl}
               title={item.title}
               stack={item.stack.map((item) => item)}
               link = {item.link}
               key={item.title}
             />
            ))}
        </div>
      </div>
    </div>
  );
}


export default Projects;
