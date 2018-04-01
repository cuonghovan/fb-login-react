import { fromJS } from "immutable";
import { takeLatest } from "redux-saga";
import { call, put, fork } from "redux-saga/effects";
import axios from "axios";

// Constants
const CLEAR_WEATHER_INFO = "CLEAR_WEATHER_INFO";
const FETCH_WEATHER_INFO = "FETCH_WEATHER_INFO";
const FETCH_WEATHER_INFO_SUCCESS = "FETCH_WEATHER_INFO_SUCCESS";
const WEATHER_ENDPOINT = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "2564bdf9d7c3dadfe0ca81742e3180c4";

// Actions
export const clearWeatherInfoAct = () => ({
  type: CLEAR_WEATHER_INFO
});

export const fetchWeatherInfoAct = location => ({
  type: FETCH_WEATHER_INFO,
  payload: {
    location
  }
});

export const fetchWeatherInfoSuccessAct = weatherData => ({
  type: FETCH_WEATHER_INFO_SUCCESS,
  payload: {
    weatherData
  }
});

// Services
export const fetchWeatherInfoCall = location => {
  return axios
    .get(`${WEATHER_ENDPOINT}?q=${location}&appid=${API_KEY}`)
    .then(response => response)
    .catch(error => error);
};

// Sagas
export function* weatherSaga() {
  yield* takeLatest(FETCH_WEATHER_INFO, fetchWeatherInfoTrack);
}

export function* fetchWeatherInfoTrack({ payload }) {
  let { location } = payload;
  yield put(clearWeatherInfoAct());

  let response = yield call(fetchWeatherInfoCall, location);
  if (response.status == 200) {
    yield put(fetchWeatherInfoSuccessAct(response.data));
  }
}

export const weatherSagas = [fork(weatherSaga)];

// Reducers
const initialWeatherInfo = fromJS({});
const weatherReducer = (state = initialWeatherInfo, action) => {
  switch (action.type) {
    case CLEAR_WEATHER_INFO:
      return initialWeatherInfo;
    case FETCH_WEATHER_INFO_SUCCESS:
      return state.merge(action.payload.weatherData);
    default:
      return initialWeatherInfo;
  }
};
export default weatherReducer;

// Selectors
export const getWeatherInfoSelect = state => {
  return state.weatherInfo.toJS();
};

export const weatherSelectors = {
  getWeatherInfoSelect
};
