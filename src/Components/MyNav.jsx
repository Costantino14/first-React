import { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../Modules/Contexts';
import { Link } from 'react-router-dom';

function MyNav({ form , setForm }) {

  const [themeCtx, setThemeCtx] = useContext(ThemeContext)

  return (
    <>
      <Navbar bg={themeCtx} data-bs-theme={themeCtx}>
        <Container>
          <Navbar.Brand>Epic-Book</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            
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