import React, { Component } from 'react';
import { DetailWrapper } from "./styled";
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import Banner  from "./banner"
class Detail extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    render() {
        let { list } = this.state;
        console.log(list, "detail");
        return (
            <DetailWrapper>
            <Banner />
                <div className="detail">
                    <div className="banner">
                        <img src={list.square_img} alt="" />
                    </div>
                    <div className="price">
                        <div className="sale-wrap">
                            <span className="sale_new">￥ {list.price / 100} </span>
                            <span className="sale_origin">￥ {list.origin_price / 100} </span>
                            <span className="buying_info">{list.buying_info}</span>
                        </div>
                    </div>

                    <div className="title">
                        <div>
                            <h3>{list.title}</h3>
                            <a href="#"><i></i><p>收藏</p></a>
                        </div>
                    </div>
                    <div className="product">
                        <div className="promotion-wrap">
                            <div className="list">
                                <div className="label">优惠</div>
                                <div className="info">
                                    <div className="detail">
                                        <span className="label">红包</span>
                                        下单再返<span>{list.beiji_cms_desc}</span>元红包，分享提现
                                    </div>
                                    <div className="coupon">
                                        <span className="label">领劵</span>
                                        满109减10元 | 满10减2元
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="welfare-banner">
                            <div className="banner">
                                <img src="http://h0.hucdn.com/open/201850/cb02b5876513af86_150x117.png" alt="" />
                                <div className="text">
                                    <span className="label">邀请10个粉丝下单升团长，下单可赚</span>
                                    <span className="price"> {list.beiji_cms_desc ? list.beiji_cms_desc / 2 : 1} 元</span>
                                </div>
                            </div>
                        </div>
                        <div className="welfare-sort">
                            <div className="share">
                                <span className="label">福利</span>
                                <div className="info">
                                    邀请新用户下单即得
                                <span className="price">5</span>
                                    元，多邀请多得
                                </div>
                            </div>
                            <div className="service">
                                <div className="label">服务</div>
                                <div className="info">
                                    全场包邮
                                    · 24小时发货
                                    · 7天无忧售后
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="options">
                        <a href="#" ><i className="home_btn"></i><p>首页</p></a>
                        <a href="#" ><i className="store_btn"></i><p>店铺</p></a>
                        <a href="#" ><i className="cart_btn"></i><p>购物车</p></a>
                        <div className="add_cart">加入购物车</div>
                        <div className="buy_single">立即购买</div>
                    </div>
                </div>
            </DetailWrapper>
        )
    }

    componentWillMount() {
        let goodslist = this.props.list;
        let id = this.props.match.params.iid;
        let goods = goodslist.filter((item, index) => (
            (item.type_home_item_single.iid).toString() === id
        ))
        let obj = goods[0].type_home_item_single;
        this.setState({
            list: obj
        })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail);








