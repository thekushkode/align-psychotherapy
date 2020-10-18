import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBCollapse, MDBContainer, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBIcon } from 'mdbreact';

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
                style={{ backgroundColor: 'transparent' }}
                onClick={this.toggleCollapse('navbarCollapse')}
            />
        );
        return (
            <div>
                <MDBNavbar style={{ backgroundColor: "#cea58a" }} dark scrolling expand='md' fixed='top'>
                    <MDBContainer>
                        <MDBNavbarBrand>
                            <span className='white-text'>MDBNavbar</span>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler
                            onClick={this.toggleCollapse('navbarCollapse')}
                        />
                        <MDBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <MDBNavLink to='#!'>Home</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink link to='#!'>
                                        About
                                            </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink link to='#!'>
                                        Features
                                            </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink link to='#!'>
                                        Services
                                            </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink link to='#!'>
                                        Opinions
                                            </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink link to='#!'>
                                        Team
                                            </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink link to='#!'>
                                        Contact
                                            </MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink link to='!#'>
                                        <MDBIcon fab icon='facebook' />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink link to='!#'>
                                        <MDBIcon fab icon='twitter' />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink link to='!#'>
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
