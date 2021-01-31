const Homes = require('../route/Home').default
const Login = require('../route/Login').default;
const SignUp = require ('./Signup').default;

const Dato = require ('./Dato').default;

 const route =[
    {
        path:"/xx",
        component: Homes 
    },
    {
        path:"/login",
        component: Login
    },
    {
        path:"/signup",
        component: SignUp
    },{
        path:"/dato",
        component: Dato
    }
    ]
    
module.exports = route;

