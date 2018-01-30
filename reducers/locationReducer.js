const location = {
    position: {
        longitudeDelta: 13.00781200000003, 
        latitudeDelta: 10.978984397008638, 
        longitude: -3.1640630000000165, 
        latitude: 39.91322300000001
    }
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