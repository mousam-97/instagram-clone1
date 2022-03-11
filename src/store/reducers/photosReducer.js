const initialState = {
    items:[],
};

const reducer = (state=initialState, {type,payload}) => {
    switch(type) {
        case "FETCH_ITEMS":
                return {
                    ...state,
                    items: payload
                }
        default: return state;
    }
}

export default reducer;
