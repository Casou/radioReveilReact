import React from 'react';
import {openWeatherMapDataType} from "../propTypes/OpenWeatherMapJsonType";
import cn from 'classnames';

const WeatherTemperature = ({ hourData }) => {
    const getTemperatureClass = temperature => {
        if (temperature > 20) return "hotter";
        if (temperature > 12) return "hot";
        if (temperature > 5) return "warm";
        if (temperature > 0) return "cold";
        return "colder";
    };

    const temperature = hourData && Math.round(hourData.main.temp);

    return (
        <span className={ cn("weatherIcon_temperature", temperature && getTemperatureClass(temperature)) }>
            { temperature && temperature + "°" }
        </span>
    );
};

WeatherTemperature.propTypes = {
    hourData : openWeatherMapDataType
};

export default WeatherTemperature;