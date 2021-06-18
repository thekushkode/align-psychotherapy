import React, { Component } from 'react';

class BookingScript extends Component {


    state = {
        loading: '',
        show: ''
    }

    getScript = () => {
        const targetDiv = document.getElementById("bookingScript");
        const script = document.createElement("script");
        script.id = "bookingWidget";
        script.src =
            "https://widget-cdn.simplepractice.com/assets/integration-1.0.js";
        script.type = 'text/javascript'
        targetDiv.appendChild(script);
    };

    // isLoading = () => {
    //     // this.setState({
    //     //     loading: [...this.state.loading, <Loading />]
    //     // })
    //     const timer = setTimeout(() => this.setState({ show: true }), 3000)
    //     return () => clearTimeout(timer);
    // }


    componentDidMount() {
        // this.isLoading();
        this.getScript();
        // this.setState({
        //     loading: false
        // })
        // setTimeout(() => this.setState({ show: true }), 3000)
    };

    // componentDidUpdate() {
    //     this.getScript();

    // }

    render() {
        return (
            <div>
                {/* { this.show && <Loading /> } */}
                <div id="bookingScript"></div>
                {/* { this.state.show ? <Loading /> : <div id="donationScript"></div>} */}
            </div>
        )
    }
};

export default BookingScript;