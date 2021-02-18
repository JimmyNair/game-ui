import { combineReducers, createStore } from "redux";
import PlaceholderReducer from "./reducers/placeholderReducers"

const reducers = combineReducers({
    test: PlaceholderReducer
});

const Store = createStore(reducers);

export type AppState = ReturnType<typeof reducers>;
export default Store;