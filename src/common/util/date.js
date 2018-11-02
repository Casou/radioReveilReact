import {lpad10} from "./common";

export const parseOpenWeatherDate = timeStamp => {
    return new Date((timeStamp * 1000) - (1000 * 3600));
};

export const formatShortDate = date => {
    return lpad10(date.getDate()) + "/" + lpad10(date.getMonth());
};

export const formatTimeForDebug = seconds => {
    const parts = [];
    if (seconds / 3600 > 1) parts.push(lpad10(Math.ceil(seconds / 3600)) + "h");
    if (seconds / 60 > 1) parts.push(lpad10(Math.ceil(seconds / 60)) + "mn");
    parts.push(lpad10(seconds % 60) + "s");
    return parts.join(" ");
};

export const getNext20MinutesStep = () => {
    const date = new Date();
    if (date.getMinutes() < 20) date.setMinutes(20);
    else if (date.getMinutes() < 40) date.setMinutes(40);
    else {
        date.setMinutes(0);
        date.addHours(1);
    }
    date.setSeconds(0);
    return date;
};

Date.prototype.setToMidnight = function() {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    return this;
};

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
};
