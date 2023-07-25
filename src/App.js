import React, { useState, useRef , useEffect} from "react";
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
  const inputOrder = useRef();
  const inputClientName = useRef();

  async function newOrder() {
    const { data: newOrderData } = await axios.post("http://localhost:3001/orders", {
      order: inputOrder.current.value,
      clientName: inputClientName.current.value,
    });
    setOrders((oldState) => [...oldState, newOrderData]);
    console.log(newOrderData);
  }

  useEffect(() => {
    async function fetchOrders() {
      const { data: newORderData} = await axios.get('http://localhost:3001/orders')
      setOrders(newORderData)
    }//o use effect nao aceita async portanto basta criar uma funcao dentro dele para usaar o async
    fetchOrders()
  },[])
//useEffect vai ser chamado em duas ocasioes
//quando a pagina carregar
//quando o estado orders for alterado


  function deleteOrder(orderID) {
    const newArrayOrders = orders.filter((order) => order.id !== orderID);

    setOrders(newArrayOrders);
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

        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <DivUsers>
                <User>
                  <CustomerOrder>{order.clientOrder}</CustomerOrder>
                  <CustomerName>{order.clientName}</CustomerName>
                </User>
                <DivButton>
                  <button onClick={() => deleteOrder(order.id)}>
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
