import { Action } from "./actions.js";
import { reducer } from "./reducers.js";

/**
 * @typedef {object} Tally
 */

/**
 * @typedef {object} State
 * @prop {number} count
 */
export const State = {};

/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 */

/**
 * @type {Array<Subscription>}
 */
let subscribers = [];

/**
 * @type {Array<State>}
 */
let states = [{ count: 0 }];

/**
 * @type {GetState}
 */
export const getState = () => Object.freeze({ ...states[0] });

/**
 * @type {Dispatch}
 */
export const dispatch = (action) => {
  const prev = getState();
  const next = reducer(prev, action);
  subscribers.forEach((subscriber) => subscriber(prev, next));
  states.unshift(next);
};

/**
 *
 * @param {Subscription} subscription
 * @returns {EmptyFn}
 */
export const subscribe = (subscription) => {
  subscribers.push(subscription);

  const unsubscribe = () => {
    const newSubscribers = subscribers.filter(
      (subscriber) => subscriber !== subscription
    );
    subscribers = newSubscribers;
  };

  return unsubscribe;
};
