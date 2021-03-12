import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer } from "./app/reducer";
import { movieReducer } from "./data/reducer";
import { cinemasReducer } from "./cinemas/cinemasReducer";
import { bookingReducer } from "./booking_details/bookingReducer";

const rootReducer = combineReducers({
    app: reducer,
    cinemas: cinemasReducer,
    data: movieReducer,
    booking_details: bookingReducer
})
const logger = store => (next) => (action) => {
    return typeof action === "function"
        ? action(store.dispatch, store.getState)
        : next(action);
}

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
export { store }
