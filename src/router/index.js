import {
    ChoiceNess,
    Group,
    Mine,
    NineTwo,
    ShoppingCart,
    Login
} from "@pages";


export const tabBarRoute = [
    {
        path: "/choiceness",
        component: ChoiceNess,
        meta: {
            flag: true
        },
        name: "今日精选",
        icon: "\ue618"
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
        icon: "\ue60b"
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
    }
];

export const routeConfig = tabBarRoute.concat(noTabBarRoute)