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
// add new class in body tag for modals
const toggleModalClass =(data) =>{
    if(data){
      var body = document.body;
      body.classList.add("modals");
    }
    else{
      var body = document.body;
      body.classList.remove("modals");
    } 
}