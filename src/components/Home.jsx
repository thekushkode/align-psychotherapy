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
import Britt from '../assets/be.jpg';
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

                <section>
                    {/* OUR STORY */}
                    <MDBCard className="px-5 pb-5">
                        <MDBCardBody>
                            <h2 className="h1-responsive font-weight-bold text-muted text-center mb-5 mt-2">
                                About the Counselor
                            </h2>
                            <p className="text-center text-muted w-responsive mx-auto mb-5">
                                Brittany Ellison is a Licensed Professional Counselor (LPC) in the State of Georgia with over 5 years of clinical experience. Brittany is a graduate of the University of San Francisco and received her masters in Counseling Psychology.
                            </p>
                            <MDBRow>
                                <MDBCol lg="4">
                                    <img
                                        className="img-fluid"
                                        src={Britt2}
                                        alt="Brittany Ellison head shot"
                                    />
                                    {/* <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    </MDBView> */}
                                </MDBCol>
                                <MDBCol lg="8">

                                    <p>
                                        I have worked with individuals and couples in various settings with a wide range of behavioral and emotional concerns including anxiety, depression, trauma, relationship & family issues, grief & loss, life transitions and identity development. I believe that our well-being is greatly impacted by early childhood experiences, our culture and our relationships with ourselves and others.<br /><br />

                                        With a warm and collaborative therapeutic style, my goal is to create a safe and welcoming space where clients can feel seen and not judged, allowing for vulnerability and authentic sharing. I have an integrative approach, incorporating theoretical orientations including humanistic, psychodynamic and cognitive-behavioral modalities.<br /><br />

                                        Each client is unique, and treatment should reflect their uniqueness. We will work together to tailor treatment to clients specific needs. I deeply respect my clients and the wisdom they already have within and would count it an honor to walk with you through the journey of therapy.<br/><br/>
                                        
                                        Thank you for reaching out for support!
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </section>

                <footer style={{ marginTop: '-25px' }}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default Home;