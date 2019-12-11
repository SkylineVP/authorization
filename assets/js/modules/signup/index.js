"use strict";
export class User {
    login;
    email;
    password;

    constructor(login, email, password) {
        this.login = login;
        this.email = email;
        this.password = password;
    }
}
let users=[];
const {0:login,1:email,2:password,3:confirmedPassword,4:buttonSubmit}=document.getElementsByTagName("input");
buttonSubmit.onclick=onButtonSubmitClick;
function  onButtonSubmitClick(){
    if (password.value===confirmedPassword.value){

        const user=new User(login.value,email.value,password.value);

        if(localStorage.getItem("Users")===null){
            users.push(user);
            localStorage.setItem("Users",JSON.stringify(users));
        }
        else {
            users=JSON.parse(localStorage.getItem("Users"));
            let objectAlreadyExists=false;
            users.forEach(userinstore=>{
                if(userinstore.login===user.login){
                    console.error("such an object already exists");
                    objectAlreadyExists=true;
                }
            });
            if(!objectAlreadyExists){
            users.push(user);
            localStorage.setItem("Users",JSON.stringify(users));}

        }
    }
    else alert("Пароли не совпадают")
}