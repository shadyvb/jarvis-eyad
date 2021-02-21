export default {
  items: {}
};

export const name = "school";

const pluck = (list, key) => {
  const { [key]: _, ...newlist } = list;
  return newlist;
};

export const add = (state, payload) => ({
  ...state,
  items: { ...state.items, [new Date()]: payload }
});

export const remove = (state, payload) => ({
  ...state,
  items: pluck(state.items, payload)
});

export const subject_add = (state, payload) => ({
  ...state,
  subjects: [...state.subjects, payload]
});
