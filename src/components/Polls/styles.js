import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: auto;
  z-index: 2;
  height: 80px;
  width: 100%;
  background-color: gainsboro;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  h1 {
    font-size: 40px;
  }
`;

export const InfosContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  z-index: 1;
  border: 5px solid azure;
  padding: 25px;
  margin-bottom: 30px;
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  img {
    margin-bottom: 10px;
    width: 37vw;
  }
  h3 {
    line-height: 20px;
  }
  p {
    margin-top: 20px;
    line-height: 20px;
  }
`;

export const Box = styled.div`
  width: 20%;
  position: fixed;
  top: 150px;
  left: 1100px;
`;
