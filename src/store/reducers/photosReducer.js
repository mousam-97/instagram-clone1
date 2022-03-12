const initialState = {
    items: [],
    selectedItem: {}
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "FETCH_ITEMS":
            return {
                ...state,
                items: payload
            };
        case "SELECT_ITEM":
            return {
                ...state,
                selectedItem: payload
            };
        case "REMOVE_SELECTED":
            return {
                ...state,
                selectedItem: {}
            };
        case "UPDATE_ITEM":
            const index = state.items.findIndex(item => item.id === payload);
            const newArray = [...state.items];
            newArray[index].likes++;

            return {
                ...state,
                items: newArray
            }
        default: return state;
    }
};

export default reducer;
