import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,  Button, 
    Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false,
            isModalOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }*

   

    toggleLogin(event){
        this.handleModal();
        alert("Username: " + this.username.value + " Password: " + 
               this.password.value + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
            <Navbar dark expand = "md">
            <div className='container'>
                <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className='mr-auto' href='/'>
                <img src="./assets/images/viyanjan.png" height="60" width = "65" alt='Pahadi Viyanjan Rasoi' />
            </NavbarBrand>

            <Collapse isOpen = {this.state.isNavOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/home">
                        <span className='fa fa-home fa-lg'></span> Home
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="nav-link" to="/aboutus">
                        <span className='fa fa-info fa-lg'></span> About Us
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="nav-link" to="/menu">
                        <span className='fa fa-list fa-lg'></span> Menu
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="nav-link" to="/Contact">
                        <span className='fa fa-address-card fa-lg'></span> Contact
                    </NavLink>
                </NavItem>
            </Nav>
            <Nav className='ml-auto navbar'>
                <NavItem>
                    <Button outline onClick={this.toggleModal}>
                        <span className='fa fa-sign-in fa-lg'></span> Login
                    </Button>
                </NavItem>
            </Nav>
            </Collapse>

            </div>
            </Navbar>

            <div>
                <div class = "jumbotron jumbotron-fluid">
                    <div className='row row-header'>
                        <div className='col-12 col-sm-7'>
                            <h1>Pahadi Viyanjan Rasoi</h1><br/>
                            <p>We take inspiration from the World's best 
                                cuisines(viyanjan),<br/> and create a unique fusion experience. 
                                Our lipsmacking <br/>creations will tickle your culinary senses!
                            </p>
                        </div>
                    </div>
                </div>               
            </div>
            {/************ Modal************/}
            <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal} >
                <ModalHeader  toggle={this.toggleModal}>Login form</ModalHeader>
                <ModalBody>
                    {/******** Uncontrolled Form  ********/}
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor='username'>Username</Label>
                            <Input type='text' id='username' name='username'
                            innerRef={(input) => this.username = input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='password'>Password</Label>
                            <Input type='password' id='password' name='password'
                            innerRef={(input) => this.password = input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' name='remember'
                                innerRef={(input) => this.remember = input}/>
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type='submit' value='submit' color='primary'>Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </React.Fragment>
        );
    }
}

export default Header;