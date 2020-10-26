import React from 'react';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody
} from 'mdbreact';
import './HomeStill.css';
import Nav from './Nav';
import Footer from './Footer';
import couch from '../assets/aligncouch.jpg';

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
                            {/* <img className='img-fluid' src={couch} alt='room with couch and 2 chairs in front of a window'/> */}
                        </MDBMask>{' '}
                        <MDBContainer
                            className='d-flex justify-content-center align-items-center px-md-3 px-sm-0'
                            style={{ height: '100vh', width: '100%' }}
                        >
                            <MDBRow>
                                <MDBCol md='12' className='mb-4 black-text text-center'>
                                    <h3 className='display-3 font-weight-bold mb-0 pt-md-5'>
                                        Align Collective
                                    </h3>
                                    <hr className='hr-dark my-4 w-75' />
                                    <h4 className='subtext-header mt-2 mb-4'>
                                        Psychotherapy for the mind, body, & soul.
                                    </h4>
                                    <MDBBtn outline rounded color='black'>
                                        <MDBIcon fas icon='envelope' size='lg' className='mr-1' /> Contact Us Today
                                </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBView>
                </div>
                <footer style={{ marginTop: '-25px' }}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default HomeStill;