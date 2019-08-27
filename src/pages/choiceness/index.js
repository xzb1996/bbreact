import React, { Component } from 'react'
import { choiceness_api } from "@api/choiceness"
import Advertising from "./advertising/index"
import Metro from "./metro/index"
import FilterBar from "./filterbar/index"
import Wraper from "./wraper/index"
import { ChoiceNessWrapper } from "./styled"

export default class ChoiceNess extends Component {
    state={
        weekGoods:[]
    }
    render() {
        let { weekGoods } = this.state;
        return (
            <ChoiceNessWrapper >
                <Advertising />
                <Metro />
                <FilterBar />
                <Wraper state={weekGoods}/>
            </ChoiceNessWrapper>
        )
    }
    async componentDidMount() {
        let data = await choiceness_api();
        this.setState({
            weekGoods:data.martshows
        })
        // console.log(data,333);
    }
}
