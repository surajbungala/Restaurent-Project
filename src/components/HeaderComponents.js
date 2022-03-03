import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


class Header extends Component{
    render(){
        return(
            <React.Fragment>
            <Navbar dark>
            <div className='container'>
            <NavbarBrand href='/'>Pahadi Viyanjan Rasoi</NavbarBrand>
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