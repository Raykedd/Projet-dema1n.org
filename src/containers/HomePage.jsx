import { useState, useEffect, useRef } from 'react';
import { ls, ss } from '../utils/store';

import './homepage.css';
import { Button } from 'primereact/button';
import video from '../assets/videos/planetevideo.mp4';

function HomePage(props) {

  function handleEndedVideo() {

  }

  return (
      <div className="h-full w-full overflow-y-hidden">
        <video loop autoPlay="autoplay" onEnded={() => handleEndedVideo()} muted className='videoFront'>
          <source src={video} type="video/mp4" />
        </video>
      </div>
  );
}


export default HomePage;
