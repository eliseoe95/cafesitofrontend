import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { crearUsuarioAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const Login = ({setUsuarioLogueado}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const {
    register,
    handleSubmit,
    formState:{errors},
    reset
} = useForm();

const onSubmit = (data)=>{
    console.log(data)
    crearUsuarioAPI(data).then((respuesta)=>{
      if(respuesta.status===201){
        Swal.fire(
          'El usuario fue creado con exito',
          'Los datos ingresados fueron cargados correctamente',
          'success'
        )
        localStorage.setItem('usuarioLogueado', JSON.stringify(data));
        setUsuarioLogueado(data);
        reset();
        handleClose();
      }else{
        Swal.fire(
          'El usuario no fue creado',
          'Los datos ingresados son incorrectos',
          'error'
        )
      }
      
      console.log(respuesta);
    });
}
  return (
    <>
      <NavLink className={"nav-item nav-link"} onClick={handleShow}>
        Registrarse
      </NavLink>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Group className="my-2" controlId="formBasicEmail">
              <Form.Label>Ingresa Un Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Eliseo"
                {...register("nombre", {
                  required: "El Nombre es obligatorio",
                  minLength: {
                    value: 2,
                    message: "La cantidad minima de caracteres debe ser 2",
                  },
                  maxLength: {
                    value: 20,
                    message: "La cantidad maxima de caracteres es 20",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="my-2" controlId="formBasicEmail">
              <Form.Label>Ingresa un Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Espindola"
                {...register("apellido", {
                  required: "El Apellido es obligatorio",
                  minLength: {
                    value: 2,
                    message: "La cantidad minima de caracteres debe ser 2",
                  },
                  maxLength: {
                    value: 20,
                    message: "La cantidad maxima de caracteres es 20",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.apellido?.message}
              </Form.Text>
            </Form.Group>
              <Form.Label>Ingresa tu Email</Form.Label>
              <Form.Control type="email" placeholder="eliseoespindola1@gmail.com" 
              {...register('email',{
                required: 'El email es obligatorio}',
                pattern:{
                  value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                  message:'El email debe ser valido'
              }
              })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="**" 
              {...register('contrasenia',{
                required: 'El contraseña es obligatorio',
                minLength:{
                  value:6,
                  
                  message:'La contraseña debe tener minimo 8, maximo 15, una mayuscula, un digito, no espacio, un caracter especial',
              }          
              })}
              />
            </Form.Group>
            <Form.Text className="text-danger">
                {errors.contrasenia?.message}
              </Form.Text>
              <hr></hr>
              <div className="text-center">
            <Button variant="danger" type="submit">
           Ingresar
            </Button>
              </div>
          </Form>
        </Modal.Body>
          <Button variant="dark" onClick={handleClose}>
            Cerrar
          </Button>
      </Modal>
    </>
  );
};

export default Login;