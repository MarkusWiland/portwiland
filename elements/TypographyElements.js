import styled from 'styled-components';

export const P = styled.p`
  color: ${({ color }) => (color ? color : '#374151')};
  font-size: ${({ size }) => {
    switch (size) {
      case 'medium':
        return '1.225rem';
      case 'small':
        return '1rem';
      case 'xSmall':
        return '0.875rem';
      default:
        return '1rem';
    }
  }};
  line-height: 1.75;
  display: ${({ pos }) => (pos ? pos : '')};
`;

export const H1 = styled.h1`
  text-decoration: ${({ underline }) => {
    underline ? 'underline' : '';
  }};
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
  padding-bottom: 1rem;

  font-family: 'New Tegomin', serif;
`;
