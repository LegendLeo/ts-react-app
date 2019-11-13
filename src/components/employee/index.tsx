import React, { Component } from 'react'
// import React, { useState, Component } from 'react'
import { Table } from 'antd'

import { EmployeeResponse } from '../../interface/employee'
import QueryForm from '../employee/QueryForm'

const employeeColumns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '部门',
    dataIndex: 'department',
    key: 'department'
  },
  {
    title: '入职时间',
    dataIndex: 'hiredate',
    key: 'hiredate'
  },
  {
    title: '职级',
    dataIndex: 'level',
    key: 'level'
  }
]

interface State {
  employee: EmployeeResponse
}

class Employee extends Component<{}, State> {
  state: State = {
    employee: undefined
  }
  setEmployee = (employee: EmployeeResponse) => {
    this.setState({
      employee
    })
  }
  getTotal() {
    let total: number
    if (typeof this.state.employee !== 'undefined') {
      total = this.state.employee.length
    } else {
      total = 0
    }
    return <p>共 {total} 名员工</p>
  }
  render() {
    return (
      <>
        <QueryForm onDataChange={this.setEmployee} />
        {/* {this.getTotal()} */}
        <Table
          columns={employeeColumns}
          dataSource={this.state.employee}
          className="table"
        />
      </>
    )
  }
}

export default Employee
