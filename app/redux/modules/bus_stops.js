
import {createReducer} from "redux/utils";
import * as busStopsApi from "api/bus_stops";
import * as routesApi from "api/routes";

const RETRIEVE_BUS_STOPS = 'RETRIEVE_BUS_STOPS';
const STOP_MAP_CLICKED = 'STOP_MAP_CLICKED';
const INSERT_BUS_STOP = 'INSERT_BUS_STOP';
const MAP_CLICKED = 'MAP_CLICKED';
const GET_BUS_STOP = 'GET_BUS_STOP';
const ROUTE_SELECTED = 'ROUTE_SELECTED';
const LINK_BUS_STOP = 'LINK_BUS_STOP';

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

const getBusStop = (busStop, routes, allRoutes) => ({
    type: GET_BUS_STOP,
    busStop, routes, allRoutes
});

const routeSelectedAction = (routeSelected) => ({
    type: ROUTE_SELECTED,
    routeSelected,
})

const linkBusStop = () => ({
    type: LINK_BUS_STOP,
})

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

export function fetchBusStop(id) {
    return async (dispatch, getState) => {
        const {authedToken} = getState().users;
        const [busStop, routes, allRoutes] = await Promise.all([
            busStopsApi.fetchBusStop(id, authedToken),
            busStopsApi.fetchBusStopRoutes(id, authedToken),
            routesApi.getRoutes(authedToken),
        ]);
        dispatch(getBusStop(busStop, routes, allRoutes));
    }
}

export function handleRouteSelected(id) {
    return dispatch => dispatch(routeSelectedAction(id));
}

export function handleLinkBusStop() {
    return async (dispatch, getState) => {
        const {routeSelected, busStopClicked} = getState().busStops;
        const {authedToken} = getState().users;
        const response = await busStopsApi.linkBusStop(busStopClicked, routeSelected, authedToken);
        dispatch(linkBusStop());
        const [busStop, routes, allRoutes] = await Promise.all([
            busStopsApi.fetchBusStop(busStopClicked, authedToken),
            busStopsApi.fetchBusStopRoutes(busStopClicked, authedToken),
            routesApi.getRoutes(authedToken),
        ]);
        dispatch(getBusStop(busStop, routes, allRoutes));
    }
}

export function restoreMapClicked() {
    return dispatch => dispatch(stopMapClicked());
}

export default createReducer(
    {
        busStops: [],
        busStopClicked: null,
        mapClicked: false,
        clickLat: null,
        clickLng: null,
        allRoutes: [],
        routeSelected: null,
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
        },
        GET_BUS_STOP : (state, {busStop, routes, allRoutes}) => ({
            ...state,
            busStopClicked: busStop.id,
            allRoutes,
            [busStop.id]: {
                busStop, routes
            }
        }),
        ROUTE_SELECTED: (state, {routeSelected}) => ({
            ...state,
            routeSelected,
        }),
        LINK_BUS_STOP: (state, action) => ({
            ...state,
            routeSelected: null,
        })
    }
)