import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100vw;
`;
export const Img = styled.img`
  margin-bottom: 25px;
`;

export const H1 = styled.h1`
  margin-bottom: 23px;
  color: #fff;
  text-align: center;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.p`
  margin-bottom: 12px;
  color: #eee;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

export const Input = styled.input`
  display: flex;
  width: 342px;

  padding: 19px 139px 18px 15px;
  align-items: center;
  border: none;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  margin-bottom: 34px;

  color: #fff;

  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const Button = styled.button`
  background: #d93856;

  width: 342px;
  height: 68px;
  padding: 0px 113px;
  border: none;
  cursor: pointer;

  color: #fff;
  text-align: center;

  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5px; /* 14.706% */

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
  margin-top: 10px 0;

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
color: #FFF;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;
`

export const CustomerName = styled.p`
color: #FFF;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
`


