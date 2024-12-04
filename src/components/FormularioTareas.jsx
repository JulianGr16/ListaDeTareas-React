import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { useState } from "react";

const FormularioTareas = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [arrayTareas, setArrayTareas] = useState([])

  const onSubmit = (data) =>{
    console.log(data.tarea)
    //guardar la tarea en un estado
    setArrayTareas([...arrayTareas, data.tarea])
    //limpiar el formulario 
    reset();
  }

  return (
    <section className="container-fluid">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="escribe alguna tarea..." className="me-1" {...register('tarea', {
            required: "Debes ingresar una tarea antes de crear",
            minLength: {
              value: 6,
              message : "la tarea debe tener como minimo 6 caracteres"
            },
            maxLength:{
              value:25,
              message: "la tarea debe tener como maximo 25 caracteres"
            }
          })}/>
          <Button variant="outline-primary" type="submit">
          Crear
        </Button>
        </Form.Group>
        <Form.Text className="text-danger ">
        {errors.tarea?.message}
      </Form.Text>
      </Form>
      <ListaTareas arrayTareas={arrayTareas}></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
