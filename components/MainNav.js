import {Container, Nav, Navbar} from "react-bootstrap";
import Link from 'next/link'

export default function MainNav() {
    return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>Glenn Parreno</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" className="nav-link" passHref>Movies</Link>
            <Link href="/about" className="nav-link" passHref>About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br/>
    <br/>
    </>
    )
}