import {
    ChoiceNess,
    Group,
    Mine,
    NineTwo,
    ShoppingCart,
    Login,
    Detail
} from "@pages";


export const tabBarRoute = [
    {
        path: "/choiceness",
        component: ChoiceNess,
        meta: {
            flag: true
        },
        name: "今日精选",
        icon: "\ue53b"
    },
    {
        path: "/nine",
        component: NineTwo,
        meta: {
            flag: false
        },
        name: "9.9",
        icon: "\ue504"
    },
    {
        path: "/group",
        component: Group,
        meta: {
            flag: true
        },
        name: "团长",
        icon: "\ue610"
    },
    {
        path: "/shoppingcart",
        component: ShoppingCart,
        meta: {
            flag: true
        },
        name: "购物车",
        icon: "\ue746"
    },
    {
        path: "/mine",
        component: Mine,
        meta: {
            flag: true
        },
        name: "我的",
        icon: "\ue603"
    },


];

const noTabBarRoute = [
    {
        path: "/login",
        component: Login,
        meta: {
            flag: true
        },
        name: "登录",
    },
    {
        path: "/detail/:iid",
        component: Detail,
        meta: {
            flag: false
        },
        name: "详情页",
    }
];

export const routeConfig = tabBarRoute.concat(noTabBarRoute)