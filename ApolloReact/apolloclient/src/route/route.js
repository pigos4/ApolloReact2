const Homes = require('../route/Home').default
const Login = require('../route/Login').default;
const SignUp = require ('./Signup').default;
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
    }
    ]
    
module.exports = route;

