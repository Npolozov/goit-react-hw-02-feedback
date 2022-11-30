import shortid from 'shortid';

export const Buttons = ({ options, handleButtonClick }) => {
  return options.map(option => (
    <button
      key={shortid.generate()}
      type="button"
      name={option}
      onClick={handleButtonClick}
    >
      {option}
    </button>
  ));
};
