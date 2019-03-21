const initialState = {
    position: [32, 320],
}

const playerReducer = (state = initialState, action) => {
    switch(action.type){
        case 'MOVE_PLAYER':
            return {
                ...action.payload    
            }
        default:
        return state
    }
}

export default playerReducer