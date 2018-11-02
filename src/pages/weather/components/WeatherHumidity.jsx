import React from 'react';
import {openWeatherMapDataType} from "../propTypes/WeatherType";
import cn from 'classnames';

const WeatherHumidity = ({ hourData }) => {
    const getHumidityClass = humidity => {
        if (humidity > 80) return "humidity_80";
        if (humidity > 60) return "humidity_60";
        if (humidity > 40) return "humidity_40";
        if (humidity > 20) return "humidity_20";
        return "humidity_0";
    };

    const humidity = hourData && Math.round(hourData.main.humidity);

    return (
        <span className={ cn("weatherIcon_humidity", humidity && getHumidityClass(humidity)) }>
            { humidity && humidity + "%" }
        </span>
    );
};

WeatherHumidity.propTypes = {
    hourData : openWeatherMapDataType
};

export default WeatherHumidity;