import { useNavigate } from 'react-router-dom';
import { useChoices } from '../../context/ChoicesContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import "react-circular-progressbar/dist/styles.css";
import './Q4.css';

const Q4 = () => {
  const navigate = useNavigate();
  const { selectedHairProblems, updateChoice } = useChoices();

  const handleChoiceClick = (choice) => {
    updateChoice('hairProblems', choice);
  };

  return (
    <div className="hairproblems-page">
      <ProgressBar step={4} />
      <div className="question-container">
        <h3>Is there anything troubling you about your hair?</h3>
        <div className="choices">
          <button
            className={`choice-button ${selectedHairProblems === 'revitalised' ? 'selected' : ''}`}
            value={'revitalised'}
            onClick={() => handleChoiceClick('revitalised')}
          >
            a. Breakage
          </button>
          <button
            className={`choice-button ${selectedHairProblems === 'frizz' ? 'selected' : ''}`}
            value={'frizz'}
            onClick={() => handleChoiceClick('frizz')}
          >
            b. Frizz
          </button>
          <button
            className={`choice-button ${selectedHairProblems === 'dandruff' ? 'selected' : ''}`}
            value={'dandruff'}
            onClick={() => handleChoiceClick('dandruff')}
          >
            c. Scalp dryness
          </button>
          <button
            className={`choice-button ${selectedHairProblems === 'strength' ? 'selected' : ''}`}
            value={'strength'}
            onClick={() => handleChoiceClick('strength')}
          >
            d. Damage
          </button>
          <button
            className={`choice-button ${selectedHairProblems === 'detangle' ? 'selected' : ''}`}
            value={'detangle'}
            onClick={() => handleChoiceClick('detangle')}
          >
            e. Tangling
          </button>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <button className="next-button" onClick={() => navigate('/hair-color')}>Next question &rarr;</button>
      </div>
    </div>
  );
};

export default Q4;
