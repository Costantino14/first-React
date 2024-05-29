import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import MyNav from "./Components/MyNav";
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import fantasy from './Books/fantasy.json';
import history from './Books/history.json';
import romance from './Books/romance.json';
import horror from './Books/horror.json';
import scifi from './Books/scifi.json';



function App() {

  let [type, setType] = useState('fantasy');
  return (
    <>
      <MyNav />
      <Container className="my-3">
      <Welcome />
      <Button className='m-2' variant='dark' onClick={() => setType('history')}>Storico</Button>
      <Button className='m-2' variant='dark' onClick={() => setType('fantasy')}>Fantasia</Button>
      <Button className='m-2' variant='dark' onClick={() => setType('horror')}>Horror</Button>
      <Button className='m-2' variant='dark' onClick={() => setType('romance')}>Romantico</Button>
      <Button className='m-2' variant='dark' onClick={() => setType('scifi')}>scifi</Button>
      
      {type === 'history' && <AllTheBooks books={history}/>}
      {type === 'fantasy' && <AllTheBooks books={fantasy}/>}
      {type === 'horror' && <AllTheBooks books={horror}/>}
      {type === 'romance' && <AllTheBooks books={romance}/>}
      {type === 'scifi' && <AllTheBooks books={scifi}/>}
      </Container>
      <MyFooter />
    </>
    );
}

export default App;
