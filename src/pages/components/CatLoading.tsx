import Lottie from 'react-lottie';
import animationData from '../../assets/animation.json'; 

const CatAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default CatAnimation;