const initialState = {};
//Redux works with immutable state. That means we aren't allowed to mutate the state object, we have to produce a brand new object.
export default function cartReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case "ADD_ITEM": {
      // (action.item.id) ? (action.item.quantity += 1) : 0
      // (action.item.id) ? state.quantity = += 1 :
      
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          // if that chosen item title or id exists then that chosen id/title quantity is +1 else 1
          quantity: state[action.item.id]
            ? (state[action.item.id].quantity += 1)
            : 1,
        },
      };
    }
    case "UPDATE_QUANTITY": {
      const upState = { ...state};
     
      upState[action.itemId].quantity = action.valueTyped;
      // console.log(action.itemId,"ACTION ITEMID")
      // console.log(action.valueTyped,"ACTION VALUE TYPED")
      return {
        ...upState
      };
    }
    case "REMOVE_ITEM": {
      //console.log(action)
      const copyState = { ...state };
      delete copyState[action.itemId];
      return copyState;
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);

