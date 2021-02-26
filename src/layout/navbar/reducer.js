const initialState = {};

const reducer = (state = initialState, action) => {

    switch (action.type) {
            case "ADD_SHORTCUT_PAGE":
                return {
                    page:action.payload.page,
                    label:action.payload.label
                };
            default:
                return state
    }

}

export default reducer;