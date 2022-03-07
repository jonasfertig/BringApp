//defined actions the creation reducer reacts to  
export const actionCreators = {
  addToList: data => ({ type: "ADD_TO_LIST", payload: data }),
  removeItem: data => ({ type: "REMOVE_ITEM", payload: data }),
  clearItems: () => ({ type: "CLEAR_ITEMS" }),
  postItems: data => ({ type: "POST_LIST", payload: data }),
  addDesc: (index, desc) => ({ type: "ADD_DESC", index: index, payload: desc }),
  success: (item) => ({ type: "POST_SUCCESS", payload: item }),
  failure: (error) => ({ type: "POST_FAILURE", payload: error })
};

