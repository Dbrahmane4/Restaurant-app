import React, { Component } from 'react'
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    }
    this.togglerNav = this.togglerNav.bind(this);
  }

  togglerNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }
  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    })
  }
  
  render() {
    const handleLogin = (e) => {
      this.toggleModal();
      alert("Username: " + this.username.value + " Password: " + this.password.value
      + " Remember: " + this.remember.checked);
      e.preventDefault();
  
    }
    return (
      <div>
           <Navbar dark expand="md">
            <div className='container'>
              <NavbarToggler onClick={this.togglerNav}></NavbarToggler>
              <NavbarBrand className='mr-auto' href="/">
                <img src='assets/images/logo.png' height="30" width="41" alt="Restaurant Application"/>
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink className="nav-link" to="/home"><span className='fa fa-home fa-lg'></span> Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/menu"><span className='fa fa-list fa-lg'></span> Menu</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/aboutus"><span className='fa fa-info fa-lg'></span> About us</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/contact"><span className='fa fa-address fa-lg'></span> Contact</NavLink>
                    </NavItem>
                  </Nav>
              </Collapse>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <Button outline onClick={() => this.toggleModal()}><span className='fa fa-sign-in fa-lg'></span> Login</Button>
                </NavItem>
              </Nav>
              
            </div>
          </Navbar>
          <Modal isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()}>
            <ModalHeader toggle={() => this.toggleModal()}>
              Login
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={(e) => handleLogin(e)}>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input type='text' id='username' name='username'
                    innerRef={(input) => this.username = input}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Input type='password' id='password' name='password'
                    innerRef={(input) => this.password = input}
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                  <Input type='checkbox' name='remember'
                    innerRef={(input) => this.remember = input}
                  />
                  Remember me
                  </Label>
                </FormGroup>
                <Button type='submit' value="submit" color="primary">Login</Button>
              </Form>
            </ModalBody>
          </Modal>

      </div>
    )
  }
}
