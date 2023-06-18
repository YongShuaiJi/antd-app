import React, { Component } from 'react'
import { Typography, Select, Space, Button } from 'antd';

const {Title} = Typography;

export default class index extends Component {
    state = {
        defaultNumber: 0
    }

    componentDidMount(){
        this.selectNumber = this.state.defaultNumber
    }

    increment = ()=>{
        const value = this.selectNumber
        this.props.increment(Number(value))
    }
    
    decrement = () => {
        const value = this.selectNumber
        this.props.decrement(Number(value))
        
    }
    incrementIfOdd = () => {
        const value = this.selectNumber
        const count = this.props.count;
        if(count%2 !== 0){
            this.props.increment(Number(value))
        }
    }
    
    incrementAsync = () => {
        const value = this.selectNumber
        this.props.incrementAsync(Number(value),200)
    }

    handleChange = (value) => {
        this.selectNumber = value
    };

    render() {
        return (
            <div>
                <Title level={2}>当前求和为：{this.props.count}</Title>
                <Space wrap>
                    <Select
                    defaultValue= {this.state.defaultNumber}
                    style={{
                        width: 120,
                    }}
                    onChange={this.handleChange}
                    options={[
                        {
                            value: '1',
                            label: '1',
                        },
                        {
                            value: '2',
                            label: '2',
                        },
                        {
                            value: '3',
                            label: '3',
                        },
                    ]}
                    />
                    <Button onClick={this.increment}> + </Button>
                    <Button onClick={this.decrement}> - </Button>
                    <Button onClick={this.incrementIfOdd}> 当前求和为奇数再加 </Button>
                    <Button onClick={this.incrementAsync}> 延时加 </Button>
                </Space>
            </div>
        )
    }
}
