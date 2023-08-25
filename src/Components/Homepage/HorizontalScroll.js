import React, { useRef } from 'react';
import './HorizontalScroll.css'; // Create this file for styling

const HorizontalScroll = ({ children }) => {
  const scrollRef = useRef();

  const handleScroll = (e) => {
    scrollRef.current.scrollLeft += e.deltaY;
    
  };

  return (
    <div className="horizontal-scroll" onWheel={handleScroll} ref={scrollRef}>
      {children}
    </div>
  );
};

export default HorizontalScroll;
