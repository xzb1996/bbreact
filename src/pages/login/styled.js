import styled from "styled-components"

export const LoginWrapper = styled.div`
    .login{
        position:relative;
        overflow:hidden;
        .input{
            margin-top: .78933333rem;
            font-size: 0;
            background-color: #fff;
            position: relative;
            .name_input{
                margin-left: .512rem;
                display: block;
                z-index: 1;
                position: relative;
                width: 100%;
                height: 1.87733333rem;
                padding: .59733333rem 0 .55466667rem 1.38666667rem;
                background-position: 0 center;
                background-repeat: no-repeat;
                background-size: auto .93866667rem;
                line-height: .72533333rem;
                font-size: .64rem;
                border-bottom: 1px solid rgba(0,0,0,.08);
                border:none;
            }
            .name_clear{
                position: absolute;
                top: .512rem;
                left: .512rem;
                font-size:.84rem;
                width:.6rem;
                height:.6rem;
                z-index: 3;
                color: #333;
            }
            .pw_input{
                border:none;
                margin-left: .512rem;
                display: block;
                z-index: 1;
                position: relative;
                width: 100%;
                height: 1.87733333rem;
                padding: .59733333rem 0 .55466667rem 1.38666667rem;
                background-position: 0 center;
                background-repeat: no-repeat;
                background-size: auto .93866667rem;
                line-height: .72533333rem;
                font-size: .64rem;
                border-bottom: 1px solid rgba(0,0,0,.08);
            }
            .pw_clear{
                font-size:.84rem;
                top: 2.368rem;
                left: .512rem;
                position: absolute;
                z-index: 3;
                color: #333;
            }
        }
        .check{
            height: 1.87733333rem;
            line-height: 1.87733333rem;
            background: #fff;
            box-shadow: none;
            input{
                border:none;
                width: 56%;
                height: 1.87733333rem;
                line-height: .93866667rem;
                font-size: .64rem;
                border-radius: .2rem;
                padding-left: .512rem;
            }
            span{
                padding: .256rem .512rem .256rem 0;
                height: 1.36533333rem;
                float: right;
            }
        }
        .login_btn{
            background-color: #FF4965;
            color: #FFF;
            width: 14.976rem;
            height: 1.87733333rem;
            border-radius: .17066667rem;
            margin-top: .78933333rem;
            margin-left: .512rem;
            line-height: 1.87733333rem;
            font-size: .72533333rem;
            text-align: center;
        }
        .remeber{
            margin: .512rem;
            overflow: hidden;
            .btn_signUp{
                float: left;
                color: #3d3d3d;
                font-size: .64rem;
                display: block;
                width: 4.992rem;
            }
            .btn_phoneLogin{
                float: left;
                color: #3d3d3d;
                font-size: .64rem;
                display: block;
                width: 4.992rem;
                text-align: center;
            }
            .btn_forgetPw{
                float: right;
                color: #3d3d3d;
                font-size: .64rem;
            }
        }
    }
`