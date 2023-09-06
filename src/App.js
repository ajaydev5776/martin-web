
import { useEffect, useRef } from 'react';
import './App.css';
import RouteLinks from './routes/RouteLinks';
import { useLocation } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

function App() {
//   const location = useLocation();

//   useEffect(()=> {
//     window.scrollTo(0,0)
// }, [location])

const ref = useRef(null);

const options = {
  smooth: true,
}
  return (
    // <div className="App">
    //   <Homepage/>
    // </div>
    <>
    {/* <LocomotiveScrollProvider options={options} containerRef={ref}> */}
      <RouteLinks/>
    {/* </LocomotiveScrollProvider> */}
    </>
  );
}

export default App;
