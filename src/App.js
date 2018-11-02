import React from 'react';
import Header from "./common/header/Header";
import Clock from "./pages/clock/Clock";

import './common/assets/index.scss';
import './common/assets/fonts.scss';
import Weather from "./pages/weather/Weather";
import Footer from "./common/footer/Footer";

class App extends React.Component {

    render() {
        return (
            <main>
                <Header/>
                <Clock />
                <Weather/>
                <Footer />
            </main>
        )
    }
}

export default App;