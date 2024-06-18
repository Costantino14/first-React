import { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../Modules/Contexts';
import { Link } from 'react-router-dom';

function MyNav({ form , setForm }) {

  const [themeCtx, setThemeCtx] = useContext(ThemeContext) //Stato condiviso con tutti per cambiare il colore del tema

  return (
    <>
      {/*NavBar di bootstrap*/}
      <Navbar bg={themeCtx} data-bs-theme={themeCtx}>
        <Container>
          <Navbar.Brand>Epic-Book</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            
          </Nav>
          {/*Bottone per cambiare il tema*/}
          <Button variant={themeCtx === "light" ? "dark" : "light"} onClick={() => {
            themeCtx === "light" ? setThemeCtx('dark') :setThemeCtx('light')}}>
            Tema {themeCtx === "light" ? "Dark" : "Light"}
          </Button>
          {/*Barra di ricerca per i libri, cambia lo stato form*/}
          <form>
            <div>
              <input className='ms-2'
                placeholder='Cerca per titoli:'
                type="text"
                name="name" 
                value={form} 
                onChange={(e) => setForm(e.target.value)} 
              />
            </div>
          </form>
        </Container>
      </Navbar>      
    </>
  );
}

export default MyNav;