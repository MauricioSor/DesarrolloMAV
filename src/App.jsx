import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Container from 'react-bootstrap/Container';
function App() {

  return (
    <Container className='my-2 d-flex justify-content-center alig-items-center'>
    <Login ></Login>
    </Container>
  )
}

export default App
