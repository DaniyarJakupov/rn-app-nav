const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...action.payload };
    default:
      return state;
  }
};
