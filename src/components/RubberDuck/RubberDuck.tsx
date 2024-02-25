import './RubberDuck.css';

const RubberDuck = ({
  rubberDuckImage,
  setShowChooseDucky,
}: {
  rubberDuckImage: string;
  setShowChooseDucky: (show: boolean) => void;
}) => {
  return (
    <div className='rubber-duck'>
      <div className='speech-bubble'>Explain it to me!</div>
      <div className='settings-button' onClick={() => setShowChooseDucky(true)}>
        <img src={rubberDuckImage} alt='rubber duck' />
      </div>
    </div>
  );
};

export default RubberDuck;
