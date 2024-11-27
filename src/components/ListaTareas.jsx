import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = () => {
  return (
    <div>
      <ListGroup className="text-start" as="ol" numbered>
        <ItemTarea></ItemTarea>
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
