import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

const Tooltip = ({ position, text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false); // State to track tooltip visibility
  console.log(showTooltip);

  const handleMouseEnter = () => {
    setShowTooltip(true); // Set showTooltip state to true when mouse enters the component
  };

  const handleMouseLeave = () => {
    setShowTooltip(false); // Set showTooltip state to false when mouse leaves the component
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children} {/* Render the content that triggers the tooltip */}
      {showTooltip && ( // Conditionally render the tooltip based on showTooltip state
        <div className={`tooltip tooltip-${position}`}> {/* Apply appropriate position class to the tooltip */}
          {text} {/* Render the tooltip text */}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']), // Validate the position prop
  text: PropTypes.string.isRequired, // Validate the text prop
  children: PropTypes.element.isRequired, // Validate the children prop
};

export default Tooltip;
