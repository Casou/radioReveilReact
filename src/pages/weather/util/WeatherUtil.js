import {formatShortDate, isDateEquals, parseOpenWeatherDate} from "../../../common/util/date";
import {weatherDatas} from "../reducers/WeatherDataReducer";
import PropTypes from "prop-types";

export const reduceWeatherDatas = (newWeatherDatas) => {
    const reducedData = newWeatherDatas.list.reduce((accumulator, currentValue) => {
        const currentDataDay = parseOpenWeatherDate(currentValue.dt).setToMidnight();

        const dayDataList = accumulator[currentDataDay] || {day: currentDataDay, data: []};
        dayDataList.shortDate = formatShortDate(currentDataDay);
        dayDataList.data.push(mapWeatherData(currentValue));
        accumulator[currentDataDay] = dayDataList;

        return accumulator;
    }, {});

    return Object.values(reducedData);
};

export const mixWeatherDatas = (oldWeatherDatas, newWeatherDatas) => {
    const mixedDatas = [...oldWeatherDatas];
    newWeatherDatas.forEach((newDataList) => {
        const oldDataIndex = oldWeatherDatas.findIndex(oldData => isDateEquals(oldData.day, newDataList.day));
        if (oldDataIndex < 0) {
            mixedDatas.push(newDataList);
        } else {
            const oldDataList = oldWeatherDatas[oldDataIndex];
            oldDataList.data = oldDataList.data.map(oldDataHour =>
                newDataList.data.find(newDataHour => newDataHour.dt === oldDataHour.dt) || oldDataHour);
            newDataList.data.forEach(newDataHour => {
                if (!oldDataList.data.find(oldDataHour => newDataHour.dt === oldDataHour.dt)) {
                    oldDataList.data.push(newDataHour);
                }
            });

            mixedDatas[oldDataIndex] = oldDataList;
        }
    });

    return mixedDatas;
};


const mapWeatherData = (jsonData) => {
    const weatherData = { ...jsonData };
    const date = parseOpenWeatherDate(weatherData.dt);
    weatherData.shortDate = formatShortDate(date);
    weatherData.hour = date.getHours();
    return weatherData;
};



/*
// TEST
const oldWeatherDatas = [];
oldWeatherDatas.push({
    day : new Date(2018, 10, 4, 0, 0, 0, 0),
    shortDate : "04/11",
    data : [
        {
            dt: 2000000,
            dt_txt: "04/11/2018 08:00",
            hour: 8,
            weather : [ { id : 120, main : "Sun", description : "Soleil", icon : "10n" } ]
        },
        {
            dt: 2000001,
            dt_txt: "04/11/2018 12:00",
            hour: 12,
            weather : [ { id : 121, main : "Sun", description : "Soleil", icon : "10n" } ]
        },
        {
            dt: 2000002,
            dt_txt: "04/11/2018 16:00",
            hour: 16,
            weather : [ { id : 122, main : "Sun", description : "Soleil", icon : "10n" } ]
        },
    ]
});
oldWeatherDatas.push({
    day : new Date(2018, 10, 5, 0, 0, 0, 0),
    shortDate : "05/11",
    data : [
        {
            dt: 1000000,
            dt_txt: "05/11/2018 08:00",
            hour: 8,
            weather : [ { id : 100, main : "Sun", description : "Pluie", icon : "10n" } ]
        }
    ]
});

const newWeatherDatas = [];
newWeatherDatas.push({
    day : new Date(2018, 10, 5, 0, 0, 0, 0),
    shortDate : "05/11",
    data : [
        {
            dt: 1000000,
            dt_txt: "05/11/2018 08:00",
            hour: 8,
            weather : [ { id : 100, main : "Rain", description : "Pluie", icon : "10n" } ]
        },
        {
            dt: 1000001,
            dt_txt: "05/11/2018 12:00",
            hour: 12,
            weather : [ { id : 101, main : "Rain", description : "Pluie", icon : "10n" } ]
        },
        {
            dt: 1000002,
            dt_txt: "05/11/2018 16:00",
            hour: 16,
            weather : [ { id : 102, main : "Rain", description : "Pluie", icon : "10n" } ]
        },
    ]
});
newWeatherDatas.push({
    day : new Date(2018, 10, 6, 0, 0, 0, 0),
    shortDate : "06/11",
    data : [
        {
            dt: 1000100,
            dt_txt: "06/11/2018 08:00",
            hour: 8,
            weather : [ { id : 110, main : "Rain", description : "Pluie", icon : "10n" } ]
        },
        {
            dt: 1000101,
            dt_txt: "06/11/2018 12:00",
            hour: 12,
            weather : [ { id : 111, main : "Rain", description : "Pluie", icon : "10n" } ]
        },
        {
            dt: 1000102,
            dt_txt: "06/11/2018 16:00",
            hour: 16,
            weather : [ { id : 112, main : "Rain", description : "Pluie", icon : "10n" } ]
        }
    ]
});

console.log("mixWeatherDatas");
console.log(mixWeatherDatas(oldWeatherDatas, newWeatherDatas));
*/