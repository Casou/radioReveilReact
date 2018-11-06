import {combineReducers} from 'redux';
import {weatherDatas} from "./pages/weather/reducers/WeatherDataReducer";
import {radio} from "./common/footer/reducers/RadioReducer";

export default combineReducers({
    weatherDatas,
    radio
});