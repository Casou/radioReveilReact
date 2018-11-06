import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./App";
import reducers from "./reducers";
import {getWeatherDataFromStorage} from "./pages/weather/reducers/WeatherDataReducer";

console.info('** Server started in ' + process.env.NODE_ENV + ' mode');

const initialStore = {
    weatherDatas : getWeatherDataFromStorage(),
    radio : { status : "pause", flux : "http://direct.franceinter.fr/live/franceinter-midfi.mp3" }
};

const store = createStore(reducers, initialStore,
    composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();