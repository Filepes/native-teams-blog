import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  background-color: #ffffff;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 205px;
  margin-left: 52px;
  margin-bottom: 150px;
`;

export const CategorySection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;
  padding: 0 120px;
  gap: 9px;
`;

export const LatestPostSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 0;
`;

export const AllPostsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1197px;
  padding: 40px 0;
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const NewsletterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
