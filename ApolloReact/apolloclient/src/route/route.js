const Homes = require('../route/Home').default
const Login = require('../route/Login').default;
const SignUp = require ('./Signup').default;
const Crypto = require ('./Crypto').default;
const Dato = require ('./Dato').default;
const List = require ('./List').default;
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
    },
    {
        path:"/crypto",
        component: Crypto
    },
    {
        path:"/list",
        component: List
    }
    ]
    
module.exports = route;

