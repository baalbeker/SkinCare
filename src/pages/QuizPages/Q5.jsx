import { useNavigate } from 'react-router-dom';
import { useChoices } from '../../context/ChoicesContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import "react-circular-progressbar/dist/styles.css";
import './Q5.css';

const Q5 = () => {
  const navigate = useNavigate();
  const { selectedHairColor, updateChoice } = useChoices();

  const handleChoiceClick = (choice) => {
    updateChoice('hairColor', choice);
  };

  return (
    <div className="haircolor-page">
      <ProgressBar step={5} />
      <div className="question-container">
        <h3>What is your natural hair color(s) today?</h3>
        <div className="choices">
          <button
            className={`choice-button ${selectedHairColor === 'black' ? 'selected' : ''}`}
            value={'black'}
            onClick={() => handleChoiceClick('black')}
          >
            a. Black
          </button>
          <button
            className={`choice-button ${selectedHairColor === 'brown' ? 'selected' : ''}`}
            value={'brown'}
            onClick={() => handleChoiceClick('brown')}
          >
            b. Brown
          </button>
          <button
            className={`choice-button ${selectedHairColor === 'blonde' ? 'selected' : ''}`}
            value={'blonde'}
            onClick={() => handleChoiceClick('blonde')}
          >
            c. Blonde
          </button>
          <button
            className={`choice-button ${selectedHairColor === 'red-orange' ? 'selected' : ''}`}
            value={'red-orange'}
            onClick={() => handleChoiceClick('red-orange')}
          >
            d. Red/Orange
          </button>
          <button
            className={`choice-button ${selectedHairColor === 'silver-gray' ? 'selected' : ''}`}
            value={'silver-gray'}
            onClick={() => handleChoiceClick('silver-gray')}
          >
            e. Silver/Gray
          </button>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <button className="next-button" onClick={() => navigate('/results')}>Discover your results &rarr;</button>
      </div>
    </div>
  );
};

export default Q5;
