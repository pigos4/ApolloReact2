const Homes = require('../route/Home').default
const Login = require('../route/Login').default;
const SignUp = require ('./Signup').default;
const Crypto = require ('./Crypto').default;
const Dato = require ('./Dato').default;
const List = require ('./list/List').default;

const Records = require ('./list/records/records.js').default;
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
    },
    {
        path:"/records",
        component: Records
    }
    ]
    
module.exports = route;

