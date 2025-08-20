import React from "react";
import Lottie from "lottie-react";

const LottiePlayer = ({
  animationData,
  className,
  loop = true,
  autoplay = true,
}) => {
  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </div>
  );
};

export default LottiePlayer;
