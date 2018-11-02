import React from 'react';

import loadingGif from "images/loading.gif";
import {connect} from "react-redux";
import {assign} from "lodash";
import GetWeatherDataAction from "./actions/GetWeatherDataAction";
import {bindActionCreators} from "redux";
import {storeWeatherType} from "./propTypes/WeatherType";
import WeatherTable from "./wrappers/WeatherTable";

import './Weather.scss';
import {formatTimeForDebug, getNext20MinutesStep} from "../../common/util/date";
import WeatherRetrieveTime from "./components/WeatherRetrieveTime";

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.initWeatherInterval = this.initWeatherInterval.bind(this);

        const next20MinutesStep = getNext20MinutesStep();
        const nextWeatherRetrieveTimeout = next20MinutesStep.getTime() - new Date().getTime();
        console.debug(`>> Next get weather data : ${ next20MinutesStep.toLocaleString()} (dans ${ formatTimeForDebug(nextWeatherRetrieveTimeout / 1000) })`);
        setTimeout(this.initWeatherInterval, nextWeatherRetrieveTimeout);
    }

    initWeatherInterval() {
        this.props.getWeatherDataAction.getWeatherData();
        setInterval(this.props.getWeatherDataAction.getWeatherData, 20 * 60 * 1000);
    }

    componentDidMount() {
        const { weatherDatas } = this.props;
        if (!weatherDatas || !weatherDatas.dataList.length) {
            this.props.getWeatherDataAction.getWeatherData();
        }
    }

    render() {
        const { weatherDatas } = this.props;

        return (
            <section id={"weather"}>
                <WeatherRetrieveTime weatherDatas={weatherDatas} />
                <div id='weather_data'>
                     {
                        weatherDatas && weatherDatas.dataList.length ?
                            <WeatherTable weatherDayDatas={weatherDatas.dataList} />
                            :
                            <div className='loading'>
                                <img src={loadingGif} />
                            </div>
                     }
                </div>
            </section>
        );
    }

}

Weather.propTypes = {
    weatherDatas: storeWeatherType
};

export default connect(state => assign({}, {
    weatherDatas: state.weatherDatas
}), dispatch => ({
    getWeatherDataAction: bindActionCreators(GetWeatherDataAction, dispatch)
}))(Weather);