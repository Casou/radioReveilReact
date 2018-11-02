import {mixWeatherDatas, reduceWeatherDatas} from "../util/WeatherUtil";

export const weatherDatas = (stateWeather = {}, action) => {
    let newStore;
    switch (action.type) {
        case "FETCH_WEATHER_DATA" :
            newStore = updateWeatherDatasAndMapDay(action.payload);
            break;
        default :
            newStore = stateWeather;
    }
    return newStore;
};

const updateWeatherDatasAndMapDay = (newWeatherJsonDatas) => {
    const newWeatherDatas = reduceWeatherDatas(newWeatherJsonDatas);
    const oldWeatherDatas = purgeWeatherDatas(getWeatherDataFromStorage());
    const mixedWeatherDatas = mixWeatherDatas(oldWeatherDatas, newWeatherDatas);

    let newStoreData = {
        lastRetrieveTime : new Date(),
        dataList : mixedWeatherDatas
    };
    localStorage.setItem("weatherDatas", JSON.stringify(newStoreData));

    return newStoreData;
};

const purgeWeatherDatas = (weatherData) => {
    const minimumDate = new Date();
    minimumDate.setDate(minimumDate.getDate() - 7);
    return weatherData.dataList.filter(data => data.day.getTime() > minimumDate.getTime());
};

export const getWeatherDataFromStorage = () => {
    const storedString = localStorage.getItem("weatherDatas");
    if (!storedString) {
        return {
            lastRetrieveTime : null,
            dataList : []
        };
    }

    const storedObject = JSON.parse(storedString);
    storedObject.lastRetrieveTime = new Date(storedObject.lastRetrieveTime);
    storedObject.dataList = [...storedObject.dataList].map(item => {
        item.day = new Date(item.day);
        return item;
    });

    return storedObject;
};
