import React from 'react';
import Header from "./common/header/Header";
import Clock from "./components/clock/Clock";

import './common/assets/index.scss';
import './common/assets/fonts.scss';
import Weather from "./components/weather/Weather";

class App extends React.Component {

    render() {
        return (
            <main>
                <Header/>
                <Clock />
                <Weather/>
            </main>
        )
    }
}

export default App;