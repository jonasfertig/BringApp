const initialState = {
    items: [],
    errorMessage: undefined,
};

//helper function
const removeItem = (array, action) => {
    return array.filter((item, index) => index !== action.payload);
};
//reducer
const creationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
            // Array.push mutates state -> not allowed
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case "REMOVE_ITEM":
            return {
                ...state,
                items: removeItem(state.items, action)
            };
        case "CLEAR_ITEMS":
            return {
                items: []
            };
        case "POST_LIST":
            return {
                items: []
            };
        case "ADD_DESC":
            {
                const newState = { ...state };
                newState.items[action.index] =
                    { itemName: newState.items[action.index].itemName, desc: action.payload }

                return newState
            };

        case "POST_SUCCESS":
            return {

            };
        case "POST_ERROR":
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default creationReducer;