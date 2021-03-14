const initialState = {
    login_popup:false,
    signup:false,
    user_details:""
} 
function Auth(state=initialState, action){
    const {type, payload} = action
    switch(type){
        case 'LOGIN':
           return {
               ...state,
               login_popup:payload
           }
        case 'SIGNUP':
           return {
               ...state,
               signup:payload
           }
        case 'USER_DETAILS':
            return{
                ...state,
                user_details:payload
            }   
        default:
            return state   
    }
}
export default Auth;