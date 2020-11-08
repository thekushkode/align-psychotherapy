import React, { useState, useEffect } from 'react';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBAnimation
} from 'mdbreact';
import './Home3.css';
import './AlignColors.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Financial from './Financial';
import Nav from './Nav';
import align17 from '../assets/photoshoot/align17.jpg';
import align4 from '../assets/photoshoot/align4.jpg';
import align15 from '../assets/photoshoot/align15.jpg';
import align9 from '../assets/photoshoot/align9.jpg';

const Home3 = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <header>
                <Nav />

            </header>
            <div id='classicformpage'>
                <MDBView>
                    <MDBMask className='d-flex justify-content-center align-items-center gradient' />
                    <MDBContainer
                        style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                        className='mt-1 d-flex justify-content-center align-items-center'
                    >
                        <MDBRow>
                            <MDBAnimation
                                type='fadeInLeft'
                                delay='.3s'
                                className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'
                            >
                                <h1 className='h1-responsive font-weight-bold black-text'>
                                    Align Collective Therapy
                                </h1>
                                <hr className='hr-light' />
                                <h6 className='mb-4 black-text'>
                                    Psychotherapy for the mind, body, & soul. Use our form to book your FREE 30-minute consultation today.
                                </h6>
                                <MDBBtn outline color='black'>
                                    <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>Services</Link>
                                </MDBBtn>
                            </MDBAnimation>

                            <MDBCol md='6' xl='5' className='mb-4'>
                                <MDBAnimation type='fadeInRight' delay='.3s'>
                                    <MDBCard id='classic-card'>
                                        {/* <form> */}
                                        <MDBCardBody className='white-text'>
                                            <h3 className='text-center'>
                                                <MDBIcon icon='calendar' /> Book Today!
                                            </h3>
                                            <hr className='hr-light' />

                                            <MDBInput
                                                className='white-text form-control'
                                                iconClass='white-text'
                                                label='Name'
                                                icon='user'
                                                type='email'
                                                name='email'
                                                containerClass="text-left"
                                            // onChange={(e) => { setEmail(e.target.value) }}
                                            // required
                                            />
                                            <MDBInput
                                                className='white-text form-control'
                                                iconClass='white-text'
                                                label='Email'
                                                icon='envelope'
                                                type='password'
                                                name='password'
                                                containerClass="text-left"
                                            // onChange={(e) => { setPassword(e.target.value) }}
                                            // required
                                            />

                                            <div className='text-center mt-4 black-text'>
                                                <MDBBtn className='aligncream black-text' >Submit</MDBBtn>
                                                <hr className='hr-light' />
                                                <div className='text-center d-flex justify-content-center white-label'>
                                                    <a href='https://twitter.com/socialhoundco' target='_blank' rel="noopener noreferrer" className='p-2 m-2'>
                                                        <MDBIcon
                                                            fab
                                                            icon='twitter'
                                                            className='white-text'
                                                        />
                                                    </a>
                                                    <a href='https://www.facebook.com/SocialHound-110112560760116' target='_blank' rel="noopener noreferrer" className='p-2 m-2'>
                                                        <MDBIcon
                                                            fab
                                                            icon='facebook'
                                                            className='white-text'
                                                        />
                                                    </a>
                                                    <a href='https://www.instagram.com/socialhound.co.beta/' target='_blank' rel="noopener noreferrer" className='p-2 m-2'>
                                                        <MDBIcon
                                                            fab
                                                            icon='instagram'
                                                            className='white-text'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBAnimation>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
                <section className='alignlightblue'>
                    <MDBRow>
                        <MDBCol md='4'>
                            <img src={align17} alt='' className='d-block img-fluid p-3' />
                        </MDBCol>
                        <MDBCol md='8' className='align-self-center'>
                            <p className='pr-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu faucibus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tristique tortor. Aliquam tincidunt nibh fringilla arcu mattis aliquet. Aliquam quis sem vitae felis laoreet rutrum hendrerit at eros. Mauris orci lorem, ornare at fringilla eget, facilisis eget lectus. Integer nibh dui, dictum non consequat sit amet, scelerisque eu lectus. In dapibus orci eu turpis sagittis malesuada.
                            </p>
                            <MDBBtn color='white' className='btn-rounded black-text'>Learn More</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </section>
                <section className='alignlightgrey'>
                    <MDBRow>
                        <MDBCol md='8' className='align-self-center'>
                            <p className='pl-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu faucibus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tristique tortor. Aliquam tincidunt nibh fringilla arcu mattis aliquet. Aliquam quis sem vitae felis laoreet rutrum hendrerit at eros. Mauris orci lorem, ornare at fringilla eget, facilisis eget lectus. Integer nibh dui, dictum non consequat sit amet, scelerisque eu lectus. In dapibus orci eu turpis sagittis malesuada.
                            </p>
                            <MDBBtn color='white' className='btn-rounded black-text ml-3'>Learn More</MDBBtn>
                        </MDBCol>
                        <MDBCol md='4'>
                            <img src={align4} alt='' className='d-block img-fluid p-3' />
                        </MDBCol>
                    </MDBRow>
                </section>
                <section className='aligncream'>
                    <MDBRow>
                        <MDBCol md='4'>
                            <img src={align15} alt='' className='d-block img-fluid p-3' />
                        </MDBCol>
                        <MDBCol md='8' className='align-self-center'>
                            <p className='pr-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu faucibus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tristique tortor. Aliquam tincidunt nibh fringilla arcu mattis aliquet. Aliquam quis sem vitae felis laoreet rutrum hendrerit at eros. Mauris orci lorem, ornare at fringilla eget, facilisis eget lectus. Integer nibh dui, dictum non consequat sit amet, scelerisque eu lectus. In dapibus orci eu turpis sagittis malesuada.
                            </p>
                            <MDBBtn color='white' className='btn-rounded black-text'>Learn More</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </section>
                <section className='alignlightbrown'>
                    <MDBRow>
                        <MDBCol md='8' className='align-self-center'>
                            <p className='pl-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu faucibus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tristique tortor. Aliquam tincidunt nibh fringilla arcu mattis aliquet. Aliquam quis sem vitae felis laoreet rutrum hendrerit at eros. Mauris orci lorem, ornare at fringilla eget, facilisis eget lectus. Integer nibh dui, dictum non consequat sit amet, scelerisque eu lectus. In dapibus orci eu turpis sagittis malesuada.
                            </p>
                            <MDBBtn color='white' className='btn-rounded black-text ml-3'>Learn More</MDBBtn>
                        </MDBCol>
                        <MDBCol md='4'>
                            <img src={align9} alt='' className='d-block img-fluid p-3' />
                        </MDBCol>
                    </MDBRow>
                </section>
                <MDBContainer>
                    <Financial />
                </MDBContainer>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home3;