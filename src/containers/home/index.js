import React, { useState, useRef} from "react";
import axios from "axios";
import BurgerIMG from "../../Assets/burger 1.svg";
import { useHistory } from "react-router-dom"
import {
  Img,
  InputLabel,
  Input
} from "./styles";
import Button from '../../components/Button'
import H1 from '../../components/Title'
import Container from "../../components/Container"
import ContainerItens from '../../components/ContainerItens'
const App = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory()
  const inputOrder = useRef();
  const inputClientName = useRef();
  console.log(history)

  async function newOrder() {
    const { data: newOrderData } = await axios.post("http://localhost:3001/orders", {
      clientOrder: inputOrder.current.value,
      clientName: inputClientName.current.value,
    });
    setOrders((oldState) => [...oldState, newOrderData]);
    console.log(newOrderData);
    history.push('/orders')
  }

  return (
    <Container>
      <Img alt="burger-logo" src={BurgerIMG} />
      <H1>Faça seu pedido!</H1>
      <ContainerItens>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder="1 Coca-Cola, 1-X Salada" ref={inputOrder}></Input>
        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="Steve Jobs" ref={inputClientName}></Input>
        <Button onClick={newOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
