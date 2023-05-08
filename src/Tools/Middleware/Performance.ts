import type { IReduxState, Reducers } from "Reducers";
import type { CombinedState, createStore, Reducer, StoreEnhancer } from "redux";

export const PerformanceMiddleware =
  (genStore: typeof createStore) =>
  (
    reducer: typeof Reducers,
    initialState: IReduxState,
    enhancer: StoreEnhancer,
  ) => {
    const wrappedReducer: Reducer<any, any> = (
      state: CombinedState<IReduxState>,
      action: any,
    ) => {
      const start = performance.now();
      const newState = reducer(state, action);
      const end = performance.now();
      const diff = end - start;
      if (diff > 16) {
        console.warn("SLOW ACTION PROCESS", action.type);
        console.warn("This action took", diff, "milliseconds");
      }
      return newState;
    };

    return genStore(wrappedReducer, initialState, enhancer);
  };
