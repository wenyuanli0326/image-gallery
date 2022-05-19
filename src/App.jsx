
import './App.css';
import SimpleSlider from './components/sliderSmall';
import SliderLarge from './components/sliderLarge';
import React, { useEffect, useState } from "react"


  const App  = () => {
    const [width, setWidth] = useState(0); 
 
    const resizeUpdate = (e) => {
        // get width of device
        let w = e.target.innerWidth;
        setWidth(w);
    }
 
    useEffect(() => {
      let W = window.innerWidth;
      setWidth(W)
      // get width when window size change 
      window.addEventListener('resize', resizeUpdate);
    }, [])
  return(
    <div className="App">
      {width>=992?<SliderLarge />:<SimpleSlider />}
      
    </div>
    );

}


export default App;

