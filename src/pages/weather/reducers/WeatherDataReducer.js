import {formatShortDate, parseOpenWeatherDate} from "../../../common/util/date";

export const weatherDatas = (stateWeather = {}, action) => {
    switch (action.type) {
        case "FETCH_WEATHER_DATA" :
            return updateWeatherDatasAndMapDay(action.payload);
        default :
            return stateWeather;
    }
};

const updateWeatherDatasAndMapDay = (weatherDatas) => {
    const reducedData = weatherDatas.list.reduce((accumulator, currentValue) => {
        const currentDataDay = parseOpenWeatherDate(currentValue.dt);
        currentDataDay.setHours(0);
        currentDataDay.setMinutes(0);
        currentDataDay.setSeconds(0);

        const dayDataList = accumulator[currentDataDay] || { day : currentDataDay, data : [] };
        dayDataList.shortDate = formatShortDate(currentDataDay);
        dayDataList.data.push(mapWeatherData(currentValue));
        accumulator[currentDataDay] = dayDataList;

        return accumulator;
    }, {});

    return Object.values(reducedData);
};

const mapWeatherData = (jsonData) => {
    const weatherData = { ...jsonData };
    const date = parseOpenWeatherDate(weatherData.dt);
    weatherData.shortDate = formatShortDate(date);
    weatherData.hour = date.getHours();
    return weatherData;
};
