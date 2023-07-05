import { Form, Container ,Button} from "react-bootstrap";

const Formulario = () => {
    return (
        <>
        <div className='d-flex flex-column'>
        <div className='mt-3 d-flex justify-content-center'>
            <Container className='my-2'>
                <Form>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value='Mauricio'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value='Soria'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fecha de Nacimiento</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value='02/04/1998'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Correo Institucional</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value='mauriciosoria@alu.frt.utn.edu.ar'
                        />
                    </Form.Group>
                </Form>
            </Container>
            <Container className='my-2'>
                <Form>  
                    <Form.Group>
                        <Form.Label>Carrera</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccione una Opcion</option>
                            <option value="Ingenieria en Sistemas">Ingenieria en Sistemas</option>
                            <option value="Ingenieria en Electronica">Ingenieria en Electronica</option>
                            <option value="Ingenieria Mecanica">Ingenieria Mecanica</option>
                            <option value="Ingenieria Civil">Ingenieria Civil</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rol</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Seleccione una Opcion</option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Profesor">Profesor</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
                
            </Container>            
        </div>
        <Button variant='primary' className='align-self-end'>Guardar</Button>
        </div>
        </>
    );
};

export default Formulario;