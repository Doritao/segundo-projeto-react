import styled from 'styled-components'

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

  ${props => props.isBlack && `
  
  background: rgba(255, 255, 255, 0.14);
  `}
`;