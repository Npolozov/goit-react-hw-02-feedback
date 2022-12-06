import styled from '@emotion/styled';

export const Button = styled.button`
  svg {
    margin-right: 20px;
  }
  background-color: ${props => {
    switch (props.name) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'yellow';
      case 'bad':
        return 'red';
      default:
        return 'black';
    }
  }};
`;
