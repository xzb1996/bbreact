import React, { Component } from 'react'
import { choiceness_api } from "@api/choiceness"
import Advertising from "./advertising/index"
import Metro from "./metro/index"
import FilterBar from "./filterbar/index"
import Wraper from "./wraper/index"
import { ChoiceNessWrapper } from "./styled"
import BScrollComponent from "@common/bscroll"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./connect"

class ChoiceNess extends Component {
    state={
        weekGoods:[]
    }
    render() {
        let { weekGoods } = this.state;
        console.log(weekGoods,1111)
        return (
            <BScrollComponent ref="bscroll">
                <ChoiceNessWrapper >
                    <Advertising />
                    <Metro />
                    <FilterBar />
                    <Wraper state={weekGoods} />
                </ChoiceNessWrapper>
            </BScrollComponent>
        )
    }
    componentDidMount() {
        this.props.handleGetGoodList();

        // console.log(this.props.weekGoods)

        this.handleGetData();
        
        // // 上拉
        // this.refs.bscroll.handlepullingUp(() => {
        //     this.props.handleGetGoodList();
        // })
        // this.refs.bscroll.handleRestpullingUp();
        // 上拉
        this.refs.bscroll.handlepullingUp(async () => {
            let data = await choiceness_api();
            let dataMore = this.state.weekGoods.concat(data.martshows)
            this.setState({
                weekGoods: dataMore
            })
            this.refs.bscroll.handleRestpullingUp();
        })
        // 下拉刷新
        this.refs.bscroll.handlepullingDown(() => {
            this.handleGetData();
        }) 
        console.log(111);
        this.refs.bscroll.handlefinishPullDown();
    }
    async handleGetData() {
        let data = await choiceness_api();
        if (data) {
            this.setState({
                weekGoods: data.martshows
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChoiceNess)
