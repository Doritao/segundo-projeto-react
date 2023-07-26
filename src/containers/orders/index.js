import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import BurgerIMG from "../../Assets/burger-package.svg";
import Trash from "../../Assets/trash.svg";
import { useHistory } from "react-router-dom"
import {
  Img,
  Button,
  User,
  DivButton,
  DivUsers,
  CustomerOrder,
  CustomerName,
} from "./styles";
import H1 from '../../components/Title'
import Container from "../../components/Container"
import ContainerItens from '../../components/ContainerItens'
const App = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory()
  useEffect(() => {
    async function fetchOrders() {
      const { data: newORderData } = await axios.get(
        "http://localhost:3001/orders"
      );
      setOrders(newORderData);
    } //o use effect nao aceita async portanto basta criar uma funcao dentro dele para usaar o async
    fetchOrders();
  }, [orders]);
  //useEffect vai ser chamado em duas ocasioes
  //quando a pagina carregar
  //quando o estado orders for alterado

function gobackPage() {
  history.goBack();
}



  async function deleteOrder(orderID) {
    const newArrayOrders = orders.filter((order) => order.id !== orderID);
    await axios.delete("http://localhost:3001/orders/" + orderID);
    setOrders(newArrayOrders);
  }
  return (
    <Container>
      <Img alt="burger-logo" src={BurgerIMG} />
      <H1>Pedidos</H1>
      <ContainerItens>
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
        <Button onClick={gobackPage}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
