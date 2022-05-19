import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import './sliderSmall.css'
const center = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      showNavs: true,
      
    };
    return (
      <div className="small-breakpoint " >
        <div className="cont">
        <Slider  {...settings}>
          <div>
            <img src = 'https://picsum.photos/id/1018/1000/600/' alt = ''/> 
          </div>
          <div>
            <img src = 'https://picsum.photos/id/1015/1000/600/' alt = ''/> 
          </div>
          <div>
            <img src = 'https://picsum.photos/id/1019/1000/600/' alt = ''/> 
          </div>
        </Slider> 
        </div>
       
      </div>
    );
  }
}