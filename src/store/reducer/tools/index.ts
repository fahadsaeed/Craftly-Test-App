const initialState = {
    tools : []
};

const toolsReducer = (state = initialState, action: any) =>{
    switch (action.type){
        case 'GET_TOOL' :
            return {
                ...state, tools: action.payload
            };
        default :
            return state;
    }
}

export default  toolsReducer;