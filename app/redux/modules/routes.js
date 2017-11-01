import {createReducer} from "redux/utils";
import * as api_routes from "api/routes";
import {createRouteBusStop, get_route, getRouteBuses, getRouteBusStops, getRoutes} from "../../api/routes";
import {reset} from "redux-form";

const LIST_ROUTES = 'LIST_ROUTES';
const CREATE_ROUTE = 'CREATE_ROUTE';
const CREATE_ROUTE_FINISHED = 'CREATE_ROUTE_FINISHED';
const GET_ROUTE = 'GET_ROUTE';
const CLICK_MAP = 'CLICK_MAP';
const STOP_CLICK_MAP = 'STOP_CLICK_MAP';
const CREATE_ROUTE_BUS_STOP = 'CREATE_ROUTE_BUS_STOP';

function list_routes(routes) {
    return {
        type: LIST_ROUTES,
        routes
    }
}

function create_route() {
    return {
        type: CREATE_ROUTE
    }
}

function finish_route_creation(route) {
    return {
        type: CREATE_ROUTE_FINISHED,
        route
    }
}

function getRoute(route, buses, busStops) {
    return {
        type: GET_ROUTE,
        route,
        buses,
        busStops,
    }
}

function clickMap(lat,lng) {
    return {
        type: CLICK_MAP,
        lat,
        lng,
    }
}

function stopClickMap() {
    return {
        type: STOP_CLICK_MAP
    }
}

function actionCreateRouteBusStop(busStop, routeId) {
    return {
        type: CREATE_ROUTE_BUS_STOP,
        busStop, routeId,
    }
}

export function fetchAndRetrieveListRoutes() {
    return async (dispatch, getState) => {
        try {
            const response = await getRoutes(getState().users.authedToken);
            console.log(response);
            dispatch(list_routes(response));
        } catch (error) {
            console.log(error);
        }
    }
}

export function fetchAndCreateRoute(route, origin, destination) {
    return async (dispatch, getState) => {
        try {
            dispatch(create_route());
            const response = await api_routes.createRoute(route, origin, destination, getState().users.authedToken);
            dispatch(finish_route_creation(response));
            dispatch(reset('createRouteForm'));
        } catch (error) {
            console.log(error);
        }
    }
}

export function fetchAndRetrieveRoute(id) {
    return async (dispatch, getState) => {
        const authedToken = getState().users.authedToken;
        try {
            const [route, buses, busStops] = await Promise.all([
                get_route(id, authedToken),
                getRouteBuses(id, authedToken),
                getRouteBusStops(id, authedToken)
            ]);
            dispatch(getRoute(route, buses, busStops));
        } catch (error) {
            console.log(error);
        }
    }
}

export function startClickAction(lat, lng) {
    return (dispatch, getState) => dispatch(clickMap(lat, lng));
}

export function stopClickAction() {
    return dispatch => dispatch(stopClickMap())
}

export function fetchAndHandleRouteBusStop(routeId) {
    return async (dispatch, getState) => {
        const lat = getState().routes.lat, lng = getState().routes.lng;
        const response = await createRouteBusStop(routeId, lat, lng, getState().users.authedToken);
        dispatch(actionCreateRouteBusStop(response, routeId));
        dispatch(stopClickMap());
    }
}

export default createReducer(
    {
        routesList: [],
        creatingRoute: false,
        mapIsClicked: false,
        lat: 0,
        lng: 0
    },
    {
        LIST_ROUTES: (state, action) => {
            return {
                ...state,
                routesList: action.routes
            }
        },
        CREATE_ROUTE: (state, action) => {
            return {
                ...state,
                creatingRoute: true,
            }
        },
        CREATE_ROUTE_FINISHED: (state, action) => {
            state.routesList.push(action.route);
            return {
                ...state,
                creatingRoute: false,
                routesList: state.routesList
            }
        },
        GET_ROUTE: (state, action) => ({
            ...state,
            [action.route.id]: {
                route: action.route,
                buses: action.buses,
                busStops: action.busStops,
            }
        }),
        CLICK_MAP: (state, action) => ({
            ...state,
            lat: action.lat,
            lng: action.lng,
            mapIsClicked: true
        }),
        STOP_CLICK_MAP: (state, action) => ({
            ...state,
            lat: 0,
            lng: 0,
            mapIsClicked: false
        }),
        CREATE_ROUTE_BUS_STOP: (state, action) => {
            state[action.routeId].busStops.push(action.busStop);
            return {
                ...state
            }
        }
    }
)