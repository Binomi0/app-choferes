import { UPDATE_POSITION, UPDATE_MARKER } from '../constants'

const location = {

    position: {}
};

const locationReducer = (state = location, action) => {
    switch (action.type) {
        case UPDATE_POSITION:
            return {
                ...state,
                position: action.payload 
            }
        case UPDATE_MARKER:
            return {
                ...state,
                marker: action.payload
            }
        
        default:
            return state
    }
    return state
};

export default locationReducer;