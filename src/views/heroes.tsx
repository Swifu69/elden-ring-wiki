import { Card, Button, Row, Col } from "react-bootstrap";
import getImageUrl from "../utilities/getImage";
import hero from './test'

function Heroes() {
  hero()
  return (
    <Row xs={1} md={2} className="g-4">
     {Array.from({ length: 4 }).map((_, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src={getImageUrl("dva")} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  );
}

export default Heroes;
