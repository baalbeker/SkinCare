import { useNavigate } from 'react-router-dom';
import { useChoices } from '../../context/ChoicesContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import "react-circular-progressbar/dist/styles.css";
import './Q1.css';

const Q1 = () => {
  const navigate = useNavigate();
  const { selectedHairType, updateChoice } = useChoices();

  const handleChoiceClick = (choice) => {
    updateChoice('hairType', choice);
  };

  return (
    <div className="hairtype-page">
      <ProgressBar step={1} />
      <div className="question-container">
        <h3>What&apos;s your hair type or texture?</h3>
        <div className="choices">
          <button
            className={`choice-button ${selectedHairType === 'straight' ? 'selected' : ''}`}
            value={'straight'}
            onClick={() => handleChoiceClick('straight')}
          >
            a. Straight
          </button>
          <button
            className={`choice-button ${selectedHairType === 'curly' ? 'selected' : ''}`}
            value={'curly'}
            onClick={() => handleChoiceClick('curly')}
          >
            b. Curly
          </button>
          <button
            className={`choice-button ${selectedHairType === 'wavy' ? 'selected' : ''}`}
            value={'wavy'}
            onClick={() => handleChoiceClick('wavy')}
          >
            c. Wavy
          </button>
          <button
            className={`choice-button ${selectedHairType === 'fine' ? 'selected' : ''}`}
            value={'fine'}
            onClick={() => handleChoiceClick('fine')}
          >
            d. Fine
          </button>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <button className="next-button" onClick={() => navigate('/hair-wash')}>Next question &rarr;</button>
      </div>
    </div>
  );
};

export default Q1;
