import { useNavigate } from 'react-router-dom';
import { useChoices } from '../../context/ChoicesContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import "react-circular-progressbar/dist/styles.css";
import './Q3.css';

const Q3 = () => {
  const navigate = useNavigate();
  const { selectedHairBenefit, updateChoice } = useChoices();

  const handleChoiceClick = (choice) => {
    updateChoice('hairBenefit', choice);
  };

  return (
    <div className="hairbenefit-page">
      <ProgressBar step={3} />
      <div className="question-container">
        <h3>What benefit do you look for in your hair products?</h3>
        <div className="choices">
          <button
            className={`choice-button ${selectedHairBenefit === 'strong' ? 'selected' : ''}`}
            value={'strong'}
            onClick={() => handleChoiceClick('strong')}
          >
            a. Anti-breakage
          </button>
          <button
            className={`choice-button ${selectedHairBenefit === 'hydration' ? 'selected' : ''}`}
            value={'hydration'}
            onClick={() => handleChoiceClick('hydration')}
          >
            b. Hydration
          </button>
          <button
            className={`choice-button ${selectedHairBenefit === 'dandruff' ? 'selected' : ''}`}
            value={'dandruff'}
            onClick={() => handleChoiceClick('dandruff')}
          >
            c. Soothing dry scalp
          </button>
          <button
            className={`choice-button ${selectedHairBenefit === 'repair' ? 'selected' : ''}`}
            value={'repair'}
            onClick={() => handleChoiceClick('repair')}
          >
            d. Repairs the appearance of damaged hair
          </button>
          <button
            className={`choice-button ${selectedHairBenefit === 'volume' ? 'selected' : ''}`}
            value={'volume'}
            onClick={() => handleChoiceClick('volume')}
          >
            e. Volume
          </button>
          <button
            className={`choice-button ${selectedHairBenefit === 'curl' ? 'selected' : ''}`}
            value={'curl'}
            onClick={() => handleChoiceClick('curl')}
          >
            f. Curl and coil enhancing
          </button>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <button className="next-button" onClick={() => navigate('/hair-problems')}>Next question &rarr;</button>
      </div>
    </div>
  );
};

export default Q3;
