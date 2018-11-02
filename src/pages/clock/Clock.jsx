import React from 'react';
import PropTypes from 'prop-types';
import {JOURS_COMPLETS, JOURS_COURTS, lpad10, MOIS_COMPLETS, MOIS_COURTS} from '../../common/util/common';

import './clock.scss';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
            styleClassName: 'digital-x'
        };

        this.incrementTime = this.incrementTime.bind(this);
        setInterval(this.incrementTime, 1000);
    }

    formatDate(date) {
        const chaine_jour = this.props.displayFullDays ? JOURS_COMPLETS : JOURS_COURTS;
        const jour_semaine = chaine_jour[date.getDay()].removeAccents();

        const jour = lpad10(date.getDate());

        const chaine_mois = this.props.displayFullMonth ? MOIS_COMPLETS : MOIS_COURTS;
        const mois = chaine_mois[date.getMonth()].removeAccents();

        return jour_semaine + ' ' + jour + ' ' + mois + ' ' + date.getFullYear();
    };

    incrementTime() {
        this.setState({
            ...this.state,
            date : new Date()
        });
    }

    render() {
        const { date, styleClassName } = this.state;

        return (
            <section id={"clock"} className={styleClassName}>
                <div id="digitalClockLayout">
                    <div id="digitalClock">
                        <div className="date">{ this.formatDate(date) }</div>
                        <div className="timer">
                            <span className="mainTimer">
                                { lpad10(date.getHours()) }:{ lpad10(date.getMinutes()) }
                            </span>
                            <span className="second">
                                { lpad10(date.getSeconds()) }
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Clock.propTypes = {
    displayDate : PropTypes.bool,
    displayFullDays : PropTypes.bool,
    displayFullMonth : PropTypes.bool
};

Clock.defaultProps = {
    displayDate : true,
    displayFullDays : true,
    displayFullMonth : false
};

export default Clock;