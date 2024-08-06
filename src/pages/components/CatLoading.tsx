import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation.json'; 

function CatAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
  };

  return <Lottie options={defaultOptions} height={300} width={300} />;

}

export default CatAnimation;

