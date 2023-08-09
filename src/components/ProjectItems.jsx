import PropTypes from 'prop-types';

function ProjectItems({ title, imgUrl, stack, link}) {
  return (
    <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white 
         hover:border-sky-500 dark:hover:border-sky-500
         rounded-lg overflow-hidden flex-none w-72 md:w-80 transition 
         hover:scale-105 hover:shadow-xl"
      >
         <img
            src={imgUrl}
            alt="portfolio" 
            className="w-full h-36 md:h-48 object-cover"
         />
         <div className="w-full p-4">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
               {stack.map(item => (
                  <span 
                  key={item} 
                  className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-lg">
                     {item}
                  </span>
               ))}
            </p>
         </div>
    </a>
  );
}

ProjectItems.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  stack: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectItems;
