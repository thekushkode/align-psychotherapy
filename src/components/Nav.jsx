import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBCollapse, MDBContainer, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBIcon } from 'mdbreact';
import logo from '../assets/alignhoriz.png';
import './AlignColors.css';

class Nav extends Component {
    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }

    componentWillUnmount() {
        document.querySelector('nav').style.height = 'auto';
    }

    render() {
        const { collapseID } = this.state;
        // const navStyle = { marginTop: '4rem' };
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'white' }}
                onClick={this.toggleCollapse('navbarCollapse')}
            />
        );
        return (
            <div>
                {/* <div className="navDiv d-flex justify-content-center">
                <img src={logo} alt='Align logo' className='img-fluid w-25' />
                </div> */}
                <MDBNavbar className='alignlightbrown' expand='md' fixed='top'>
                    <MDBContainer>
                        <MDBNavbarBrand>
                            <span><a href='/' ><img src={logo} alt='Align logo' style={{ width: '150px', padding: '0px', marginTop: '-5px' }}></img></a></span>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler
                            onClick={this.toggleCollapse('navbarCollapse')}
                            tag='button'
                            className='mb-4'
                        >
                            <span style={{ color: 'rgb(235, 231, 225)' }} >
                                <MDBIcon icon="bars" />
                            </span>
                        </MDBNavbarToggler>
                        <MDBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
                            <MDBNavbarNav left>
                                {/* <MDBNavItem>
                                    <MDBNavLink className='black-text' link to='/about'>
                                        About
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='black-text' link to='/services'>
                                        Virtual Therapy
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='black-text' link to='/contact'>
                                        Contact
                                    </MDBNavLink>
                                </MDBNavItem> */}
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink style={{ color: 'rgb(235, 231, 225)' }} link to='/about'>
                                        About
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink style={{ color: 'rgb(235, 231, 225)' }} link to='/virtual'>
                                        Virtual
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink style={{ color: 'rgb(235, 231, 225)' }} link to='/contact'>
                                        Contact
                                    </MDBNavLink>
                                </MDBNavItem>
                                {/* <MDBNavItem className='align-self-center'>
                                    <a className='black-text' href='mailto:brittany@alignpsychotherapy.co'>
                                        <MDBIcon fas icon='envelope' />
                                    </a>
                                </MDBNavItem>
                                <MDBNavItem className='align-self-center ml-2'>
                                    <a className='black-text' href='https://www.instagram.com/alignpsychotherapy/'>
                                        <MDBIcon fab icon='instagram' />
                                    </a>
                                </MDBNavItem> */}
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
                {collapseID && overlay}
            </div>
        )
    };
}

export default Nav;
