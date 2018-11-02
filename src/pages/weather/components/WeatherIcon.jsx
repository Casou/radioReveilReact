import React from 'react';
import PropTypes from 'prop-types';
import {weatherDayDatasType} from "../propTypes/OpenWeatherMapJsonType";
import questionIcon from "images/weather/question.png";
import cn from "classnames";

const WeatherIcon = ({dayData, hour}) => {
    const getWeatherIcon = (dayData, hour) => {
        const hourData = dayData.find(dayData => dayData.hour === hour);
        if (!hourData) return undefined;
        const iconName = hourData.weather[0].icon.replace("n", "d");
        return require(`../../../public/images/weather/white/${iconName}.png`);
    };

    const weatherIcon = getWeatherIcon(dayData, hour);

    return (
        <div className={ cn("weatherIcon", { "weatherIcon_questionMark" : !weatherIcon }) }>
            <img src={ weatherIcon || questionIcon} />
        </div>
    );
};

WeatherIcon.propTypes = {
    dayData : PropTypes.instanceOf(weatherDayDatasType).isRequired,
    hour : PropTypes.number.isRequired,
};

export default WeatherIcon;