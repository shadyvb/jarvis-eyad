export default {
  count: 0
};

export const name = "counter";

export const increment = (state) => ({
  ...state,
  count: state.count + 1
});

export const decrement = (state) => ({
  ...state,
  count: state.count - 1
});
