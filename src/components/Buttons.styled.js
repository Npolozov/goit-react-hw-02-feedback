import styled from '@emotion/styled';

export const Button = styled.button`
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
