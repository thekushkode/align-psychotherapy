import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCollapse, MDBCollapseHeader, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import './AlignColors.css';
import calm from '../assets/faqbackground.jpg';
import Nav from "./Nav";
import Footer from "./Footer";

class FAQ extends Component {
    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return (
            <div>
                <header style={{ marginBottom: '56px' }}>
                    <Nav />
                </header>
                <div>
                    <MDBCard
                        className="card-image"
                        style={{
                            backgroundImage: "url(" + calm + ")"
                        }}
                    >
                        <div className="rgba-black-strong py-5 px-4">
                            <MDBRow className="d-flex justify-content-center">
                                <MDBCol md="10" xl="8">
                                    <MDBContainer className="accordion md-accordion accordion-5">
                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse1")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase black-text mb-0 d-flex aligncream justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4"
                                                    style={{ backgroundColor: "#fff", minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="money-check-alt"
                                                        size="2x"
                                                        className="m-3 black-text"
                                                    />
                                                </div>
                                                Financial Information
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <p className="p-md-4 mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon
                                                        officia aute, non cupidatat skateboard dolor brunch.
                                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                        wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et.
                                                    </p>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>

                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse2")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase aligncream black-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4"
                                                    style={{ backgroundColor: "#fff", minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="map-pin"
                                                        size="2x"
                                                        className="m-3 black-text"
                                                    />
                                                </div>
                                                Location
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <p className="p-md-4 mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon
                                                        officia aute, non cupidatat skateboard dolor brunch.
                                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                        wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et.
                                                    </p>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>

                                        <MDBCard className="mb-4">
                                            <MDBCollapseHeader
                                                onClick={this.toggleCollapse("collapse3")}
                                                className="p-0 z-depth-1"
                                                tag="h4"
                                                tagClassName="text-uppercase aligncream black-text mb-0 d-flex justify-content-start align-items-center"
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center mr-4"
                                                    style={{ backgroundColor: "#fff", minWidth: "100px" }}
                                                >
                                                    <MDBIcon
                                                        icon="comments"
                                                        size="2x"
                                                        className="m-3 black-text"
                                                    />
                                                </div>
                                                Counseling Types
                                            </MDBCollapseHeader>

                                            <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
                                                <MDBCardBody className="rgba-black-light white-text z-depth-1">
                                                    <p className="p-md-4 mb-0">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high
                                                        life accusamus terry richardson ad squid. 3 wolf moon
                                                        officia aute, non cupidatat skateboard dolor brunch.
                                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                                        wolf moon tempor, sunt aliqua put a bird on it squid
                                                        single-origin coffee nulla assumenda shoreditch et.
                                                    </p>
                                                </MDBCardBody>
                                            </MDBCollapse>
                                        </MDBCard>
                                    </MDBContainer>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCard>
                </div>
                <footer style={{ marginTop: '-25px' }}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default FAQ;