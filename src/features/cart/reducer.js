// import update from 'react-addons-update';
import update from 'immutability-helper';

const initialState = [];

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_CART":
            if (state.find(item => item.productId == action.payload.productId)) {
                return update(state, {
                    [state.findIndex(item => item.productId == action.payload.productId)]: {
                        $set: {
                            ...action.payload
                        }
                    }
                });
            } else {
                return [
                    ...state,
                    action.payload
                ]
            }
            case "DELETE_CART":
                const index = state.findIndex(item => item.productId == action.payload.productId);
                if (index > -1) {
                    state.splice(index, 1);
                }
                return [
                    ...state
                ];

            case "UPDATE_CART":
                const i = state.findIndex(item => item.productId == action.payload.productId);

                return update(state, {
                    [i]: {
                        quantity: {
                            $set: action.payload.quantity
                        }
                    }
                });
            case "DELETE_ALL_CART":
                return [];
            default:
                return state
    }

}

export default reducer;