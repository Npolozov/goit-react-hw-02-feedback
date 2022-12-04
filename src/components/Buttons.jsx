import shortid from 'shortid';
import PropTypes from 'prop-types';

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

Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
