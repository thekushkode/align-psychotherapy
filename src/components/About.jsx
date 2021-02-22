import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBStreak
} from 'mdbreact';
import './AlignColors.css';
import Nav from './Nav';
import Footer from './Footer';
import align4 from '../assets/photoshoot/align4.jpg';
import headshot from '../assets/photoshoot/align11.jpg';
import Financial from './Financial';
import rocks from '../assets/align-pics/rocks.jpg';
import cups from '../assets/align-pics/cups.jpg';
import AllServicesModal from './AllServicesModal';
import InsuranceModal from './InsuranceModal';

const About = () => {
    return (
        <div>
            <header style={{ marginBottom: '100px' }}>
                <Nav />
            </header>
            <section>
                <MDBCard className="pb-5 alignlightgrey">
                    <MDBCardBody>
                        <h2 className="h1-responsive font-weight-bold black-text mirage text-center mb-5 mt-2">
                            About the Counselor
                        </h2>
                        {/* <h5 className="text-center black-text trirong-med w-responsive mx-auto mb-5">
                            I am a Licensed Professional Counselor in the state of Georgia. I received my masters in counseling psychology from the University of San Francisco. I offer a warm and collaborative therapeutic style focused on creating a safe and welcoming space where clients can feel seen and not judged, allowing for vulnerability and authentic sharing. I have an integrative approach, incorporating theoretical orientations including humanistic, psychodynamic and cognitive-behavioral modalities.
                        </h5> */}
                        <MDBRow>
                            <MDBCol lg="4">
                                <img
                                    className="img-fluid rounded"
                                    src={headshot}
                                    alt="Brittany Ellison head shot"
                                />
                                {/* <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    </MDBView> */}
                            </MDBCol>
                            <MDBCol lg="8" className='mt-3'>
                                <p className='spacing trirong-med'>
                                    I am a Licensed Professional Counselor in the state of Georgia. I received my masters in counseling psychology from the University of San Francisco. I o er a warm and collaborative therapeutic style focused on creating a safe and welcoming space where clients can feel seen and not judged, allowing for vulnerability and authentic sharing. I have an integrative approach, incorporating theoretical orientations including humanistic, psychodynamic and cognitive-behavioral modalities.
                                </p>
                                <p className='spacing trirong-med'>
                                    I believe each client is unique, and treatment should reflect their uniqueness. We will work together to tailor treatment to your specific needs. I deeply respect my clients and their innate wisdom and would count it an honor to walk with you through the journey of therapy. Thank you for reaching out for support.
                                </p>
                                <MDBBtn outline color='black'>Schedule Consultation</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </section>
            <section>
                <MDBCard className="px-1 pb-5">
                    <MDBCardBody>
                        <h2 className="h1-responsive font-weight-bold black-text mirage text-center mb-4 mt-2">
                            My Approach
                        </h2>
                        <MDBRow>
                            <MDBCol lg="3">
                                <img
                                    className="img-fluid rounded"
                                    src={cups}
                                    alt="Brittany Ellison head shot"
                                    style={{ marginTop: '100px' }}
                                />
                                {/* <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    </MDBView> */}
                            </MDBCol>
                            <MDBCol lg="6">
                                <p className='px-5 spacing trirong-thin'>
                                    I believe healing and wholeness takes a holistic and integrative approach--aligning mind, body & soul. Doing the work of therapy can be challenging as we lean into the messy parts of ourselves but understanding our blocks, trauma, and su ering is a great act of self love. Beginning this process is courageous and I want you to know you will not be alone--we will work together to navigate this journey. I believe in therapy and am honored to do this work with clients and in my own life. I specialize in life transitions, body image, perfectionism, relationships, self-empowerment, motivation, self-worth, grief/loss, anxiety/overwhelm/burnout, depression/loss/grief, emotional regulation, coping skills, identity development and boundaries.
                                </p>
                                {/* <div className="d-flex justify-content-center">
                                    <InsuranceModal />
                                    <AllServicesModal />
                                </div> */}
                            </MDBCol>
                            <MDBCol lg="3">
                                <img
                                    className="img-fluid rounded"
                                    src={rocks}
                                    alt="Brittany Ellison head shot"
                                    style={{ marginTop: '-70px' }}
                                />
                                {/* <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    </MDBView> */}
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </section>
            <section className='mt-4'>
                <MDBContainer>
                    <MDBStreak by="Carl Young" wrapperClass='white'>
                        Your vision will become clear only when you look into your heart. Who looks outside, dreams; who looks inside awakens.
                    </MDBStreak>
                </MDBContainer>
            </section>
            {/* <section>
                <MDBContainer>
                    <Financial />
                </MDBContainer>
            </section> */}
            <footer style={{ marginTop: '-25px' }}>
                <Footer />
            </footer>
        </div>
    );
}

export default About;