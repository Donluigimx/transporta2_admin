
import {createReducer} from "redux/utils";
import * as busStopsApi from "api/bus_stops";

const RETRIEVE_BUS_STOPS = 'RETRIEVE_BUS_STOPS';
const STOP_MAP_CLICKED = 'STOP_MAP_CLICKED';
const INSERT_BUS_STOP = 'INSERT_BUS_STOP';
const MAP_CLICKED = 'MAP_CLICKED';

const retrieveBusStops = busStops => ({
    type: RETRIEVE_BUS_STOPS,
    busStops,
});

const stopMapClicked = () => ({
    type: STOP_MAP_CLICKED,
});

const mapClicked = (clickLat, clickLng) => ({
    type: MAP_CLICKED,
    clickLat, clickLng,
});

const insertBusStop = (busStop) => ({
    type: INSERT_BUS_STOP,
    busStop
});

export function fetchBusStops() {
    return async (dispatch, getState) => {
        const response = await busStopsApi.fetchBusStops(getState().users.authedToken);
        dispatch(retrieveBusStops(response));
    }
}

export function handleMapClicked(lat, lng) {
    return dispatch => dispatch(mapClicked(lat, lng))
}

export function fetchAndCreateBusStop() {
    return async (dispatch, getState) => {
        const {clickLat, clickLng} = getState().busStops;
        const response = await busStopsApi.createBusStop(clickLat, clickLng, getState().users.authedToken);
        dispatch(insertBusStop(response));
        dispatch(stopMapClicked());
    }
}

export function restoreMapClicked() {
    return dispatch => dispatch(stopMapClicked());
}

export default createReducer(
    {
        busStops: [],
        mapClicked: false,
        clickLat: null,
        clickLng: null
    },
    {
        RETRIEVE_BUS_STOPS: (state, action) => ({
            ...state,
            busStops: action.busStops
        }),
        STOP_MAP_CLICKED: (state, action) => ({
            ...state,
            mapClicked: false,
            clickLat: null,
            clickLng: null
        }),
        MAP_CLICKED: (state, {clickLat, clickLng}) => ({
            ...state,
            mapClicked: true,
            clickLat, clickLng,
        }),
        INSERT_BUS_STOP: (state, {busStop}) => {
            state.busStops.push(busStop);
            return {
                ...state
            }
        }
    }
)