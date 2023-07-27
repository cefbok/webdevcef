import ProjectItems from './ProjectItems';
import data from '../data/data'
import Title from "./Title";

function Projects() {
  return (
    <div id="works">
      <Title> My Projects </Title>
      <div  className="flex flex-col md:flex-row items-center justify-center pt-10 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
             <ProjectItems
               imgUrl={item.imgUrl}
               title={item.title}
               gitlink = {item.gitlink}
               stack={item.stack.map((item) => item)}
               link = {item.link}
               info = {item.info}
               key={item.title}
             />
            ))}
        </div>
      </div>
    </div>
  );
}


export default Projects;
