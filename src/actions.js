
//When the user clicks the button, we create the ADD_ITEM action with the addItem function, and dispatch it to the store
//Next, we need to update our reducer to handle this action. Remember, actions describe a change, but they aren't opinionated about what should happen as a result.
export const addItem = item => ({
    
    type: 'ADD_ITEM', // only required prop
    item //storing it in a payload
});

export const removeItem = itemId=> ({
    type: 'REMOVE_ITEM',
    itemId
})

export const updateItem = (valueTyped, itemId) => ({
    type: 'UPDATE_QUANTITY',
    itemId,
    valueTyped
})
