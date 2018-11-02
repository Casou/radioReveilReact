import {formatShortDate, parseOpenWeatherDate} from "../../../common/util/date";
import {weatherDatas} from "../reducers/WeatherDataReducer";

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
    newWeatherDatas.forEach((newData, index) => {
        const oldDataList = oldWeatherDatas.find(oldData => {
            return oldData.day.getTime() === newData.day.getTime();
        });
        if (!oldDataList) {
            mixedDatas.push(newData);
        } else {
            oldDataList.data = oldDataList.data.map(oldDataHour =>
                newData.data.find(newDataHour => newDataHour.dt === oldDataHour.dt) || oldDataHour);
            mixedDatas[index] = oldDataList;
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
