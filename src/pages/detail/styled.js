import styled from "styled-components"

export const DetailWrapper = styled.div`
    width:100%;
    height:100%;
    padding-bottom:2.048rem;
    overflow:auto;
    .banner{
        width:100%;
        height:14rem;
        background:#fff;
        img{
            width:100%;
            height:100%;
        }
    }
    .price{
        background:#fff;
        overflow:hidden;
        .sale-wrap{
            margin-top:.512rem;
            padding:0 .512rem;
            position:relative;
            .sale_new{
                font-size:.7rem;
                font-weight:700;
                color:#ff1a1a;
            }
            .sale_origin{
                font-size:.45rem;
                color:#999;
                margin-left:.21333333rem;
                text-decoration:line-through;
            }
            .buying_info{
                font-size: .512rem;
                color: #999;
                position:absolute;
                right:.9rem;
                top:.6rem;
            }
        }
    }
    .title{
        width:100%;
        position:relative;
        overflow:hidden;
        div{
            padding:.34133333rem 2.304rem .34133333rem .512rem;
            color:#000;
            width:100%;
            overflow:hidden;
            h3{
                float:left;
                font-size:.58rem;
                color:#333;
                height:1.87733333rem;
                line-height:.93866667rem;
                font-weight:700;
                text-overflow:ellipsis;
            }
            a{
                border-right:.02133333rem solid rgba(0,0,0,.08);
                position:absolute;
                right:0;
                display:inline-block;
                width:2.13333333rem;
                height:2.048rem;
                text-align:center;
                vertical-align:top;
                font-weight:400;
                i{
                    background:url(//h0.hucdn.com/open/201832/8c891dcd58b1230d_66x66.png);
                    margin-top: .128rem;
                    margin-bottom:.10666667rem;
                    display:inline-block;
                    background-repeat:no-repeat;
                    width: .96866667rem;
                    height:.96866667rem
                }
                p{
                    font-size:.5rem;
                    line-height:.46933333rem;
                    color:#3d3d3d;
                    text-align:center;
                }
            }
        }
    }
    .product{
        .promotion-wrap{
            width:100%;
            padding:.512rem;
            box-sizing:boeder-box;
            background:#fff;
            .list{
                width:100%;
                display:flex;
                align-items:baseline;
                justify-content:left;
                .label{
                    margin-right: .08533333rem;
                    width: 1.28rem;
                    font-size: .55466667rem;
                    color: #999; 
                }
                .info{
                    width:12.8rem;
                    color:#333;
                    .detail{
                        font-size:.45rem;
                        line-height: .55466667rem;
                        margin-bottom: .42666667rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        .label{
                            line-height:.55466667rem;
                            white-space:nowrap;
                            font-size:.45rem;
                            display: inline-block;
                            margin-right: .42666667rem;
                            padding: .08533333rem;
                            text-align: center;
                            color: #ff1a1a;
                            border: 1px solid #ff1a1a;
                            border-radius: .34133333rem;
                        }
                    }
                    .coupon{
                        color:#ff1a1a;
                        font-size:.45rem;
                        .label{
                            font-size:.45rem;
                            display: inline-block;
                            margin-right: .42666667rem;
                            padding: .08533333rem;
                            text-align: center;
                            color: #ff1a1a;
                            border: 1px solid #ff1a1a;
                            border-radius: .34133333rem;
                        }
                    }
                }
            }
        }
        .welfare-banner{
            padding-bottom: .512rem;
            width: 100%;
            height: 1.87733333rem;
            background: #fff;
            .banner{
                display: flex;
                align-items: center;
                margin: auto;
                width: 14.976rem;
                height: 100%;
                font-size:.45rem;
                color: #cc815c;
                background: #fff7f0;
                border-radius: .08533333rem;
                overflow: hidden;
                img{
                    width:2.13333333rem;
                    display:block;
                }
                .text{
                    width: 10.66666667rem;
                    color: #cc815c;
                    font-size:.45rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    .label{
                        color:#cc815c;
                    }
                    .price{
                        color:#ff1a1a;
                    }   
                }
            }
        }
        .welfare-sort{
            margin-top:.34133333rem;
            width: 100%;
            padding: .512rem;
            box-sizing: border-box;
            background: #fff;
            .share{
                display:flex;
                justify-content: left;
                margin-bottom: .85333333rem;
                .label{
                    margin-right: .08533333rem;
                    width: 1.28rem;
                    font-size: .55466667rem;
                    color: #999;
                }
                .info{
                    width: 12.8rem;
                    color: #333;
                    font-size:.62rem;

                }
                .price{
                    color:#ff1a1a;
                }
            }
            .service{
                width: 100%;
                display: flex;
                align-items: baseline;
                justify-content: left;
                .label{
                    margin-right: .08533333rem;
                    width: 1.28rem;
                    font-size: .55466667rem;
                    color: #999;
                }
                .info{
                    font-size:.62rem;
                    width: 12.8rem;
                    color: #333;
                }
            }
        }
    }


    .options{
        width:16rem;
        height:2.048rem;
        position:fixed;
        z-index:99;
        bottom:0;
        left:0;
        background:#fff;
        text-align:center;
        font-weight:700;
        display:flex;
        a{
            position:relative;
            border-right:.02133333rem solid rgba(0,0,0,.08);
            display:inline-block;
            width:2.13333333rem;
            height:2.048rem;
            vertical-align:top;
            font-weight:400;
            border-top:1px solid #e4e4e4;
            i{
                margin-top: .256rem;
                margin-bottom: .10666667rem;
                display: inline-block;
                background-repeat: no-repeat;
                background-size: 100% 100%;
                width: .93866667rem;
                height: .93866667rem;
                background-repeat:no-repeat;
            }
            .home_btn{
                background-image:url(//h0.hucdn.com/open/201832/b6b97c9971b8992c_66x66.png);
            }
            .store_btn{
                background-image:url(//h0.hucdn.com/open/201831/29ea8874e5cda20a_44x44.png);
            }
            .cart_btn{
                background-image:url(//h0.hucdn.com/open/201832/2bb9b06d9263e05e_66x66.png);
            }
            p{
                font-size:.4rem;
                line-height: .46933333rem;
                color:#3d3d3d;
            }
        }
        .add_cart{
            height: 2.048rem;
            vertical-align: top;
            background-color: #000;
            color: #fff;
            font-size: .64rem;
            line-height: .64rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            flex:1;
        }
        .buy_single{
            height: 2.048rem;
            vertical-align: top;
            background-color: #ff2436;
            color: #fff;
            font-size: .64rem;
            line-height: .64rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            flex:1;
        }
    }
`