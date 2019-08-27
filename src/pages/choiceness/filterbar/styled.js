import styled from "styled-components"

export const FilterBarWrapper = styled.div`
.filterbar{
    z-index: 10;
    font-size: .61333333rem;
    margin-top: .34133333rem;
    position: relative;
    width: 100%;
    height: 1.70666667rem;
    color: #333;
    background-color: #fff;
    .search_btn{
        position: absolute;
        display: inline-block;
        width: 1.728rem;
        height: 1.728rem;
        background-color: #ecc;
        right: 0;
        top: 0;
        top: 0;
        z-index: 34;
        font-size: .85333333rem;
        text-align: center;
        line-height: 1.728rem;
        color: #000;
    }
    .gradient_mask{
        position: absolute;
        top: 0;
        z-index: 34;
        width: 1.536rem;
        height: 1.62133333rem;
        right: 1.728rem;
        background: -webkit-linear-gradient(left,hsla(0,0%,100%,0),#fff 90%,#fff);
    }
    .filterbar_nav{
        height: 1.70666667rem;
        line-height: 1.70666667rem;
        padding-left: .6rem;
        z-index: 29;
        background: #F1F1F1;
        width:88%;
        .nav_inner{
            height: 1.70666667rem;
            overflow-x: auto;
            white-space: nowrap;
            .nav_item{
                text-align: center;
                padding: 0 .4rem;
                cursor: pointer;
            }
        }
    }  
}
`