
import { useEffect } from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import RouteLinks from './routes/RouteLinks';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(()=> {
    window.scrollTo(0,0)
}, [location])
  return (
    // <div className="App">
    //   <Homepage/>
    // </div>
    <>
      <RouteLinks/>
    </>
  );
}

export default App;
