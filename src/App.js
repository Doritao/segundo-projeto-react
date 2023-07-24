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
  CustomerName
} from "./styles";

const App = () => {
  const [orders, setUsers] = useState([]);
  const inputOrder = useRef();
  const inputClientName = useRef();

  async function newOrder() {
    console.log(orders);
    const { data: newOrder } = await axios.post("http://localhost:3001/users", {
      order: inputOrder.current.value,
      clientName: inputClientName.current.value,
    });
    setUsers([...orders, ...newOrder]);
  }
  const users = [
    {
      id: Math.random(),
      name: "Barbecue bacon burger",
      age: 24,
    },
    {
      id: Math.random(),
      name: "BigMac EExplosao cheddar alface cru",
      age: 27,
    },
  ];

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

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <DivUsers>
                <User>
                  <CustomerOrder>{user.name}</CustomerOrder>
                  <CustomerName>{user.age}</CustomerName>
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
