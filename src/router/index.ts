import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import RecoverPassword from "../views/RecoverPassword.vue";
import NewPassword from "../views/NewPassword.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/recover-password",
        name: "RecoverPassword",
        component: RecoverPassword
    },
    {
        path: "/update-password",
        name: "NewPassword",
        component: NewPassword
    }
];

const index = createRouter({
    history: createWebHistory(),
    routes,
});

export default index;