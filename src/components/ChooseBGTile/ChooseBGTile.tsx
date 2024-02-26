import './ChooseBGTile.css';
import bg1 from '../../assets/images/backgroundTiles/bckgroundTile (1).png';
import bg2 from '../../assets/images/backgroundTiles/bckgroundTile (2).png';
import bg3 from '../../assets/images/backgroundTiles/bckgroundTile (3).png';
import bg4 from '../../assets/images/backgroundTiles/bckgroundTile (4).png';
import bg5 from '../../assets/images/backgroundTiles/bckgroundTile (5).png';
import bg6 from '../../assets/images/backgroundTiles/bckgroundTile (6).png';
import bg7 from '../../assets/images/backgroundTiles/bckgroundTile (7).png';
import bg8 from '../../assets/images/backgroundTiles/bckgroundTile (8).png';
import bg9 from '../../assets/images/backgroundTiles/bckgroundTile (9).png';
import bg10 from '../../assets/images/backgroundTiles/bckgroundTile (10).png';
import bg11 from '../../assets/images/backgroundTiles/bckgroundTile (11).png';
import bg12 from '../../assets/images/backgroundTiles/bckgroundTile (12).png';
import bg13 from '../../assets/images/backgroundTiles/bckgroundTile (13).png';
import bg14 from '../../assets/images/backgroundTiles/bckgroundTile (14).png';
import bg15 from '../../assets/images/backgroundTiles/bckgroundTile (15).png';
import bg16 from '../../assets/images/backgroundTiles/bckgroundTile (16).png';
import bg17 from '../../assets/images/backgroundTiles/bckgroundTile (17).png';
import bg18 from '../../assets/images/backgroundTiles/bckgroundTile (18).png';
import bg19 from '../../assets/images/backgroundTiles/bckgroundTile (19).png';
import bg20 from '../../assets/images/backgroundTiles/bckgroundTile (20).png';
import bg21 from '../../assets/images/backgroundTiles/bckgroundTile (21).png';
import bg22 from '../../assets/images/backgroundTiles/bckgroundTile (22).png';
import bg23 from '../../assets/images/backgroundTiles/bckgroundTile (23).png';
import bg24 from '../../assets/images/backgroundTiles/bckgroundTile (24).png';
import bg25 from '../../assets/images/backgroundTiles/bckgroundTile (25).png';
import bg26 from '../../assets/images/backgroundTiles/bckgroundTile (26).png';
import bg27 from '../../assets/images/backgroundTiles/bckgroundTile (27).png';
import bg28 from '../../assets/images/backgroundTiles/bckgroundTile (28).png';
import bg29 from '../../assets/images/backgroundTiles/bckgroundTile (29).png';
import bg30 from '../../assets/images/backgroundTiles/bckgroundTile (30).png';
import bg31 from '../../assets/images/backgroundTiles/bckgroundTile (31).png';
import { useState } from 'react';

const backgroundTiles = [
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
  bg9,
  bg10,
  bg11,
  bg12,
  bg13,
  bg14,
  bg15,
  bg16,
  bg17,
  bg18,
  bg19,
  bg20,
  bg21,
  bg22,
  bg23,
  bg24,
  bg25,
  bg26,
  bg27,
  bg28,
  bg29,
  bg30,
  bg31,
];

const ChooseBGTile = ({
  backgroundTile,
  setBackgroundTile,
  setShowChooseBG,
}: {
  backgroundTile: string;
  setBackgroundTile: (image: string) => void;
  setShowChooseBG: (show: boolean) => void;
}) => {
  const [selectedImage, setSelectedImage] = useState(backgroundTile);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleImageSelect = () => {
    setBackgroundTile(`url('${selectedImage}')`);
    document.documentElement.style.backgroundImage = `url('${selectedImage}')`;
    setShowChooseBG(false);
  };

  return (
    <div className='settings-container'>
      <div className='image-container'>
        {backgroundTiles.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt='rubber duck'
              onClick={(e) => {
                e.stopPropagation();
                handleImageClick(image);
              }}
            />
          );
        })}
      </div>
      <div className='selected-image-container'>
        <img src={selectedImage} alt='background image' />
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleImageSelect();
          }}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ChooseBGTile;
