import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNav({ form , setForm }) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
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