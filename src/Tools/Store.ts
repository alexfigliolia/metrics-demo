import type { StoreEnhancer } from "redux";
import { applyMiddleware, compose, createStore } from "redux";
import Thunk from "redux-thunk";

import { Reducers } from "Reducers";
import { PerformanceMiddleware } from "Tools/Middleware";

const enhancers: any[] = [applyMiddleware(Thunk)];
if (process.env.NODE_ENV === "development") {
  enhancers.push(PerformanceMiddleware);
  enhancers.push(applyMiddleware(require("redux-logger").default));
}

const composedEnhancers: StoreEnhancer = compose(...enhancers);

export const Store = createStore(Reducers, undefined, composedEnhancers);
