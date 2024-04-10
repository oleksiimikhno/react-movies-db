import { Action } from "redux";

type ActionHandlers<State> = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [key: string]: (state: State, action: any) => State;
}

export interface ActionWithPayload<T> extends Action {
  payload: T
}

export function createReducer<TState>(initialState: TState, handlers: ActionHandlers<TState>) {
  return function (state: TState, action: Action) {
    state ??= initialState;
    const handler = handlers[action.type];

    return handler?.(state, action) ?? state;
  }
}