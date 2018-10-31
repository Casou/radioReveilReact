import React from 'react';
import PropTypes from 'prop-types';
import {weatherDayDatasType} from "../propTypes/OpenWeatherMapJsonType";
import cn from 'classnames';

const WeatherTable = (props) => {

    const getWeatherIcon = (weather) => {
        const iconName = weather.icon.replace("n", "d");
        return require(`../../../public/images/weather/white/${iconName}.png`);
    };

    const collapsed = false;

    const firstDayData = props.weatherDayDatas[0];
    const secondDayData = props.weatherDayDatas[1];

    return (
        <table id={"weatherTable"} className={ cn({"collapsed" : collapsed}) }>
            <thead>
                <tr>
                    <th> </th>
                    <th className={"weatherTable__main_hour"}>9h</th>
                    <th className={"weatherTable__main_hour"}>12h</th>
                    <th className={"weatherTable__optional_hour"}>15h</th>
                    <th className={"weatherTable__main_hour"}>18h</th>
                    <th className={"weatherTable__optional_hour"}>21h</th>
                </tr>
            </thead>
            <tbody>
                <tr className={"weatherTable__day"}>
                    <th className={"weatherTable__main_hour"}>{ firstDayData.shortDate }</th>
                    <td className={"weatherTable__main_hour"}><img src={ getWeatherIcon(firstDayData.data[0].weather[0]) } /></td>
                    <td className={"weatherTable__main_hour"}><img src={ getWeatherIcon(firstDayData.data[0].weather[0]) } /></td>
                    <td className={"weatherTable__optional_hour"}><img src={ getWeatherIcon(firstDayData.data[0].weather[0]) } /></td>
                    <td className={"weatherTable__main_hour"}>1</td>
                    <td className={"weatherTable__optional_hour"}>1</td>
                </tr>
                <tr className={"weatherTable__day"}>
                    <th className={"weatherTable__main_hour"}>{ secondDayData.shortDate }</th>
                    <td className={"weatherTable__main_hour"}>1</td>
                    <td className={"weatherTable__main_hour"}>1</td>
                    <td className={"weatherTable__optional_hour"}>1</td>
                    <td className={"weatherTable__main_hour"}>1</td>
                    <td className={"weatherTable__optional_hour"}>1</td>
                </tr>
            </tbody>
        </table>
    );
};

WeatherTable.propTypes = {
    weatherDayDatas : PropTypes.arrayOf(weatherDayDatasType).isRequired,
};

export default WeatherTable;