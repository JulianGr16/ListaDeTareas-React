import { ListGroup } from "react-bootstrap";

const ListaTareas = () => {
  return (
    <div>
      <ListGroup className="text-start" as="ol" numbered>
        <ListGroup.Item as="li" className="bg-dark-subtle text-dark fw-light">Programar el boton de crear</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
