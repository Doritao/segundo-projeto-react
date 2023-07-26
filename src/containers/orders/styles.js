import styled from "styled-components";
export const Container = styled.div`
  background-color: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;
export const Img = styled.img`
  margin-bottom: 25px;
`;



export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background: rgba(255, 255, 255, 0.14);

  background: #d93856;

  text-decoration: none;
  width: 342px;
  text-align: center;
  padding: 34px 113px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5px;
  margin-top: 30px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const DivUsers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 342px;
  height: auto;
  margin-bottom: 10px;

  padding: 16px;
  background: rgba(255, 255, 255, 0.25);
  border: none;
  border-radius: 14px;
  line-height: 25px;
  margin: 1.25rem 0;
`;

export const User = styled.div`
  line-height: 25px;

  color: #fff;
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const DivButton = styled.div`
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const CustomerOrder = styled.p`
  margin-bottom: 16px;
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const CustomerName = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
