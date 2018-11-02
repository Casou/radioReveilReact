import {mixWeatherDatas, reduceWeatherDatas} from "../util/WeatherUtil";

export const weatherDatas = (stateWeather = {}, action) => {
    switch (action.type) {
        case "FETCH_WEATHER_DATA" :
            return updateWeatherDatasAndMapDay(action.payload);
        default :
            return stateWeather;
    }
};

const updateWeatherDatasAndMapDay = (newWeatherJsonDatas) => {
    const newWeatherDatas = reduceWeatherDatas(newWeatherJsonDatas);
    const oldWeatherDatas = purgeWeatherDatas(JSON.parse(localStorage.getItem("weatherDatas")) || []);
    const mixedWeatherDatas = mixWeatherDatas(oldWeatherDatas, newWeatherDatas);
    localStorage.setItem("weatherDatas", JSON.stringify(mixedWeatherDatas));

    return mixedWeatherDatas;
};

const purgeWeatherDatas = (weatherDatas) => {
    const minimumDate = new Date();
    minimumDate.setDate(minimumDate.getDate() - 7);
    return weatherDatas.filter(data => data.day > minimumDate);
};
