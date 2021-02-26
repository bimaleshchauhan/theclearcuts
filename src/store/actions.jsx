export const login = (nr) =>{
    return{
        type:"LOGIN",
        payload:nr
    }
}
export const signup = (nr) =>{
    return{
        type:"SIGNUP",
        payload:nr
    }
}
