
import {createReducer} from "redux/utils";
import * as busStopsApi from "api/bus_stops";

const RETRIEVE_BUS_STOPS = 'RETRIEVE_BUS_STOPS';

const retrieveBusStops = busStops => ({
    type: RETRIEVE_BUS_STOPS,
    busStops,
});

export function fetchBusStops() {
    return async (dispatch, getState) => {
        const response = await busStopsApi.fetchBusStops(getState().users.authedToken);
        dispatch(retrieveBusStops(response));
    }
}

export default createReducer(
    {
        busStops: []
    },
    {
        RETRIEVE_BUS_STOPS: (state, action) => ({
            ...state,
            busStops: action.busStops
        })
    }
)