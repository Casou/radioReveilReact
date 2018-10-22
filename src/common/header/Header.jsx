import React from 'react';
import PropTypes from 'prop-types';
import AlarmNotif from "./components/AlarmNotif";

import './Header.scss';

const Header = (props) => {
    return (
        <header>
            <div className="left">
                <AlarmNotif />
            </div>
            <div className="right">
                <div id="version">0.0.7</div>
            </div>
        </header>);
};

Header.propTypes = {};

export default Header;