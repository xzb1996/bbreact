import React, { Component, Fragment } from 'react'
import { Wrapper } from "./styled"

export default class Wraper extends Component {
    render() {
        return (
            <Wrapper >
                 {/* wraper */}
                 <section className="wrapper">
                    <header className="wrapper_header"><span>每天9点准时上新</span></header>
                    <div className="list_content">
                        <a className="item_show" href="">
                            <div className="product-img">
                                <img className="img_info" src="https://b1.hucdn.com/upload/tuan/1907/23/69745912190000_750x350.jpg!750.webp" alt="" />
                                <img className="img_icon" src="" alt="" />
                            </div>
                            <div className="produce_details">
                                <p className="product-title">【第2件减3元】网红雪媚娘丹拿海鸭蛋咸蛋黄酥20枚</p>
                                <p className="product-info">网红蛋黄酥 · 皮酥馅多 · 浓郁蛋香</p>
                                <p className="product_cur">
                                    <span className="price_info">￥21.8</span>
                                    <span className="instant_buy">立即团</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </section>
            </Wrapper>
        )
    }
}


