import Loadable from 'react-loadable';
import Loading from "@common/loading"

// 路由懒加载
const ChoiceNess = Loadable({
    // loader用来加载相对应的组件
    loader: () => import("./choiceness"),
    // 当loader没有加载进来时会加载loading
    loading: Loading
})

const Group = Loadable({
    loader: () => import("./group"),
    loading: Loading
})

const Mine = Loadable({
    loader: () => import("./mine"),
    loading: Loading
})

const NineTwo = Loadable({
    loader: () => import("./ninetwo"),
    loading: Loading
})

const ShoppingCart = Loadable({
    loader: () => import("./shoppingcart"),
    loading: Loading
})

const Login = Loadable({
    loader: () => import("./login"),
    loading: Loading
})

export {
    ChoiceNess,
    Group,
    Mine,
    NineTwo,
    ShoppingCart,
    Login
}