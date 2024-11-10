/**
 * Increase tally by 1
 * @typedef {object} Add
 * @prop {'ADD'} type
 */

/**
 * Decrease tally by 1
 * @typedef {object} Subtract
 * @prop {'SUBTRACT'} type
 */

/**
 * Resets tally to 0
 * @typedef {object} Reset
 * @prop {'RESET'} type
 */

/**
 * @typedef {Add|Subtract|Reset} Action
 */
export const Action = {};

/**
 * @returns {Add}
 */
export const add = () => {
  return {
    type: "ADD",
  };
};

/**
 * @returns {Subtract}
 */
export const subtract = () => {
  return {
    type: "SUBTRACT",
  };
};

/**
 * @returns {Reset}
 */
export const reset = () => {
  return {
    type: "RESET",
  };
};
