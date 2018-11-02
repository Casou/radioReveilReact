import React from 'react';
import PropTypes from 'prop-types';
import {openWeatherMapDataType} from "../propTypes/OpenWeatherMapJsonType";
import questionIcon from "images/weather/question.png";

const WeatherIcon = ({hourData}) => {
    const getWeatherIcon = (hourData) => {
        const iconName = hourData.weather[0].icon.replace("n", "d");
        return require(`../../../public/images/weather/white/${iconName}.png`);
    };

    const weatherIcon = hourData && getWeatherIcon(hourData);

    return (
        <img src={ weatherIcon || questionIcon} />
    );
};

WeatherIcon.propTypes = {
    hourData : openWeatherMapDataType
};

export default WeatherIcon;