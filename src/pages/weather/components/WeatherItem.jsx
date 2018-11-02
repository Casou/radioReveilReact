import React from 'react';
import PropTypes from 'prop-types';
import {openWeatherMapDataType} from "../propTypes/OpenWeatherMapJsonType";
import questionIcon from "images/weather/question.png";
import cn from "classnames";
import {parseOpenWeatherDate} from "../../../common/util/date";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import WeatherHumidity from "./WeatherHumidity";

const WeatherItem = ({dayData, hour}) => {
    const hourData = dayData.find(dayData => dayData.hour === hour);
    const isFuture = hourData && (parseOpenWeatherDate(hourData.dt) > new Date());

    return (
        <div className={ cn("weatherIcon",
            { "weatherIcon_questionMark" : !hourData },
            { "weatherIcon_past" : !isFuture }) }>
            <WeatherIcon hourData={hourData} />
            <WeatherTemperature hourData={hourData} />
            <WeatherHumidity hourData={hourData} />
        </div>
    );
};

WeatherItem.propTypes = {
    dayData : PropTypes.arrayOf(openWeatherMapDataType).isRequired,
    hour : PropTypes.number.isRequired,
};

export default WeatherItem;