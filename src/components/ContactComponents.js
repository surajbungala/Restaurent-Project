import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem,Button, Form, FormGroup,FormFeedback, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            telnum : '',
            email : '',
            agree : false,
            contactType : 'Tel.',
            message : '',
            touched : {
                firstname : false,
                lastname : false,
                tel : false,
                email : false
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }  
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) =>(evt) =>{
        this.setState({
            touched :{...this.state.touched, [field]:true}
        });
    }

    validate(firstname, lastname, telnum, email){
        const errors = {
            firstname : '',
            lastname : '',
            telnum : '',
            email : ''
        };

        if(this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First name should be >= 3 characters';
        else if(this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First name should be <= 10 characters';

        if(this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Lastname should be >= 3 characters';
        else if(this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last name should be <= 10 characters';

        const reg = /^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum))
           errors.telnum = 'Should  contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
           errors.email = 'Email should conatin  @';
        
           return errors;
    }
                      /******** Controlled Form  */
                      
    render(){ 
        const errors = this.validate(this.state.firstname, 
            this.state.lastname, this.state.telnum, this.state.email)
        return(
            <div className="container">
                 <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/aboutus'>About Us</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                      <h3>Contact</h3>
                      <hr/>
                    </div>
                  </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                   
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            15D Talla Himmatpur Road<br />
                            Near Reliance Mart, Nainital<br />
                            Uttarakhand<br />
                            <i className="fa fa-phone"></i>: +9185212 34567<br />
                            <i className="fa fa-fax"></i>: +9185287 65432<br />
                            <i className="fa fa-envelope"></i>: <a href="#mailto:pahadiviyanjan@food.net">pahadiviyanjan@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                        <Map
                            google = {this.props.google}
                            style = {{width : "100%", height : "100%"}}
                            zoom  = {10}
                            initialCenter = {
                              {
                                lat : 29.214500,
                                long : 79.528600
                              }
                            }    
                        />

                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+9185212 34567"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i  className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="#mailto:pahadiviyanjan@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor = "firstname" md={2}>First Name</Label>
                                <Col md = {6}>
                                    <Input type='text' id='firstname' name='firstname' 
                                    placeholder = "First Name" 
                                    value = {this.state.firstname}
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    onBlur = {this.handleBlur('firstname')}
                                    onChange = {this.handleInputChange}/> 
                                    <FormFeedback>{errors.firstname}</FormFeedback>                   
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor = "lastname" md={2}>Last Name</Label>
                                <Col md = {6}>
                                    <Input type='text' id='lastname' name='lastname' 
                                    placeholder = "Last Name" 
                                    value = {this.state.lastname}
                                    valid = {errors.lastname ===''}
                                    invalid = {errors.lastname !==''}
                                    onBlur = {this.handleBlur('lastname')}
                                    onChange = {this.handleInputChange}/>
                                    <FormFeedback>{errors.lastname}</FormFeedback>                    
                                </Col>
                            </FormGroup>
                            
                           <FormGroup row>
                                <Label htmlFor = "email" md={2}>E-mail</Label>
                                <Col md = {6}>
                                    <Input type='email' id='email' name='email' 
                                    placeholder = "example@mail.com" 
                                    value = {this.state.email}
                                    valid = {errors.email === ''}
                                    invalid = {errors.email !== ''}
                                    onBlur = {this.handleBlur('email')}
                                    onChange = {this.handleInputChange}/>
                                    <FormFeedback>{errors.email}</FormFeedback>                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor = "telnum" md={2}>Phone Number</Label>
                                <Col md = {6}>
                                    <Input type='telnum' id='telnum' name='telnum' 
                                    placeholder = "10-digit phone number" 
                                    value = {this.state.telnum}
                                    valid = {errors.telnum === ''}
                                    invalid = {errors.telnum !== ''}
                                    onBlur = {this.handleBlur('telnum')}
                                    onChange = {this.handleInputChange}/>
                                    <FormFeedback>{errors.telnum}</FormFeedback>                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md = {{size : 4, offset : 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type='checkbox' name='agree'
                                            checked = {this.state.agree}
                                            onChange = {this.handleInputChange}/>{''}
                                            <strong>May we contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md = {{size : 2}}>
                                    <Input type='select' name='contactType'
                                    value={this.state.contactType} placeholder='Options'
                                    onChange = {this.handleInputChange}>
                                        <option selected value = 'Options'>Select one</option>
                                        <option>Mobile</option>
                                        <option>E-mail</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md = {8}>
                                    <Input type='textarea' id='message' name='message' 
                                    rows='5' value={this.state.message}
                                    onChange = {this.handleInputChange}>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type='submit' color='primary'>Send feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
    }
    

//export default Contact;
export default GoogleApiWrapper({
    apiKey : "AIzaSyC5_3QwMDh-s31Vlx9zGolYKqVmrxJa8qY"
    })(Contact);
