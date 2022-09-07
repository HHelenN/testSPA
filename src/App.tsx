import React from 'react';
import './App.scss';

import ItemUser from "./components/ItemUser";

import { Container, Row, Col, Button } from "react-bootstrap";


function App() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col className="sort" md={3}>
            {/*<div className="sort">*/}
              <div>Сортировка</div>
              <Button>по городу</Button>
              <Button>по компании</Button>
            {/*</div>*/}
          </Col>
          <Col md={7}>
            <div className="list-users">
              <div className="title">Список пользователей</div>
              <ItemUser />
              <ItemUser />
              <ItemUser />
              <div className="find-users">Найдено 20 пользователей</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
