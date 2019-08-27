import React, { Component } from 'react'
import { ShoppingWrapper } from "./styled"
import {Link} from "react-router-dom"
export default class Cart extends Component {
    render() {
        return (
            
                <ShoppingWrapper>
                    <div className="cart">
                        <i></i>
                        <p>您还没登录，请先登录哦~</p>
                        <Link to="/login"><span>登录贝贝</span></Link>
                    </div>
                    <div className="cart_title">
                        <img src="//h0.hucdn.com/open/201832/a455e163bad2ac29_32x32.png" alt="" />
                        <span>大家还买了</span>
                    </div>
                </ShoppingWrapper>
         
        )
    }

}

