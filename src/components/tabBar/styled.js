import styled from "styled-components"

export const TabBarWrapper = styled.div`
    width:100%;
    height:2rem;
    position:fixed;
    left:0;
    bottom:0;
    border-top:1px solid #333;
    background:#fff;
    z-index:31;
    ul{
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-between;
        padding-top:.15rem;
        li{
            width:100%;
            height:100%;
        }
        a{
            width:100%;
            height:100%;
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            color:#333;
        }
        i{
            font-size:1.024rem;
        }
        p{
            font-size:.45rem;
        }
        .active{
            color:#ff512b;
        }
    }
`