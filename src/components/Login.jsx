import { Button, Form, Card, Col,Row } from 'react-bootstrap/'
import Formulario from './Formulario'
import { useState } from 'react';
const Login = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleBuscarClick = () => {
        setMostrarFormulario(true);
        
      };
    return (
        <div>
            <Card border="primary" style={{ width: '30rem' }}>
                <Card.Body >
                    <Card.Title>Busqueda de alumno</Card.Title>
                    <Card.Text>
                        <Form.Group>
                            <Form.Label>Legajo</Form.Label>
                            <Row className='text-center'>
                            <Col>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    defaultValue="Pj. 46220"
                                />
                            </Col>
                            <Col >
                                <Button type="submit" variant="primary" onClick={handleBuscarClick}>
                                    Buscar
                                </Button>
                            </Col>
                            </Row>
                        </Form.Group>
                    </Card.Text>
                </Card.Body>
            </Card>
            {mostrarFormulario && <Formulario />}
        </div>
    );
};

export default Login;