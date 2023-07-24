import React, { useState, useRef } from "react";
import axios from "axios";
import BurgerIMG from "./Assets/burger 1.svg";
import Trash from "./Assets/trash.svg";
import {
  Container,
  Img,
  H1,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,
  DivButton,
  DivUsers,
  CustomerOrder,
  CustomerName,
} from "./styles";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState();
  const [name, setName] = useState();

  function newOrder() {
    setOrders([{id: Math.random(), clientOrder: order, clientName: name}])
  }
  
  function firstInputOrder(event) {
    setOrder(event.target.value);
  }
  function secondInputOrder(event) {
    setName(event.target.value);
  }

  return (
    <Container>
      <Img alt="burger-logo" src={BurgerIMG} />
      <H1>Faça seu pedido!</H1>
      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input
          placeholder="1 Coca-Cola, 1-X Salada"
          onChange={firstInputOrder}
        ></Input>
        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="Steve Jobs" onChange={secondInputOrder}></Input>
        <Button onClick={newOrder}>Novo Pedido</Button>

        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <DivUsers>
                <User>
                  <CustomerOrder>{order.clientOrder}</CustomerOrder>
                  <CustomerName>{order.clientName}</CustomerName>
                </User>
                <DivButton>
                  <button>
                    <img alt="trash-icon" src={Trash} />
                  </button>
                </DivButton>
              </DivUsers>
            </li>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
