import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Button } from './Buttons.styled';
import {
  BsEmojiSmileFill,
  BsEmojiNeutralFill,
  BsEmojiFrownFill,
} from 'react-icons/bs';

export const Buttons = ({ options, handleButtonClick }) => {
  return options.map(option => (
    <Button
      key={shortid.generate()}
      type="button"
      name={option}
      onClick={handleButtonClick}
    >
      {renderIcon(option)}
      {option}
    </Button>
  ));
};

function renderIcon(param) {
  switch (param) {
    case 'good':
      return <BsEmojiSmileFill margin-top="20px" />;
    case 'neutral':
      return <BsEmojiNeutralFill fill="green" />;
    case 'bad':
      return <BsEmojiFrownFill fill="green" />;
    default:
      throw new Error('Unexpected value of option');
  }
}

Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
