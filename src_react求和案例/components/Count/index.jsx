import React, { Component } from 'react'
import { Typography, Select, Space, Button } from 'antd';


const {Title} = Typography;


export default class index extends Component {
    state = {
        count: 0,
        defaultNumber: 0
    }

    componentDidMount(){
        this.selectNumber = this.state.defaultNumber
    }

    incremnet = ()=>{
        // console.log(`incremnet ${this.selectNumber}`);
        const value = this.selectNumber
        const {count} = this.state
        this.setState({
            count: Number(count) + Number(value)
        })
    }
    
    decrement = () => {
        // console.log(`decrement ${this.selectNumber}`);
        const value = this.selectNumber
        const {count} = this.state
        this.setState({
            count: Number(count) - Number(value)
        })
    }
    incrementIfOdd = () => {
        // console.log(`incrementIfOdd ${this.selectNumber}`); 
        const value = this.selectNumber
        const {count} = this.state
        if(count%2 !== 0){
            this.setState({
                count: Number(count) + Number(value)
            })
        }
    }
    
    incrementAsync = () => {
        // console.log(`incrementAsync ${this.selectNumber}`); 
        const value = this.selectNumber
        const {count} = this.state
        setTimeout(()=>{
            this.setState({
                count: Number(count) + Number(value)
            })
        }, 500)
    }

    handleChange = (value) => {
        this.selectNumber = value
        // console.log(`selected ${value}`);
    };

    render() {
        return (
            <div>
                <Title level={2}>当前求和为：{this.state.count}</Title>
                <Space wrap>
                    <Select
                    defaultValue={this.state.defaultNumber}
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
                    <Button onClick={this.incremnet}> + </Button>
                    <Button onClick={this.decrement}> - </Button>
                    <Button onClick={this.incrementIfOdd}> 当前求和为奇数再加 </Button>
                    <Button onClick={this.incrementAsync}> 延时加 </Button>
                </Space>
            </div>
        )
    }
}
