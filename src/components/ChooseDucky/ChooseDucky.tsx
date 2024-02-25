// Setting for the rubber duckie to include selecting rubber duckie image
import { useEffect, useState } from 'react';
import './ChooseDucky.css';

import rubberDuck1 from '../../assets/images/rubberDucks/duck1.jpeg';
import rubberDuck3 from '../../assets/images/rubberDucks/duck3.jpeg';
import rubberDuck4 from '../../assets/images/rubberDucks/duck4.jpeg';
import rubberDuck5 from '../../assets/images/rubberDucks/duck5.jpeg';
import rubberDuck6 from '../../assets/images/rubberDucks/duck6.jpeg';
import rubberDuck7 from '../../assets/images/rubberDucks/duck7.jpeg';
import rubberDuck8 from '../../assets/images/rubberDucks/duck8.jpeg';
import rubberDuck10 from '../../assets/images/rubberDucks/duck10.png';
import rubberDuck11 from '../../assets/images/rubberDucks/duck11.jpeg';
import rubberDuck12 from '../../assets/images/rubberDucks/duck12.jpeg';
import rubberDuck13 from '../../assets/images/rubberDucks/duck13.jpeg';
import rubberDuck14 from '../../assets/images/rubberDucks/duck14.jpeg';
import rubberDuck15 from '../../assets/images/rubberDucks/duck15.png';
import rubberDuck16 from '../../assets/images/rubberDucks/duck16.png';
import rubberDuck17 from '../../assets/images/rubberDucks/duck17.png';
import rubberDuck18 from '../../assets/images/rubberDucks/duck18.png';
import rubberDuck19 from '../../assets/images/rubberDucks/duck19.png';
import rubberDuck20 from '../../assets/images/rubberDucks/duck20.png';
import rubberDuck21 from '../../assets/images/rubberDucks/duck21.png';
import rubberDuck22 from '../../assets/images/rubberDucks/duck22.png';
import rubberDuck23 from '../../assets/images/rubberDucks/duck23.png';
import rubberDuck24 from '../../assets/images/rubberDucks/duck24.png';
import rubberDuck25 from '../../assets/images/rubberDucks/duck25.png';
import rubberDuck26 from '../../assets/images/rubberDucks/duck26.png';
import rubberDuck27 from '../../assets/images/rubberDucks/duck27.png';
import rubberDuck28 from '../../assets/images/rubberDucks/duck28.png';
import rubberDuck29 from '../../assets/images/rubberDucks/duck29.png';
import rubberDuck30 from '../../assets/images/rubberDucks/duck30.png';
import rubberDuck31 from '../../assets/images/rubberDucks/duck31.png';
import rubberDuck32 from '../../assets/images/rubberDucks/duck32.png';
import rubberDuck33 from '../../assets/images/rubberDucks/duck33.png';
import rubberDuck34 from '../../assets/images/rubberDucks/duck34.png';
import rubberDuck35 from '../../assets/images/rubberDucks/duck35.png';
import squeak from '../../assets/sounds/RUBBER DUCK.mp3';

const rubberDuckImages = [
  rubberDuck1,
  rubberDuck3,
  rubberDuck4,
  rubberDuck5,
  rubberDuck6,
  rubberDuck7,
  rubberDuck8,
  rubberDuck10,
  rubberDuck11,
  rubberDuck12,
  rubberDuck13,
  rubberDuck14,
  rubberDuck15,
  rubberDuck16,
  rubberDuck17,
  rubberDuck18,
  rubberDuck19,
  rubberDuck20,
  rubberDuck21,
  rubberDuck22,
  rubberDuck23,
  rubberDuck24,
  rubberDuck25,
  rubberDuck26,
  rubberDuck27,
  rubberDuck28,
  rubberDuck29,
  rubberDuck30,
  rubberDuck31,
  rubberDuck32,
  rubberDuck33,
  rubberDuck34,
  rubberDuck35,
];

const SettingsComponent = ({
  rubberDuckImage,
  setRubberDuckImage,
  setShowChooseDucky,
}: {
  rubberDuckImage: string;
  setRubberDuckImage: (image: string) => void;
  setShowChooseDucky: (show: boolean) => void;
}) => {
  const [selectedImage, setSelectedImage] = useState(rubberDuckImage);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleImageSelect = () => {
    setRubberDuckImage(selectedImage);
    setShowChooseDucky(false);
  };

  useEffect(() => {
    const audio = new Audio(squeak);
    audio.play();
  }, []);

  return (
    <div className='settings-container'>
      <div className='image-container'>
        {rubberDuckImages.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt='rubber duck'
              onClick={() => handleImageClick(image)}
            />
          );
        })}
      </div>
      <div className='selected-image-container'>
        <img src={selectedImage} alt='rubber duck' />
        <button onClick={handleImageSelect}>Select</button>
      </div>
    </div>
  );
};

export default SettingsComponent;
