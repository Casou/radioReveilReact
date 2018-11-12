import React from 'react';
import WeatherItem from "../components/WeatherItem";
import {weatherDayDatasType} from "../propTypes/WeatherType";

const WeatherTableRow = ({dayData}) => {
    return (
        <tr className={"weatherTable__day"}>
            <th className={"weatherTable__main_hour"}>{ dayData.shortDate }</th>
            <td className={"weatherTable__main_hour"}><WeatherItem dayData={dayData.data} hour={9} /></td>
            <td className={"weatherTable__main_hour"}><WeatherItem dayData={dayData.data} hour={12} /></td>
            <td className={"weatherTable__optional_hour"}><WeatherItem dayData={dayData.data} hour={15} /></td>
            <td className={"weatherTable__main_hour"}><WeatherItem dayData={dayData.data} hour={18} /></td>
            <td className={"weatherTable__optional_hour"}><WeatherItem dayData={dayData.data} hour={21} /></td>
        </tr>
    );
};

WeatherTableRow.propTypes = {
    dayData : weatherDayDatasType.isRequired
};

export default WeatherTableRow;