import styled from 'styled-components';

export const Section = styled.section`
  margin: 1rem 0rem;
`;

export const DivFlex = styled.div`
  display: flex;
  align-items: center;
`;

// POST

export const PostSection = styled.div`
  width: 100%;

  margin: 1rem 0rem;
  padding: 0.5rem;

  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  .post-postImg {
    max-width: 250px;
    min-width: 250px;
    height: 100%;
    position: relative;
  }
  .post-postImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translateX(-3rem);
    border-radius: 0.8rem;
  }

  .post-postInfo {
    width: 100%;
    height: 100%;
  }
  .post-date {
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 2rem;
  }
  .post-title {
    font-size: 1.4rem;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 1);
  }
  .post-excerpt {
    margin-bottom: 3rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.7);
  }
  .post-cta {
    padding: 1rem 1.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 1rem;
    border-radius: 0.4rem;
    background-color: rgba(224, 224, 224, 0.4);
    border: 1px solid rgba(180, 180, 180, 0.3);
    font-weight: bold;
    text-decoration: none;
  }
`;

export const Post = styled.div`
  display: flex;
`;

// SLUG POST
export const Article = styled.div`
  width: 100%;

  margin: 0 auto;
  .article-imgBox {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  .article-imgBox img {
    max-width: 100%;
    width: 100%;
    z-index: -1;
    height: 500px;
    object-fit: cover;
    border-radius: 4px;
  }
  .article-imgBox::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: inset 0 4rem 3rem rgba(0, 0, 0, 0.7);
  }
  .article-content {
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
    z-index: 10;
    background-color: #fcfcfc;
    margin-top: -80px;
    border-radius: 4px;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
  }
  .article-title {
    margin-bottom: 0.5rem;
  }
  .article-author {
    padding: 0 0.5rem;
  }
  .article-date {
    font-style: italic;
  }
  .article-excerpt {
    display: block;
    padding: 1rem 0rem;
    font-size: 1.1rem;
  }
  .article-body {
  }
`;
