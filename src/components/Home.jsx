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
import './Home.css';
import Nav from './Nav';
import Footer from './Footer';
import videoMp4 from '../assets/backgroundvids/alignsamplevid.mp4';
import videoOgg from '../assets/backgroundvids/alignsamplevid.ogg';
import videoWebm from '../assets/backgroundvids/alignsamplevid.webm';
import poster from '../assets/backgroundvids/alignposter.png';
import Britt2 from '../assets/brittelli.jpg';

class Home extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div>
                <header style={{ marginBottom: '56px' }}>
                    <Nav />
                </header>
                <div id='videobackground'>
                    <MDBView>
                        <MDBMask className='gradient'>
                            <video className="video-intro" playsInline autoPlay muted loop poster={poster}>
                                <source src={videoOgg} type='video/ogg;codecs="vp8, vorbis"' />
                                <source src={videoMp4} type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
                                <source src={videoWebm} type='video/webm;codecs="vp8, vorbis"' />
                            </video>
                        </MDBMask>{' '}
                        <MDBContainer
                            className='d-flex justify-content-center align-items-center px-md-3 px-sm-0'
                            style={{ height: '100vh', width: '100%' }}
                        >
                            <MDBRow>
                                <MDBCol md='12' className='mb-4 white-text text-center'>
                                    <h3 className='display-3 font-weight-bold mb-0 pt-md-5'>
                                        Align Psychotherapy
                                    </h3>
                                    <hr className='hr-light my-4 w-75' />
                                    <h4 className='subtext-header mt-2 mb-4'>
                                        You are not alone in this. Schedule an appointment today.
                                    </h4>
                                    <MDBBtn outline rounded color='white'>
                                        <MDBIcon fas icon='calendar' size='lg' className='mr-1' /> Make Appointment
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

export default Home;