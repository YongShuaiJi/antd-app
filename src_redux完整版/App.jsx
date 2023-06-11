import React, { Component } from 'react'
import { Button, Space ,Card, Upload, Popconfirm } from 'antd'
// import logo from './logo.svg';
import { UploadOutlined, AlipayCircleOutlined } from '@ant-design/icons';
import './App.css';
import Count from './components/Count'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Space
        direction="vertical"
        size="middle"
        style={{
          display: 'flex',
        }}
        >
          <Card title="模块" size="small">
          <Space size="small">
            <AlipayCircleOutlined />
            <Button type="primary">确定</Button>
            <Upload>
              <Button icon={<UploadOutlined />}>上传</Button>
            </Upload>
            <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
              <Button>操作</Button>
            </Popconfirm>
          </Space>
          </Card>
          <Card title='求和计算' size='small'>
            <Count />
          </Card>
        </Space>

      </div>
    );
  }
}
