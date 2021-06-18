import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBAvatar
} from 'mdbreact';
import './HomeStill.css';
import './AlignColors.css';
import Nav from './Nav';
import Footer from './Footer';
import align4 from '../assets/photoshoot/align4.jpg';
import keyboard from '../assets/type.jpg';
import gldfern from '../assets/tinychair.jpg';
import vasetbl from '../assets/vasetbl.jpg';
import ghandi from '../assets/ghandi.jpg';
import BookingScript from './BookingScript';


class HomeStill extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div>
                <header style={{ marginBottom: '56px' }}>
                    <Nav />
                </header>
                <div id='apppage'>
                    <MDBView>
                        <MDBMask className='gradient'>
                        </MDBMask>{' '}
                        <MDBContainer
                            className='d-flex justify-content-center align-items-center px-md-3 px-sm-0'
                            style={{ height: '100vh', width: '100%', paddingTop: '1rem' }}
                        >
                            
                        </MDBContainer>
                    </MDBView>
                </div>
                <section>
                    <div style={{ background: 'rgb(235, 228, 212)' }} className='px-5 py-3'>

                        <MDBRow>
                            <MDBCol md="4">
                                <img
                                    className="d-block py-2 img-fluid rounded"
                                    src={align4}
                                    alt="Brittany Ellison head shot"
                                />
                            </MDBCol>
                            <MDBCol md="8" className='align-self-center'>
                                <h1 className='h1-responsive font-weight-bold black-text mirage'>
                                    Welcome to Align Psychotherapy
                                </h1>
                                <hr className='hr-dark mx-1' />
                                <p className="trirong-thin">
                                    Does it feel like you have outgrown who you used to be? Are you feeling stuck in your thoughts, behaviors or patterns? Do you feel hopeless, lonely, or lost? Are you seeking to know yourself better and live a happier & more fulfilling life?
                                </p>
                                <p className='trirong-thin'>
                                    Therapy is a powerful place to explore new ways of understanding ourselves, how we show up in the world and how we relate to ourselves and those around us -- it is a space to pause, focus inward and explore our internal world. When we allow ourselves the opportunity to process experiences in our life from a place of compassion and curiosity we empower ourselves to make more informed and conscious choices. The greater understanding we have of our feelings, motivations, thought patterns and behaviors the greater ability for meaningful change in our lives. The self-knowledge and growth we invite in creates a life more aligned with our values, goals and authentic self.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <Link to='/contact'>
                                        <MDBBtn outline color='grey lighten-5' className='' size="lg">
                                            Get In Touch
                                        </MDBBtn>
                                    </Link>
                                    <BookingScript />
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </section>
                <section className=''>
                    <MDBCard className="px-5 pb-3 text-center alignpoopbrown">
                        <MDBCardBody>
                            <MDBRow className='mt-4' >

                                <MDBCol md='4' className="mb-lg-0 mb-5">
                                    <Link to='/virtual' style={{ color: 'rgb(235, 231, 225)' }}>
                                        <MDBAvatar
                                            tag="img"
                                            src={keyboard}
                                            className="rounded z-depth-1 img-fluid"
                                            alt="flower in bottle on table"
                                        />
                                        <h3 className="font-weight-bold mt-4 mb-3 trirong-med">Virtual Therapy</h3>
                                    </Link>
                                </MDBCol>

                                <MDBCol md='4' className="mb-lg-0 mb-5">
                                    <Link to='/about' style={{ color: 'rgb(235, 231, 225)' }}>
                                        <MDBAvatar
                                            tag="img"
                                            src={gldfern}
                                            className="rounded z-depth-1 img-fluid"
                                            alt="wheat plant in vase"
                                        />
                                        <h3 className="font-weight-bold mt-4 mb-3 trirong-med">Counseling Approach</h3>
                                    </Link>
                                </MDBCol>

                                <MDBCol md='4' className="mb-lg-0 mb-5">
                                    <a href='https://mytherapynyc.com/benefits-of-virtual-therapy/' style={{ color: 'rgb(235, 231, 225)' }} target='_blank' rel="noopener noreferrer" >
                                        <MDBAvatar
                                            tag="img"
                                            src={vasetbl}
                                            className="rounded z-depth-1 img-fluid"
                                            alt="vase on table"
                                        />
                                        <h3 className="font-weight-bold mt-4 mb-3 trirong-med">Additional Resources</h3>
                                    </a>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </section>
                <section style={{ backgroundColor: 'white' }} className='text-center'>
                    <img className='img-fluid w-50 py-4' src={ghandi} alt='Quote by Ghandi' />
                </section>
                <footer style={{ marginTop: '-25px' }}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default HomeStill;