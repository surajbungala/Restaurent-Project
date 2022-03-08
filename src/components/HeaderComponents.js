import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
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
            </React.Fragment>
        );
    }
}

export default Header;