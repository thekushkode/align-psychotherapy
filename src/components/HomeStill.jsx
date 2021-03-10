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
    MDBCardBody,
    MDBStreak,
    MDBAvatar
} from 'mdbreact';
import './HomeStill.css';
import './AlignColors.css';
import Nav from './Nav';
import Footer from './Footer';
import couch from '../assets/aligncouch.jpg';
import logo from '../assets/logo-blk.png';
import align4 from '../assets/photoshoot/align4.jpg';
import keyboard from '../assets/type.jpg';
import rocks from '../assets/align-pics/rocks.jpg';
import sittype from '../assets/align-pics/sittype.jpg';
import cups from '../assets/cups.jpg';
import gldfern from '../assets/gldfern.jpg';
import vasetbl from '../assets/vasetbl.jpg';
import btltbl from '../assets/btltbl.jpg';
import mirrorflower from '../assets/mirrorflower.jpg';


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
                            style={{ height: '100vh', width: '100%', paddingTop: '1rem' }}
                        >
                            {/* <MDBRow>
                                <MDBCol md='8' className='mb-4 black-text text-center align-self-center'>
                                    <h3 className='display-3 font-weight-bold trirong-med mb-0 pt-md-5'>
                                        Align Collective
                                    </h3>
                                    <hr className='hr-dark my-4 w-75' />
                                    <h4 className='subtext-header trirong-thin mt-2 mb-4'>
                                        Psychotherapy for the mind, body, & soul.
                                    </h4>
                                    <MDBBtn outline rounded color='black'>
                                        <MDBIcon fas icon='envelope' size='lg' className='mr-1' /> Contact Us Today
                                    </MDBBtn>
                                    <div className="d-flex justify-content-center">
                                        <img src={logo} className='img-fluid' alt='align logo' />
                                    </div>
                                    <MDBBtn outline rounded color='black'>
                                        <MDBIcon fas icon='envelope' size='lg' className='mr-1' />Get In Touch
                                    </MDBBtn>
                                </MDBCol>
                                <MDBCol md='4'>
                                    <div className="d-flex justify-content-center">
                                        <img src={rocks} className='img-fluid' alt='balancing rocks' />
                                    </div>
                                </MDBCol>
                            </MDBRow> */}
                        </MDBContainer>
                    </MDBView>
                </div>
                <section>
                    {/* <MDBRow>
                        <MDBCol md='8' className='align-self-center'>
                        <p className='pl-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu faucibus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tristique tortor. Aliquam tincidunt nibh fringilla arcu mattis aliquet. Aliquam quis sem vitae felis laoreet rutrum hendrerit at eros. Mauris orci lorem, ornare at fringilla eget, facilisis eget lectus. Integer nibh dui, dictum non consequat sit amet, scelerisque eu lectus. In dapibus orci eu turpis sagittis malesuada.
                                </p>
                            <MDBBtn color='white' className='btn-rounded black-text ml-3'>Learn More</MDBBtn>
                            </MDBCol>
                        <MDBCol md='4'>
                        <img src={align4} alt='' className='d-block img-fluid p-3' />
                        </MDBCol>
                    </MDBRow> */}
                    <MDBContainer className='py-3'>

                        <MDBRow>
                            <MDBCol md="8" className='align-self-center'>
                                <h1 className='h1-responsive font-weight-bold black-text mirage'>
                                    Welcome to Align Psychotherapy!
                                </h1>
                                <hr className='hr-dark mx-1' />
                                <p className="trirong-thin">
                                    Do you feel like you have outgrown who you used to be, old ways of thinking, being and living that no longer serve you? Do you feel you are not living a life aligned with your authentic self? Do you feel stuck, hopeless, lonely, or lost? Are you seeking to know yourself better, and can envision the person you want to be but feel like they are just beyond reach?
                            </p>
                                <p className='trirong-thin'>
                                    Therapy is a powerful place to explore new ways of understanding yourself, new ways of showing up in the world and how you relate to others -- it is a space to slow down, tune in and explore your internal landscape. When we allow ourselves the opportunity to process experiences in our life from a place of compassion and curiosity we empower ourselves to make more informed choices. The self-knowledge and growth we invite into our lives creates a life more aligned with our values and goals. The greater understanding we have of our feelings, motivations, thought patterns and behaviors the greater ability for meaningful change in our lives. Sometimes all you need to do is start.
                            </p>
                                <div className="d-flex justify-content-center">
                                    <MDBBtn outline rounded color='black'>
                                        <MDBIcon fas icon='envelope' size='lg' className='mr-1' />Get In Touch
                                </MDBBtn>
                                </div>
                            </MDBCol>
                            <MDBCol md="4">
                                <img
                                    className="d-block py-2 img-fluid rounded-circle"
                                    src={align4}
                                    alt="Brittany Ellison head shot"
                                />
                                {/* <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    </MDBView> */}
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                {/* <section >
                    <div>
                        <div className='streak streak-photo streak-long-1' style={{ backgroundImage: "url(" + keyboard + ")" }}>
                            <div className='mask flex-center rgba-black-strong'>
                                <MDBContainer>
                                    <h2 className='h2-responsive text-center text-sm-center white-text trirong-med'>“Your vision will become clear only when you look into your heart. Who looks outside, dreams; who looks inside awakens.” <br /> -Carl Young</h2>
                                </MDBContainer>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className='aligncreammed'>
                    <MDBCard className="mt-5 mb-3 px-5 pb-3 text-center">
                        <MDBCardBody>
                            {/* <h2 className="h1-responsive font-weight-bold my-5">
                                Our amazing team
                            </h2>
                            <p className="grey-text w-responsive mx-auto mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                error amet numquam iure provident voluptate esse quasi, veritatis
                                totam voluptas nostrum quisquam eum porro a pariatur veniam.
                            </p> */}
                            <MDBRow className='mt-4' >

                                <MDBCol md='4' className="mb-lg-0 mb-5">
                                    <MDBAvatar
                                        tag="img"
                                        src={keyboard}
                                        className="rounded z-depth-1 img-fluid"
                                        alt="flower in bottle on table"
                                    />
                                    <h3 className="font-weight-bold mt-4 mb-3 trirong-med">Virtual Therapy</h3>
                                </MDBCol>

                                <MDBCol md='4' className="mb-lg-0 mb-5">
                                    <MDBAvatar
                                        tag="img"
                                        src={gldfern}
                                        className="rounded z-depth-1 img-fluid"
                                        alt="wheat plant in vase"
                                    />
                                    <h3 className="font-weight-bold mt-4 mb-3 trirong-med">Counseling Approach</h3>
                                </MDBCol>

                                <MDBCol md='4' className="mb-lg-0 mb-5">
                                    <MDBAvatar
                                        tag="img"
                                        src={vasetbl}
                                        className="rounded z-depth-1 img-fluid"
                                        alt="vase on table"
                                    />
                                    <h3 className="font-weight-bold mt-4 mb-3 trirong-med">Additional Resources</h3>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </section>
                <section >
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md='3'>
                                <img src={mirrorflower} alt='white clay cups' className='img-fluid rounded mb-2' style={{ marginTop: '100px' }} />
                            </MDBCol>
                            <MDBCol md='6' className='align-self-center'>
                                <MDBStreak by="Mahatma Gandhi" wrapperClass='white'>
                                    Happiness is when what you think, what you say and what you do are in harmony.
                                </MDBStreak>
                            </MDBCol>
                            <MDBCol md='3'>
                                <img src={btltbl} alt='white clay cups' className='img-fluid rounded' style={{ marginTop: '-5px' }} />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                {/* <section className='alignlightgrey'>
                    <h2 className="h1-responsive black-text mirage font-weight-bold text-center mb-3 pt-5">
                        Get Care From Anywhere!
                        </h2>
                    <hr className='hr-dark mb-5' style={{ margin: '0 100px' }} />
                    <MDBRow>
                        <MDBCol md='9'>
                            <h4 className="text-center trirong-thin black-text w-responsive mx-auto mb-5">
                                Telehealth has met the need for mental health support no matter what circumstances or challenges present to access care. Virtual therapy is a huge step forward in wellness technology and I am extremely excited to provide teletherapy to clients near and far in the states I hold a license. There are endless benefits to teletherapy--convenience being among the top.
                                </h4>
                            <a href='https://mytherapynyc.com/benefits-of-virtual-therapy/' target='_blank' rel="noopener noreferrer" ><p className="trirong-thin text-center w-responsive mx-auto mb-5">See Benefits of Virtual Therapy</p></a>
                        </MDBCol>
                        <MDBCol md='3'>
                            <img src={sittype} alt='girl sitting and typing on laptop' className='img-fluid pb-3' width='90%' />
                        </MDBCol>
                    </MDBRow>
                </section> */}
                <footer style={{ marginTop: '-25px' }}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default HomeStill;