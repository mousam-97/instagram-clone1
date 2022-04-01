
import data from "../../data";


const fetchItems = () => async (dispatch) => {
    const response = data;
    dispatch({
        type: "FETCH_ITEMS",
        payload: response
    });
};

const selectItem = (id) => async (dispatch) => {
    let selectedItem = {};
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            selectedItem = data[i];
        }
    }
    console.log(selectedItem);

    dispatch({
        type: "SELECT_ITEM",
        payload: selectedItem
    });
};

const removeSelected = () => async (dispatch) => {
    dispatch({
        type: "REMOVE_SELECTED",
        payload: null
    });
};

const updateItem = (id) => async (dispatch) => {
    dispatch({
        type: "UPDATE_ITEM",
        payload: id
    });
};

export { fetchItems, selectItem, removeSelected,updateItem };