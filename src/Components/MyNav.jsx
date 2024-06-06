import { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../Modules/Contexts';

function MyNav({ form , setForm }) {

  const [themeCtx, setThemeCtx] = useContext(ThemeContext)

  return (
    <>
      <Navbar bg={themeCtx} data-bs-theme={themeCtx}>
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Button variant="dark" onClick={() => {
            themeCtx === "light" ? setThemeCtx('dark') :setThemeCtx('light')
          }}>Tema</Button>
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