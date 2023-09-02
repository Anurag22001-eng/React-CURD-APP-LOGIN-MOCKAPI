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
            console.log(state,'====',action)
            return{
                ...state,
                items:state.items.filter((item)=>item.id!==action.payload)
            }
        case 'INFO_USER':
            // const userData -
            return{
                ...state,
                item:state.items.filter((item)=>item.id==action.payload)
            }
        case 'UPDATE_USER':
            console.log(action.payload)
            return{
                ...state,
                items:state.items.map((item)=>item.id == action.payload.id ? action.payload:item)
            }
        default:
            return state
    }
}

export default userReducer;