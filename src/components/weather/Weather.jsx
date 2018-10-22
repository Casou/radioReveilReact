import React from 'react';
import PropTypes from 'prop-types';

import loadingGif from "images/loading.gif";

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
             <div id='weatherComponent'>
                <div className='loading'>
                    <img src={loadingGif} />
                </div>
            </div>
        );
    }
}

Weather.propTypes = {};

export default Weather;