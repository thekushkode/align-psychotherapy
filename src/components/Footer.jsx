import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import logo from '../assets/logovertclear.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <MDBFooter className="font-small pt-4 mt-4 alignlightbrown">
            <MDBContainer fluid style={{ color: 'rgb(235, 231, 225)' }} className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="4">
                        <h4 className="title">Align Psychotherapy</h4>
                        <p>
                            Brittany Ellison, LPC
                        </p>
                        <p style={{ marginTop: '-17px' }}>Georgia License #: <b>011125</b></p>
                        {/* <p className='p-0 m-0'>1985 Riviera Drive, Suite 103-1063</p>
                        <p className='p-0 m-0'>Mount Pleasant, SC 29464</p>
                        <p className='p-0 m-0'><a style={{ color: 'black' }} href='tel:4042599479'>404.259.9479</a></p>
                        <p className='mb-4'><a style={{ color: 'black' }} href='mailto:brittany@alignpsychotherapy.co'>brittany@alignpsychotherapy.co</a></p> */}
                        {/* <MDBRow>
                            <MDBCol>
                                <p>Georgia License #: <b>011125</b></p>
                            </MDBCol>
                        </MDBRow> */}
                    </MDBCol>
                    <MDBCol md='4' className='text-center'>
                        <img src={logo} width='70px' alt='Align Psychotherapy Logo' className='img-fluid' />
                    </MDBCol>
                    <MDBCol md="4">
                        {/* <h5 className="title black-text text-right">Helpful Links</h5>
                        <ul>
                            <li className="black-text text-right list-unstyled">
                                <Link style={{ color: 'black' }} to='/about'>About</Link>
                            </li>
                            <li className="black-text mb-1 text-right list-unstyled">
                                <Link style={{ color: 'black' }} to='/virtual'>Services</Link>
                            </li>
                            <li className="black-text mb-1 text-right list-unstyled">
                                <Link style={{ color: 'black' }} to='/contact'>Contact</Link>
                            </li>
                        </ul> */}
                        <p className='p-0 m-0 text-right'>1985 Riviera Drive</p>
                        <p className='p-0 m-0 text-right'>Suite 103-1063</p>
                        <p className='p-0 m-0 text-right'>Mount Pleasant, SC 29464</p>
                        <p className='p-0 m-0 text-right'><a style={{ color: 'rgb(235, 231, 225)' }} href='tel:4042599479'>404.259.9479</a></p>
                        <p className='mb-4 text-right'><a style={{ color: 'rgb(235, 231, 225)' }} href='mailto:brittany@alignpsychotherapy.co'>brittany@alignpsychotherapy.co</a></p>
                        <div className='d-flex justify-content-end' >
                            <a  style={{ color: 'rgb(235, 231, 225)' }} className='mr-2' href='mailto:brittany@alignpsychotherapy.co'>
                                <MDBIcon fas icon='envelope' />
                            </a>
                            <a style={{ color: 'rgb(235, 231, 225)' }} href='https://www.instagram.com/alignpsychotherapy/'>
                                <MDBIcon fab icon='instagram' />
                            </a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div  className="alignbrown2 footer-copyright text-center py-3">
                <MDBContainer style={{ color: 'rgb(235, 231, 225)' }} className='d-flex justify-content-between' fluid>
                    <div>
                        &copy; {new Date().getFullYear()} Copyright: Align Psychotherapy, LLC
                    </div>
                    <div>
                        Powered By: <a style={{ color: 'white' }} href='https://www.goatwebdesigns.com'>Goat Web Designs</a>
                    </div>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;