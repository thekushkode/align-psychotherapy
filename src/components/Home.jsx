import React from 'react';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer
} from 'mdbreact';
import './Home.css';
import Nav from './Nav';
import videoMp4 from '../assets/backgroundvids/alignsamplevid.mp4';
import videoOgg from '../assets/backgroundvids/alignsamplevid.ogg';
import videoWebm from '../assets/backgroundvids/alignsamplevid.webm';
import poster from '../assets/backgroundvids/alignposter.png';

class Home extends React.Component {

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
                                        Creative Agency{' '}
                                    </h3>
                                    <hr className='hr-light my-4 w-75' />
                                    <h4 className='subtext-header mt-2 mb-4'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                        deleniti consequuntur nihil.
                                    </h4>
                                    <MDBBtn outline rounded color='white'>
                                        <MDBIcon icon='home' /> Visit us
                                </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBView>

                    <MDBContainer>
                        <MDBRow className='pt-5 pb-4'>
                            <MDBCol md='12' className='text-center'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        );
    }
}

export default Home;