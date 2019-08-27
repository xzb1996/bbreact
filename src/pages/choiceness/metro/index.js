import React, { Component} from 'react'
import { MetroWrapper } from "./styled"
import { metro_api } from "@api/choiceness"
export default class Metro extends Component {
    state={     
        weekGoods:[]
    }
    render() {
        let { weekGoods } = this.state;
        return (
            <MetroWrapper >
                {/* Metro */}
                <section className="metro">
                    <a href="#" className="item item0"><img src={weekGoods[0] ? weekGoods[0].img : ""} alt="" /></a>
                    <a href="#" className="item item1"><img src={weekGoods[1] ? weekGoods[1].img : ""} alt="" /></a>
                    <a href="#" className="item item2"><img src={weekGoods[2] ? weekGoods[2].img : ""} alt="" /></a>
                    <a href="#" className="item item3"><img src={weekGoods[3] ? weekGoods[3].img : ""} alt="" /></a>
                    <a href="#" className="item item4"><img src={weekGoods[4] ? weekGoods[4].img : ""} alt="" /></a>
                </section>
            </MetroWrapper>
        )
    }
    async componentDidMount() {
        let data = await metro_api();
        this.setState({
            weekGoods:data.promotion_pro_shortcuts
        })
    }

}
