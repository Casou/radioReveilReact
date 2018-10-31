import {WEATHER_API_FACHES_ID, WEATHER_API_KEY, WEATHER_API_URL} from "../../../common/util/common";

export default {

    getWeatherData: () => (dispatch, getState) => {
        const params = {
            APPID : WEATHER_API_KEY,
            id : WEATHER_API_FACHES_ID,
            units : "metric",
            lang : "fr"
        };
        const url = WEATHER_API_URL + "?" +
            Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');

        return fetch(url)
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type : "FETCH_WEATHER_DATA",
                    payload : response
                });
            });
    },

};