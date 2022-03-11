/* 
    This is a blank file where you can start writing your
    actions. You can feel free to add multiple actions,
    based on your discretion.
*/

import data from "../../data";


const fetchItems = () => async (dispatch) => {
    const response = data;
    dispatch({
        type: "FETCH_ITEMS",
        payload: response
    });
};

export { fetchItems };