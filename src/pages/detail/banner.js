import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from 'react';

class Banner extends Component {
    state = {
        data: [],
        imgHeight: 176,
    }
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);


        let goodslist = this.props.list;
        let id = this.props.match.params.iid;
        let goods = goodslist.filter((item, index) => (
            (item.type_home_item_single.iid).toString() === id
        ))
        let obj = goods[0].type_home_item_single;

       
        this.setState({
            list: obj
        })

    }
}

export default Banner;
// ReactDOM.render(<App />, mountNode);