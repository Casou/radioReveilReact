import React from 'react';
import PropTypes from 'prop-types';

const AlarmNotif = (props) => {
    const DAYS = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D'];

    return (
        <div className={"alarmNotif"}>
            <div className={"alarmTime"}></div>
            <div className={"alarmDays"}>
            { DAYS.map(d => <span className={"day"}>{ d }</span>) }
            </div>
        </div>);
};

AlarmNotif.propTypes = {};

export default AlarmNotif;