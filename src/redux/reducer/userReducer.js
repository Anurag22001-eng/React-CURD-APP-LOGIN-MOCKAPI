const userReducer = (state='',action)=>{
    switch(action.type){
        case 'ADD_USER':
            return {
                ...state,
                items:[
                    ...state.items,
                    action.payload
                ]
            }
        case 'DELETE_USER':
            return{
                ...state,
                items:state.items.filter((item)=>item.id!==action.payload)
            }
        case 'INFO_USER':
            return{
                ...state,
                item:state.items.filter((item)=>item.id==action.payload)
            }
        case 'UPDATE_USER':
            return{
                ...state,
                items:state.items.map((item)=>item.id == action.payload.id ? action.payload:item)
            }
        default:
            return state
    }
}

export default userReducer;