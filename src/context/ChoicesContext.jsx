import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ChoicesContext = createContext();

export const ChoicesProvider = ({ children }) => {
  const [choices, setChoices] = useState({
    hairType: '',
    hairWash: '',
    hairBenefit: '',
    hairProblems: '',
    hairColor: '',
  });

  const [selectedHairType, setSelectedHairType] = useState('');
  const [selectedHairWash, setSelectedHairWash] = useState('');
  const [selectedHairBenefit, setSelectedHairBenefit] = useState('');
  const [selectedHairProblems, setSelectedHairProblems] = useState('');
  const [selectedHairColor, setSelectedHairColor] = useState('');

  const updateChoice = (questionKey, choice) => {
    setChoices((prevChoices) => ({
      ...prevChoices,
      [questionKey]: choice,
    }));

    switch (questionKey) {
      case 'hairType':
        setSelectedHairType(choice);
        break;
      case 'hairWash':
        setSelectedHairWash(choice);
        break;
      case 'hairBenefit':
        setSelectedHairBenefit(choice);
        break;
      case 'hairProblems':
        setSelectedHairProblems(choice);
        break;
      case 'hairColor':
        setSelectedHairColor(choice);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setSelectedHairType(choices.hairType);
    setSelectedHairWash(choices.hairWash);
    setSelectedHairBenefit(choices.hairBenefit);
    setSelectedHairProblems(choices.hairProblems);
    setSelectedHairColor(choices.hairColor);
  }, [
    choices.hairType,
    choices.hairWash,
    choices.hairBenefit,
    choices.hairProblems,
    choices.hairColor,
  ]);

  return (
    <ChoicesContext.Provider
      value={{
        choices,
        selectedHairType,
        selectedHairWash,
        selectedHairBenefit,
        selectedHairProblems,
        selectedHairColor,
        updateChoice,
      }}
    >
      {children}
    </ChoicesContext.Provider>
  );
};

ChoicesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useChoices = () => {
  return useContext(ChoicesContext);
};
