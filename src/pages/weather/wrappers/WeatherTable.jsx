import React from 'react';
import PropTypes from 'prop-types';
import {weatherDayDatasType} from "../propTypes/WeatherType";
import cn from 'classnames';
import WeatherItem from "../components/WeatherItem";

class WeatherTable extends React.Component {

    state = {
        collapsed : true
    };

    constructor(props) {
        super(props);
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
    }

    toggleCollapsed() {
        this.setState({
            ...this.state,
            collapsed : !this.state.collapsed
        });
    };

    render() {
        const { weatherDayDatas } = this.props;

        const firstDayData = weatherDayDatas[0];
        const secondDayData = weatherDayDatas[1];

        return (
            <table id={"weatherTable"} className={ cn({"collapsed" : this.state.collapsed}) }
                onClick={this.toggleCollapsed}>
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
                        <td className={"weatherTable__main_hour"}><WeatherItem dayData={firstDayData.data} hour={9} /></td>
                        <td className={"weatherTable__main_hour"}><WeatherItem dayData={firstDayData.data} hour={12} /></td>
                        <td className={"weatherTable__optional_hour"}><WeatherItem dayData={firstDayData.data} hour={15} /></td>
                        <td className={"weatherTable__main_hour"}><WeatherItem dayData={firstDayData.data} hour={18} /></td>
                        <td className={"weatherTable__optional_hour"}><WeatherItem dayData={firstDayData.data} hour={21} /></td>
                    </tr>
                    <tr className={"weatherTable__day"}>
                        <th className={"weatherTable__main_hour"}>{ secondDayData.shortDate }</th>
                        <td className={"weatherTable__main_hour"}><WeatherItem dayData={secondDayData.data} hour={9} /></td>
                        <td className={"weatherTable__main_hour"}><WeatherItem dayData={secondDayData.data} hour={12} /></td>
                        <td className={"weatherTable__optional_hour"}><WeatherItem dayData={secondDayData.data} hour={15} /></td>
                        <td className={"weatherTable__main_hour"}><WeatherItem dayData={secondDayData.data} hour={18} /></td>
                        <td className={"weatherTable__optional_hour"}><WeatherItem dayData={secondDayData.data} hour={21} /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
};

WeatherTable.propTypes = {
    weatherDayDatas : PropTypes.arrayOf(weatherDayDatasType).isRequired,
};

export default WeatherTable;