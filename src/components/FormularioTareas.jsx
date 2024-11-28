import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";

const FormularioTareas = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) =>{
    console.log(data)
  }

  return (
    <section className="container-fluid">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="escribe alguna tarea..." className="me-1" {...register('tarea', {
            required: "Debes ingresar una tarea antes de crear"
          })}/>
          <Button variant="outline-primary" type="submit">
          Crear
        </Button>
        </Form.Group>
        <Form.Text className="text-danger">
        {errors.tarea?.message}
      </Form.Text>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
