import styled from "styled-components"

export const MetroWrapper = styled.div`
.metro{
	position: relative;
	height: 9.17333333rem;
	overflow: hidden;
    background: #fff;
    .item{
    position: absolute;
    box-sizing: border-box;
    border: 0 solid #e4e4e4;
    width: 4.69333333rem;
    height: 4.58666667rem;
    border-right-width: 1px;
    }
    .item img{
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
    }
    .item0{
        left: 0;
        top: 0;
        width: 6.61333333rem;
        height: 9.17333333rem;
    }
    .item1{
        left: 6.61333333rem;
        top: 0;
        border-bottom-width: 1px;
    }
    .item2{
        left: 11.30666667rem;
        top: 0;
    }
    .item3{
        left: 6.61333333rem;
        top: 4.58666667rem;
    }
    .item4{
        left: 11.30666667rem;
        top: 4.58666667rem;
    }
}

`