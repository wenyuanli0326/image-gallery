import React from "react";
import './sliderLarge.css';
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from 'react-image-gallery';
const center = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
}
const images = [

    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

class App extends React.Component {
    render() {

        return <div style = { center } >
            
            <ImageGallery items = { images }/> 
        </div>

    }
}

export default App;