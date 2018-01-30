const location = {
    position: {}
};

const locationReducer = (state = location, action) => {
    switch (action.type) {
        case 'UPDATE_POSITION':
            return state = {
                ...state,
                position: action.payload
            };
        default:
            return state
    }
    return state
};

export default locationReducer;