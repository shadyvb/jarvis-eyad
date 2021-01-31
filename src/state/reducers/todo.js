export default {
  all: []
};

export const name = "todo";

export const add = (state, payload) => ({
  ...state,
  all: [...state.all, payload]
});

export const remove = (state, payload) => ({
  ...state,
  all: state.all.filter((cur, idx) => idx !== payload)
});
