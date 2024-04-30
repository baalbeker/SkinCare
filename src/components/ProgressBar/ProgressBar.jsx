import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ step }) => {
  const percentage = (step / 5) * 100;
  return (
    <div className="progress-container">
      <CircularProgressbar value={percentage} text={`${step}/5`} />
    </div>
  );
};

ProgressBar.propTypes = {
  step: PropTypes.number.isRequired,
};

export default ProgressBar;
