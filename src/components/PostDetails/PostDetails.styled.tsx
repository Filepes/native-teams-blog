import styled from 'styled-components';
import Image from 'next/image';

export const PostDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostContentSection = styled.section`
  width: 1440px;
  height: 947px;
  top: 142px;
  gap: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding-top: 80px;
  margin-bottom: 100px;
  
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    gap: 40px;
    padding: 40px 16px 60px;
    margin-bottom: 60px;
  }
  
  @media (max-width: 375px) {
    gap: 30px;
    padding: 20px 12px 40px;
  }
`;

export const PostHeaderContainer = styled.div`
  width: 651px;
  height: 155px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 651px;
    height: auto;
    padding: 0 16px;
  }
  
  @media (max-width: 375px) {
    gap: 8px;
    padding: 0 12px;
  }
`;

export const PostTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  color: #333333;
  margin: 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
  
  @media (max-width: 375px) {
    font-size: 28px;
    line-height: 1.3;
  }
`;

export const PostDate = styled.div`
  width: 267px;
  height: 27px;
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #666666;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 267px;
    height: auto;
  }
  
  @media (max-width: 375px) {
    font-size: 14px;
    gap: 8px;
  }
`;

export const PostImageContainer = styled.div`
  width: 1200px;
  height: 615px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 1200px;
    height: auto;
    aspect-ratio: 1200/615;
    border-radius: 12px;
  }
  
  @media (max-width: 375px) {
    border-radius: 8px;
  }
`;

export const PostImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostContentWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const PostContent = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  margin-top: 100px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
    margin-top: 60px;
  }
  
  @media (max-width: 375px) {
    padding: 0 12px;
    margin-top: 40px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #333333;
    margin: 30px 0 20px 0;
    font-weight: 700;
  }

  h1 {
    font-size: 32px;
    
    @media (max-width: 375px) {
      font-size: 24px;
    }
  }
  h2 {
    font-size: 28px;
    
    @media (max-width: 768px) {
      font-size: 24px;
    }
    
    @media (max-width: 480px) {
      font-size: 22px;
    }
  }
  h3 {
    font-size: 24px;
    
    @media (max-width: 768px) {
      font-size: 22px;
    }
    
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
  h4 {
    font-size: 20px;
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
    
    @media (max-width: 480px) {
      font-size: 17px;
    }
  }
  h5 {
    font-size: 18px;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
    
    @media (max-width: 480px) {
      font-size: 15px;
    }
  }
  h6 {
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  p {
    color: #666666;
    font-size: 16px;
    line-height: 1.6;
    margin: 16px 0;
  }

  a {
    color: #5152fb;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul,
  ol {
    color: #666666;
    font-size: 16px;
    line-height: 1.6;
    margin: 16px 0;
    padding-left: 20px;
  }

  blockquote {
    border-left: 4px solid #5152fb;
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
    color: #555555;
  }

  img {
    max-width: 807px;
    width: 100%;
    height: auto;
    margin: 20px auto;
    display: block;
    
    @media (max-width: 768px) {
      max-width: 100%;
      margin: 16px auto;
    }
    
    @media (max-width: 480px) {
      margin: 12px auto;
    }
  }

  code {
    background-color: #f5f5f5;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
  }

  pre {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 20px 0;

    code {
      background: none;
      padding: 0;
    }
  }
`;

export const LoadingWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    padding: 30px 16px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 12px;
  }
`;

export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666666;
  font-size: 18px;
  text-align: center;
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
