import React, { useEffect, useState } from 'react';
import './style.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';
import arrow from './../../Assets/images/arrow.svg'

const MouseMoveEffect = ({ parentElement, text }) => {
  const [isInside, setIsInside] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  useEffect(() => {
    // const cursor = document.querySelector('#cursor');
    const specificSection = document.querySelector(parentElement);

    document.addEventListener('mousemove', handleMouseMove);
    specificSection.addEventListener('mouseenter', handleMouseEnter);
    specificSection.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      specificSection.removeEventListener('mouseenter', handleMouseEnter);
      specificSection.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [parentElement]);

  return (
    <>
      {isInside && (
        <div
          id="cursor"
          className="custom-cursor"
          style={{ left: position.x, top: position.y }}
        >
          <Link to="/" className='rounded-pill bg-white py-1 px-3 text-dark text-decoration-none d-flex align-items-center justify-content-center'>
            {text}
            <svg className="fillColor has_transition_1000 transition_all" viewBox="0 0 14.37 14.37">
              <use x="0" y="0" xlinkHref="#buttonArrow"></use>
            </svg>
          </Link>
        </div>
      )}
    </>
  );
};

export default MouseMoveEffect;
