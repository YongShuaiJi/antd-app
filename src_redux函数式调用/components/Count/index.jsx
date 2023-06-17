import React, { Component } from 'react'
import { Typography, Select, Space, Button } from 'antd';
import store from '../redux/store'
import {IAction, DAction, WaitIAction} from '../redux/count_action'


const {Title} = Typography;


export default class index extends Component {
    state = {
        defaultNumber: 0
    }

    componentDidMount(){
        this.selectNumber = this.state.defaultNumber
        store.subscribe(()=>{
            this.setState({})
        })
    }

    increment = ()=>{
        const value = this.selectNumber
        store.dispatch(IAction(Number(value)))
    }
    
    decrement = () => {
        const value = this.selectNumber
        store.dispatch(DAction(Number(value)))
        
    }
    incrementIfOdd = () => {
        const value = this.selectNumber
        const count = store.getState();
        if(count%2 !== 0){
            store.dispatch(IAction(Number(value)))
        }
    }
    
    incrementAsync = () => {
        const value = this.selectNumber
        // setTimeout(()=>{
        //     store.dispatch(IAction(Number(value)))
        // }, 500)
        store.dispatch(WaitIAction(Number(value), 200))
        // WaitIAction(Number(value), 200)
    }

    handleChange = (value) => {
        this.selectNumber = value
    };

    render() {
        // console.log('i=',this.state.defaultNumber)
        return (
            <div>
                <Title level={2}>当前求和为：{store.getState()}</Title>
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
