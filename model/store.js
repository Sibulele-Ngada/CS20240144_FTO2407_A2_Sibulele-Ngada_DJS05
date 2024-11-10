/**
 * State of Tally App
 * @typedef {object} State
 * @prop {number} count
 */
export const State = {};

/**
 * View current state of Tally App
 * @callback GetState
 * @returns {State}
 */

/**
 * Sends action to reducer
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
