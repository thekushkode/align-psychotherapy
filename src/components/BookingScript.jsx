import { MDBBtn } from 'mdbreact';
import React, { Component } from 'react';
import './BookingScript.css'

class BookingScript extends Component {


    state = {
        loading: '',
        show: ''
    }

    render() {
        return (
            <div>
                <div>
                    <MDBBtn outline color='grey lighten-5' size='md' href="https://alignpsychotherapy.clientsecure.me"  data-spwidget-scope-id="f3c67842-b172-4f33-afae-04e02f438fe1" data-spwidget-scope-uri="alignpsychotherapy" data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" data-spwidget-scope-global data-spwidget-autobind>Request Appointment</MDBBtn>
                    <script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"></script>
                </div>
            </div>
        )
    }
};

export default BookingScript;