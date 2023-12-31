import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar({accessToken,handleAccessToken}) {
  const logOut = ()=>{
    localStorage.clear()
    handleAccessToken()
    alert('You are now logged out')
  }
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to='/'><Navbar.Brand>Igenerate</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='nav-link'>Home</Link>
            
            {accessToken?(
              <>
              <Link to="/" className="nav-link" onClick={()=>logOut()}>
                    Logout
              </Link>
              <Link to='/addItem' className='nav-link'>Add Data</Link>
              </>
            ):
            (
              <>
              <Link to='/login' className='nav-link'>Login</Link>
            <Link to='/signup' className='nav-link'>Signup</Link>
              </>
            )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar