import styled from 'styled-components';

export const P = styled.p`
  color: ${({ color }) => (color ? color : '#f30f02')};
  font-size: ${({ size }) => {
    switch (size) {
      case 'medium':
        return '1.225rem';
      case 'small':
        return '1rem';
      case 'xSmall':
        return '0.875rem';
      default:
        return '1.225rem';
    }
  }};
`;

export const H1 = styled.h1`
  font-size: ${({ size }) => {
    switch (size) {
      case 'medium':
        return '2.225rem';
      case 'small':
        return '2rem';
      case 'xSmall':
        return '1.875rem';
      default:
        return '2.225rem';
    }
  }};
  background: linear-gradient(
    ${({ first, second }) =>
      first && second ? `${first}, ${second}` : '#3f3f3f, #eee'}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
