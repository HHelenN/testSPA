
import { Container, Row } from "react-bootstrap";

function ItemUser({id, name }) {
  return (
    <div className="item-user">
      <Container>
        <Row>
          <div className="wrapper">
            <div><span>ФИО:</span> Иванов Иван Иванович</div>
            <div><span>город:</span> Москва</div>
            <div><span>компания:</span> ООО"Звезда"</div>
          </div>
        </Row>
      </Container>
    </div>
    
  );
}

export default ItemUser;