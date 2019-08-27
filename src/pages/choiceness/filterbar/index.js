import React, { Component } from 'react'
import { FilterBarWrapper } from "./styled"

export default class FilterBar extends Component {
    render() {
        return (
            <FilterBarWrapper >
                 {/* filterbar */}
                 <section className="filterbar">
                    <a className="search_btn" href="#"><i>搜</i></a>
                    <div className="gradient_mask"></div>
                    <div className="filterbar_nav">
                        <div className="nav_inner">
                            <a className="nav_item">今日特卖</a>
                            <a className="nav_item">童装</a>
                            <a className="nav_item">母婴</a>
                            <a className="nav_item">居家</a>
                            <a className="nav_item">女装</a>
                            <a className="nav_item">美食</a>
                            <a className="nav_item">鞋包</a>
                            <a className="nav_item">美妆</a>
                            <a className="nav_item">进口</a>
                        </div>
                    </div>
                </section>
            </FilterBarWrapper>
        )
    }
}
