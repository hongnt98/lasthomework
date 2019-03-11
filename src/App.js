import React, { Component } from 'react';

import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import ContactUs from './components/ContactUs/ContactUs';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact={true} path='/' render={() => (
                        <div className="App">
                            <Home />
                        </div>
                    )}/>
                    <Route exact={true} path='/aboutus' render={() => (
                        <div className="App">
                            <AboutUs />
                        </div>
                    )}/>
                    <Route exact={true} path='/blog' render={() => (
                        <div className="App">
                            <Blog />
                        </div>
                    )}/>
                    <Route exact={true} path='/contactus' render={() => (
                        <div className="App">
                            <ContactUs />
                        </div>
                    )}/>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <TopBanner />
//         <MainContent />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;
