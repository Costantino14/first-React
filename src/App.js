import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MyNav from "./Components/MyNav";
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import fantasy from './Books/fantasy.json'


function App() {
  return (
    <>
      <MyNav />
      <Container className="my-3">
      <Welcome />
      <AllTheBooks books={fantasy}/>
      </Container>
      <MyFooter />
    </>
    );
}

export default App;
