"/* eslint-disable react/jsx-pascal-case */"
import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Label,  Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { Map, GoogleApiWrapper } from 'google-maps-react';

     /********************* Validators ******************/

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component{
    constructor(props){
        super(props);
       
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }  
    
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
        // event.preventDefault();
    }
               /******************* Controlled Form  *************/  

    render(){ 
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
                        <Form model='feedback' onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor = "firstname" md={2}>First Name</Label>
                                <Col md = {6}>
                                    <Control.text model=".firstname" type='text' id='firstname' name='firstname' 
                                    placeholder = "First Name" 
                                    className='form-control'
                                    validators={{required, minLength: minLength(3), maxLength:maxLength(15)
                                    }}
                                   /> 
                                   <Errors
                                   className='text-danger'
                                   model = '.firstname'
                                   show = 'touched'
                                   messages={{required : 'Required',
                                            minLength : 'Must be greater than 2 length',
                                            maxLength : 'Must be 15 characters or less'}}
                                   />                                                    
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor = "lastname" md={2}>Last Name</Label>
                                <Col md = {6}>
                                    <Control.text model = '.lastname' id='lastname' name='lastname' 
                                    placeholder = "Last Name" 
                                    className='form-control'
                                    validators = {{required, minLength:minLength(3), maxLength:maxLength(15)
                                    }}
                                   /> 

                                   <Errors
                                   className='text-danger'
                                   model = '.lastname'
                                   show = 'touched'
                                   messages={{required : 'Required',
                                            minLength : 'Must be greater than 2 length',
                                        maxLength : 'Must be 15 characters or less'}}
                                   />                                                     
                                </Col>
                            </Row>
                            
                           <Row className='form-group'>
                                <Label htmlFor = "email" md={2}>E-mail</Label>
                                <Col md = {6}>
                                    <Control.text model = '.email' id='email' name='email' 
                                    placeholder = "example@mail.com"
                                    className='form-control' 
                                    validators={{required, validEmail}}
                                   />  

                                   <Errors
                                   className='text-danger'
                                   model = '.email'
                                   show = 'touched'
                                   messages={{
                                       required : 'Required',
                                       validEmail : 'Invalid email address'
                                   }}
                                   />                                               
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor = "telnum" md={2}>Phone Number</Label>
                                <Col md = {6}>
                                    <Control.text model = '.telnum' id='telnum' name='telnum' 
                                    placeholder = "10-digit phone number" 
                                    className='form-control'
                                    validators={{ required, maxLength:maxLength(10), isNumber
                                    }}
                                   />   
                                   <Errors
                                   className='text-danger'
                                   model = '.telnum'
                                   show="touched"
                                        messages={{
                                            required: 'Required',
                                            maxLength: 'Must be 10 digit numbers',
                                            isNumber: 'Invalid number'
                                        }}
                                   />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md = {{size : 4, offset : 2 }}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox model = '.agree' name='agree'
                                            className='form-check-input'
                                            />{''}
                                            <strong>May we contact you ?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md = {{size : 2}}>
                                    <Control.select model = '.contactType' name='contactType'
                                    placeholder='Options'
                                    className = 'form-control'>                            
                                        <option selected value = 'Options'>Select one</option>
                                        <option>Mobile</option>
                                        <option>E-mail</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md = {8}>
                                    <Control.textarea model = '.message' id='message' name='message' 
                                    className='form-control'
                                   >
                                    </Control.textarea>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size:10, offset:2}}>
                                    <Button type='submit' color='primary'>
                                        Send feedback
                                    </Button>
                                </Col>
                            </Row>
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
