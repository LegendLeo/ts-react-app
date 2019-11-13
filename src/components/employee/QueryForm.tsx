// import React, { Component, useState, useEffect } from 'react'
import React, { Component } from 'react'
import { Form, Input, Select, Button, message } from 'antd'
import { FormComponentProps } from 'antd/lib/form'

import { EmployeeRequest, EmployeeResponse } from '../../interface/employee'
import { getEmployee } from '../../api/employee'

const { Option } = Select

interface Props extends FormComponentProps {
  onDataChange(data: EmployeeResponse): void
}

class QueryForm extends Component<Props, EmployeeRequest> {
  state: EmployeeRequest = {
    name: '',
    departmentId: undefined
  }
  handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      name: e.currentTarget.value
    })
  }
  handleDepartmentChange = (value: number) => {
    this.setState({
      departmentId: value
    })
  }
  handleSubmit = () => {
    this.queryEmployee(this.state)
  }
  queryEmployee = (params: EmployeeRequest) => {
    getEmployee(params).then(res => {
      this.props.onDataChange(res.data)
    }).catch(err => {
      console.error(err)
      message.error('请求出错！')
    })
  }
  render() {
    return (
      <Form layout="inline">
        <Form.Item>
          <Input
            placeholder="姓名"
            style={{ width: 120 }}
            allowClear
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="部门"
            style={{ width: 120 }}
            allowClear
            value={this.state.departmentId}
            onChange={this.handleDepartmentChange}
          >
            <Option value={1}>技术部</Option>
            <Option value={2}>产品部</Option>
            <Option value={3}>市场部</Option>
            <Option value={4}>运营部</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.handleSubmit}>
            查询
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedQueryForm = Form.create<Props>({
  name: 'employee_query'
})(QueryForm)

export default WrappedQueryForm
