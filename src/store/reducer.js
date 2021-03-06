const reducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_USER": {
            return {...state, user: action.data}
        }
        case "SET_DATA": {
            return {...state, data: action.data}
        }
        default: {
            return state;
        }
    }
}

export default reducer;