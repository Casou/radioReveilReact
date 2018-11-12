import React from 'react';
import PropTypes from 'prop-types';
import {weatherDayDatasType} from "../propTypes/WeatherType";
import cn from 'classnames';
import WeatherItem from "../components/WeatherItem";
import WeatherTableRow from "./WeatherTableRow";
import {isDateEquals} from "../../../common/util/date";

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

        const dayIndex = weatherDayDatas.findIndex(dayData => isDateEquals(dayData.day, new Date()));
        const firstDayData = weatherDayDatas[dayIndex];
        const secondDayData = weatherDayDatas[dayIndex + 1];

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
                    <WeatherTableRow dayData={ firstDayData } />
                    <WeatherTableRow dayData={ secondDayData } />
                </tbody>
            </table>
        );
    }
};

WeatherTable.propTypes = {
    weatherDayDatas : PropTypes.arrayOf(weatherDayDatasType).isRequired,
};

export default WeatherTable;