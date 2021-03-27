export const login = (nr) =>{
    toggleModalClass(nr)
    return{
        type:"LOGIN",
        payload:nr
    }
}
export const signup = (nr) =>{
    toggleModalClass(nr)
    return{
        type:"SIGNUP",
        payload:nr
    }
}
// user detail when signin

export const userDetails = (nr) =>{
    return{
        type:"USER_DETAILS",
        payload:nr
    }
}

// add new class in body tag for modals
const toggleModalClass =(data) =>{
    if(data){
      let body = document.body;
      body.classList.add("modals");
    }
    else{
      let body = document.body;
      body.classList.remove("modals");
    } 
}