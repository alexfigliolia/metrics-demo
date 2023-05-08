export class ReduxState<T extends Record<string, any>> {
  initialState: T;
  currentState: T;
  constructor(initialState: T) {
    this.initialState = initialState;
    this.currentState = initialState;
  }

  public get<K extends keyof T>(key: K): T[K] {
    return this.currentState[key];
  }

  public defaultValue<K extends keyof T>(key: K): T[K] {
    return this.initialState[key];
  }

  public update<K extends Partial<T>>(update: K) {
    const nextState = new ReduxState(this.initialState);
    nextState.currentState = Object.assign({}, this.currentState, update);
    return nextState;
  }

  public reset() {
    return new ReduxState(this.initialState);
  }
}
