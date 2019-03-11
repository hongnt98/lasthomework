import React, { Component } from 'react';

import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

export default class ContactUs extends Component {
    state = {
    }
    render () {
        return (
            <div id='container'>
                <Header/>
                <div id='contactus' className="content-main">
                    <div className="container">
                        <h3>Contact Us</h3>
                        <form action="/">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            <label htmlFor="country">Country</label>
                            <select id="country" name="country">
                                <option value="vietnam">Vietnam</option>
                                <option value="thailan">Thailan</option>
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} />
                            <input type="submit" defaultValue="Submit" />
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

