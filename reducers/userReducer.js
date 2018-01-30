const users = {
    uid: '',
    token: null,
    role: 'guest'
};

const userReducer = (state = users, action) => {
    switch (action.type) {
        case 'SET_USER':
            state = {
                ...state,
                uid: action.payload.uid,
                token: action.payload.refreshToken,
                role: action.payload.role
            };
            break;
        case 'UNSET_USER':
            state = {
                ...state,
                uid: '',
                token: null,
                role: ''
            }
            break;        
        default:
            return state
    }
    return state
};

export default userReducer;