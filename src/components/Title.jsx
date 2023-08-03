import PropTypes from 'prop-types';
import DarkModeToggle from './Darkmode';

function Title({ children, id, showToggle }) {
  return (
    <div className="relative flex-none md:flex items-center pt-6 md:pt-16">
      <h1
        id={id && id}
        className="text-xl md:text-2xl font-semibold mx-3 mb-3 md:mb-0 md:mx-16"
      >
        {children}
      </h1>
      <div className="flex-grow border-t border-stone-900 dark:border-stone-300 mx-3 md:mr-14"></div>
      {showToggle && <div className="hidden md:block md:mr-14"> <DarkModeToggle/> </div>}
    </div>
  );
}

Title.propTypes = {
   children: PropTypes.node.isRequired,
   id: PropTypes.node,
   showToggle: PropTypes.bool, // Add this prop
 };
 
 Title.defaultProps = {
   showToggle: false, // Default value is set to false
 };

export default Title;