import React from 'react';
import PropTypes from 'prop-types';
import {openWeatherMapDataType} from "../propTypes/OpenWeatherMapJsonType";
import questionIcon from "images/weather/question.png";
import cn from "classnames";
import {parseOpenWeatherDate} from "../../../common/util/date";

const WeatherIcon = ({dayData, hour}) => {
    const getWeatherIcon = (hourData, hour) => {
        if (!hourData) return undefined;
        const iconName = hourData.weather[0].icon.replace("n", "d");
        return require(`../../../public/images/weather/white/${iconName}.png`);
    };

    const hourData = dayData.find(dayData => dayData.hour === hour);

    const weatherIcon = getWeatherIcon(hourData, hour);
    const isFuture = hourData && (parseOpenWeatherDate(hourData.dt) > new Date());

    return (
        <div className={ cn("weatherIcon",
            { "weatherIcon_questionMark" : !weatherIcon },
            { "weatherIcon_past" : !isFuture }) }>
            <img src={ weatherIcon || questionIcon} />
        </div>
    );
};

WeatherIcon.propTypes = {
    dayData : PropTypes.arrayOf(openWeatherMapDataType).isRequired,
    hour : PropTypes.number.isRequired,
};

export default WeatherIcon;