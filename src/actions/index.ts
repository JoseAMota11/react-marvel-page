export const increment = (byTwo: number) => ({
  type: 'INCREMENT',
  payload: byTwo,
});

export const decrement = (byTwo: number) => ({
  type: 'DECREMENT',
  payload: byTwo,
});
