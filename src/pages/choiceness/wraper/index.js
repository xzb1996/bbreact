import React, { Component } from 'react'
import { Wrapper } from "./styled"
import { HashRouter , Link } from "react-router-dom"
export default class Wraper extends Component {
    render() {
        let { state } = this.props
        return (        
            <Wrapper >
                {/* wraper */}
                <HashRouter>
                <header className="wrapper_header"><span>每天9点准时上新</span></header>
                {
                    state.map((item,index) => (
                        <section className="wrapper" key={index}>
                            <div className="list_content">
                            
                                <Link className="item_show" href="#" to={"/detail/"+item.type_home_item_single.iid}>
                                    <div className="product-img">
                                        <img className="img_info" src={item.type_home_item_single.img} alt="" />
                                        <img className="img_icon" src="" alt="" />
                                    </div>
                                    <div className="produce_details">
                                        <p className="product-title">{item.type_home_item_single.title}</p>
                                        <p className="product-info">{item.type_home_item_single.promotion_desc}</p>
                                        <p className="product_cur">
                                            <span className="price_info">￥{item.type_home_item_single.price/100}</span>
                                            <span className="instant_buy">{item.type_home_item_single.ext}</span>                       
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </section>
                    ))
                }
                </HashRouter>
            </Wrapper>
        )
    }
    componentDidMount(){

    }
}


