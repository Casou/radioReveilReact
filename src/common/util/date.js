import {lpad10} from "./common";

export const parseOpenWeatherDate = timeStamp => {
    return new Date((timeStamp * 1000) - (1000 * 3600));
};

export const formatShortDate = date => {
    return lpad10(date.getDate()) + "/" + lpad10(date.getMonth());
};

Date.prototype.setToMidnight = function() {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    return this;
};