import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

function LottieFiles() {
  const [animationData, setAnimationData] = useState(null);
  const animationDataUrl = 'https://lottie.host/73e5e3b1-fccc-43c6-aa55-07dfb9a66aa4/zR1q2skXzQ.json';


  useEffect(() => {
    fetch(animationDataUrl)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error fetching animation data:', error));
  }, []);

  if (!animationData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default LottieFiles