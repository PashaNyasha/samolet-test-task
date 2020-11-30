import {Reducer} from "redux";
import { IAppStore } from "../_types/app-store";
import {createReducers} from "./create-reducers";

type ParamsType = {
  store: IAppStore;
  name: string;
  reducer: Reducer;
};

export const injectAsyncReducers = ({store, name, reducer}: ParamsType) => {
  const { asyncReducers } = store;
  const hasThisReducer = Boolean(asyncReducers && asyncReducers[name]);

  if (hasThisReducer) {
    return;
  }
  
  if (asyncReducers) {
    asyncReducers[name] = reducer;
    const prevState = store.getState()

    store.replaceReducer(createReducers({ prevState, asyncReducers }));
  }
};
