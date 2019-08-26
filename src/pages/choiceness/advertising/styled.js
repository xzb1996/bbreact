import styled from "styled-components"

export const AdvertisingWrapper = styled.div`
.ptAppbar{
    position: relative;
    width:100%;
	line-height: 1.36533333rem;
	padding:.27733333rem .64rem;
	font-size: .59733333rem;
	z-index: 11;
	background-color: rgba(0,0,0,.8);
    cursor: pointer;
    overflow:hidden;
    .adbar{
        color: #fff;
        width:100%;
        .logo{
            float: left;
            width: 1.36533333rem;
            height: 1.36533333rem;
            margin-right: .40533333rem;
            border-radius: .17066667rem;
        }
        .benfit_tips{
            display: inline-block;
        }
        .go_d1{
            float: right;
            height: 1.06666667rem;
            line-height: 1.06666667rem;
            margin-top: .128rem;
            padding: 0 .29866667rem;
            text-align: center;
            cursor: pointer;
            background-color: #ff4848;
        }
    } 
}
   
`