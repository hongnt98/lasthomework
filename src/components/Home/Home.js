import React, { Component } from 'react';

import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

export default class Home extends Component {
    state = {
    }
    render () {
        return (
            <div id='container'>
                <Header/>
                <div id='home' className="content-main">
                    <div className="container">
                        <h3>Home</h3>
                        <p>Proin est nulla, consectetur ut lorem sed, viverra luctus purus. Integer aliquam massa a nibh auctor, vel eleifend ex consequat. Nunc dolor odio, posuere laoreet hendrerit a, congue a ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut tempus felis. Morbi placerat ut tellus in ornare. Vestibulum ut pretium ipsum. Ut at lectus ipsum. Integer ac commodo sem.</p>
                        <p>Proin est nulla, consectetur ut lorem sed, viverra luctus purus. Integer aliquam massa a nibh auctor, vel eleifend ex consequat. Nunc dolor odio, posuere laoreet hendrerit a, congue a ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut tempus felis. Morbi placerat ut tellus in ornare. Vestibulum ut pretium ipsum. Ut at lectus ipsum. Integer ac commodo sem.</p>
                        <p>Proin est nulla, consectetur ut lorem sed, viverra luctus purus. Integer aliquam massa a nibh auctor, vel eleifend ex consequat. Nunc dolor odio, posuere laoreet hendrerit a, congue a ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut tempus felis. Morbi placerat ut tellus in ornare. Vestibulum ut pretium ipsum. Ut at lectus ipsum. Integer ac commodo sem.</p>
                        <p>Proin est nulla, consectetur ut lorem sed, viverra luctus purus. Integer aliquam massa a nibh auctor, vel eleifend ex consequat. Nunc dolor odio, posuere laoreet hendrerit a, congue a ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut tempus felis. Morbi placerat ut tellus in ornare. Vestibulum ut pretium ipsum. Ut at lectus ipsum. Integer ac commodo sem.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

