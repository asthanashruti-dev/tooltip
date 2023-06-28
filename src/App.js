import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <Tooltip position="bottom" text="Thanks for hovering! I'm a tooltip">
        <span className="tooltip-target">Hover over me!</span>
      </Tooltip>
    </div>
  );
};

export default App;
