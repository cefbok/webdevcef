import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';

function ProjectItems({ title, imgUrl, stack, link, gitlink }) {
  return (
    <div className="border-2 border-stone-900 dark:border-stone-300 rounded-lg overflow-hidden flex-none w-64 md:w-80">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-36 md:h-52"
      >
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-full object-cover cursor-pointer"
        />
      </a>
      <div className="w-full p-4">
        <h3 className="flex justify-between text-lg md:text-xl mb-2 md:mb-5 font-semibold">
          {title}
          <a href={gitlink} target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} className='opacity-80' />
          </a>
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-stone-300  rounded-lg"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

ProjectItems.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  stack: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  gitlink: PropTypes.string.isRequired,
};

export default ProjectItems;
