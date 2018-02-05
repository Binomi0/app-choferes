import { UPDATE_POSITION, UPDATE_MARKER } from '../constants'

const location = {
    position: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
        accuracy: 0,
        altitude: 0,
        altitudeAccuracy: 0,
        speed: 0,
        heading: -1
    },
    marker: {
        longitude: -0.574234, 
        latitude: 38.2085652
    }
};

const locationReducer = (state = location, action) => {
    switch (action.type) {
        case UPDATE_POSITION:
            return {
                ...state,
                position: {
                    ...state.position,                    
                    ...action.payload                    
                }
            }
        case UPDATE_MARKER:
            return {
                ...state,                    
                marker: {
                    ...state.marker,
                    ...action.payload                
                }
            }        
        default:
            return state
    }
    return state
};

export default locationReducer;