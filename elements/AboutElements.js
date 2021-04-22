import styled from 'styled-components';

export const About = styled.header`
  display: flex;

  width: 100%;
  font-size: 1.1rem;
  margin-top: 1rem;
  letter-spacing: 0.1rem;

  .about-info {
    width: 70%;
  }
  .about-img {
    width: 30%;
  }
`;
export const Lang = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
export const Languages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  > div {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    .language-icon {
      width: 50px;
      align-items: center;
      display: flex;
      background-color: #e5e5e5;
      justify-content: center;
      height: 50px;
      border-radius: 50%;
    }
    .language-info {
      padding-left: 1rem;
      > h3 {
        padding-bottom: 0.1rem;
      }
      > p {
        letter-spacing: 0.1rem;
      }
    }
  }
`;

export const GithubCard = styled.div`
  .flip-card {
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    color: black;
  }

  .flip-card-back {
    background-color: #c3c3c3;
    color: white;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
    transform: rotateY(180deg);
  }
`;
