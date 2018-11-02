import React from 'react';
import PropTypes from 'prop-types';
import {storeWeatherType} from "../propTypes/WeatherType";
import connect from "react-redux/es/connect/connect";
import {assign} from "lodash";
import {bindActionCreators} from "redux";
import GetWeatherDataAction from "../actions/GetWeatherDataAction";

class WeatherRetrieveTime extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        const { weatherDatas } = this.props;

        return (
            <div id={"weather_retrieveTime"}>
                { weatherDatas && weatherDatas.lastRetrieveTime && weatherDatas.lastRetrieveTime.toLocaleString() }
            </div>
        );
    }

}

WeatherRetrieveTime.propTypes = {
    weatherDatas: storeWeatherType
};

export default WeatherRetrieveTime;