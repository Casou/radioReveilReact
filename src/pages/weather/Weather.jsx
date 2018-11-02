import React from 'react';
import PropTypes from 'prop-types';

import loadingGif from "images/loading.gif";
import weatherTmp from "images/weather/white/10d.png";
import {connect} from "react-redux";
import {assign} from "lodash";
import GetWeatherDataAction from "./actions/GetWeatherDataAction";
import {bindActionCreators} from "redux";
import {weatherDayDatasType} from "./propTypes/OpenWeatherMapJsonType";
import WeatherTable from "./wrappers/WeatherTable";

import './Weather.scss';

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getWeatherDataAction.getWeatherData();
    }

    render() {
        const { weatherDatas } = this.props;

        return (
             <div id='weather'>
                {
                    weatherDatas && weatherDatas.length ?
                        <WeatherTable weatherDayDatas={weatherDatas} />
                        :
                        <div className='loading'>
                            <img src={loadingGif} />
                            <img src={weatherTmp} />
                        </div>
                }
            </div>
        );
    }

}

Weather.propTypes = {
    weatherDatas: PropTypes.arrayOf(weatherDayDatasType),
};

export default connect(state => assign({}, {
    weatherDatas: state.weatherDatas
}), dispatch => ({
    getWeatherDataAction: bindActionCreators(GetWeatherDataAction, dispatch)
}))(Weather);