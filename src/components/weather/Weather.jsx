import React from 'react';
import PropTypes from 'prop-types';

import loadingGif from "images/loading.gif";
import {getSectionHeight, WEATHER_API_URL, WEATHER_API_KEY, WEATHER_API_LILLE_ID} from "../../common/util/common";

import './Weather.scss';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.getWeatherDatas();
    }

    componentDidMount() {
        document.getElementById("weather").style.height = getSectionHeight("weather") + "px";
    }

    render() {
        return (
             <div id='weather'>
                <div className='loading'>
                    <img src={loadingGif} />
                </div>
            </div>
        );
    }

    getWeatherDatas() {
        const params = {
            APPID : WEATHER_API_KEY,
            id : WEATHER_API_LILLE_ID,
            units : "metric",
            lang : "fr"
        };
        // const url = WEATHER_API_URL + "?" + Object.keys(params)
        //     .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        //     .join('&');

        const url = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';

        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
            });
    }
}

Weather.propTypes = {};

export default Weather;