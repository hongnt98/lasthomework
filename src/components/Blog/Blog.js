import React, { Component } from 'react';

import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

export default class Blog extends Component {
    state = {
    }
    render () {
        return (
            <div id='container'>
                <Header/>
                <div id='blog' className="content-main">
                    <div className="container">
                        <h3>Blog</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper, tellus dapibus facilisis euismod, ante purus venenatis nunc, et accumsan massa nisl placerat purus. Etiam finibus iaculis orci imperdiet vehicula. Aliquam erat volutpat. Etiam vel elit nec magna vestibulum gravida sed non urna. Nullam scelerisque at mi sed auctor. Praesent rutrum sem id leo commodo viverra. Duis cursus ante dui, at semper orci ullamcorper eu. Aliquam vitae neque sed tortor pulvinar pharetra in id nisi. In hac habitasse platea dictumst. Phasellus aliquam ligula non quam fringilla, nec feugiat neque posuere.</p>
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

