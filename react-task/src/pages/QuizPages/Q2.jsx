import { useNavigate } from "react-router-dom";
import { useChoices } from "../../context/ChoicesContext";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import "react-circular-progressbar/dist/styles.css";
import "./Q2.css";

const Q2 = () => {
  const navigate = useNavigate();
  const { selectedHairWash, updateChoice } = useChoices();

  const handleChoiceClick = (choice) => {
    updateChoice("hairWash", choice);
  };

  return (
    <div className="hairwash-page">
      <ProgressBar step={2} />
      <div className="question-container">
        <h3>How often do you wash your hair?</h3>
        <div className="choices">
          <button
            className={`choice-button ${selectedHairWash === "everyday" ? "selected" : ""}`}
            value={"everyday"}
            onClick={() => handleChoiceClick("everyday")}
          >a. Daily</button>
          <button
            className={`choice-button ${selectedHairWash === "every-other-day" ? "selected" : ""}`}
            value={"every-other-day"}
            onClick={() => handleChoiceClick("every-other-day")}
          >b. Every other day</button>
          <button
            className={`choice-button ${selectedHairWash === "twice-a-week" ? "selected" : ""}`}
            value={"twice-a-week"}
            onClick={() => handleChoiceClick("twice-a-week")}
          >c. Twice a week</button>
          <button
            className={`choice-button ${selectedHairWash === "once-a-week" ? "selected" : "" }`}
            value={"once-a-week"}
            onClick={() => handleChoiceClick("once-a-week")}
          >d. Once a week</button>
          <button
            className={`choice-button ${selectedHairWash === "every-two-weeks" ? "selected" : ""}`}
            value={"every-two-weeks"}
            onClick={() => handleChoiceClick("every-two-weeks")}
          >e. Every two weeks</button>
        </div>

        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <button className="next-button" onClick={() => navigate("/hair-benefit")}>Next question &rarr;</button>
      </div>
    </div>
  );
};

export default Q2;
