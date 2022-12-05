import shortid from 'shortid';
import PropTypes from 'prop-types';
import {Button} from './Buttons.styled'

export const Buttons = ({ options, handleButtonClick }) => {
  return options.map(option => (
    <Button
      key={shortid.generate()}
      type="button"
      name={option}
      onClick={handleButtonClick}
    >
      {option}
    </Button>
  ));
};

Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
