import styled from "styled-components"

export const Wrapper = styled.div`
.wrapper_header{
    height: 1.92rem;
    width: 100%;
    text-align: center;
    line-height: 1.92rem;
    color: #3d3d3d;
    background: #f7fafc;
    border-bottom: 1px solid rgba(0,0,0,.08);
}
.wrapper{
    padding-bottom:.32rem;
    width: 100%;
    background: #fff;
    font-size: .85333333rem;
    min-height: 12rem;
    .list_content{
        width: 100%;
        .item_show{
            padding-top: .34133333rem;
            overflow: hidden;
            display: block;
            width: 100%;
            cursor: pointer;
            .product-img{
                position: relative;
                width: 100%;
                height: 7.04rem;
                .img_info{
                    width: 100%;
                    height: 100%;
                    transition: all .3s linear;
                }
                .img_icon{
                    top: 0;
                    left: 0;
                    width: 2.474666666666667rem;
                    position: absolute;
                }
            }
            .produce_details{
                height: 3.66933333rem;
                width: 100%;
                padding: .512rem;
                box-sizing: border-box;
                .product-title{
                    margin-bottom: .34133333rem;
                    color: #333;
                    font-size: .59733333rem;
                    text-align: left;
                    height: .68266667rem;
                    line-height: 1;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 100%;
                    overflow: hidden;
                }
                .product-info{
                    color: #999;
                    font-size: .512rem;
                    line-height: 1;
                }
                .product_cur{
                    width: 100%;
                    height: .85333333rem;
                    line-height: 1;
                    vertical-align: middle;
                    position: relative;
                    margin: .42666667rem 0;
                }
                .price_info{
                    color: #FF1A1A;
                    font-weight: 700;
                    font-size: .68266667rem;
                    vertical-align: middle;
                    line-height: 1;
                }
                .instant_buy{
                    width: 2.56rem;
                    height: .93866667rem;
                    line-height: .93866667rem;
                    text-align: center;
                    border: 1px solid #333;
                    border-radius: .46933333rem;
                    color: #333;
                    display: inline-block;
                    position: absolute;
                    right: .512rem;
                    bottom: .064rem;
                    font-size: .512rem;
                }
            }        
        }
    }   
}
`
