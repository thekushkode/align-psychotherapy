import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBCollapse, MDBContainer, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBIcon } from 'mdbreact';
import logo from '../assets/alignlogo.png';

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
                <MDBNavbar style={{ backgroundColor: "#F1F6F7" }} expand='md' fixed='top'>
                    <MDBContainer>
                        <MDBNavbarBrand>
                            <span><a href='/' style={{ color: "white" }}><img src={logo} alt='Align logo' style={{ width: '100px', padding: '0px', marginTop: '-5px' }}></img></a></span>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler
                            onClick={this.toggleCollapse('navbarCollapse')}
                            tag='button'
                            className='mb-4'
                        >
                            <span className="black-text">
                                <MDBIcon icon="bars" />
                            </span>
                        </MDBNavbarToggler>
                        <MDBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <MDBNavLink className='black-text' link to='/about'>
                                        About
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='black-text' link to='/services'>
                                        Services
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='black-text' link to='/faq'>
                                        FAQ
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='black-text' link to='/contact'>
                                        Contact
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink className='black-text' link to='!#'>
                                        <MDBIcon fas icon='envelope' />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='black-text' link to='!#'>
                                        <MDBIcon fab icon='facebook' />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='black-text' link to='!#'>
                                        <MDBIcon fab icon='twitter' />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className='black-text' link to='!#'>
                                        <MDBIcon fab icon='instagram' />
                                    </MDBNavLink>
                                </MDBNavItem>
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
