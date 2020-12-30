import React, { Component } from 'react'
import api from '../services/api'
import DataTable, { createTheme } from 'react-data-table-component'

createTheme('custom', {
    background: {
      default: 'none',
    },
    context: {
      background: 'none'
    }
  });

const columns = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true
    },
    {
        name: 'Type',
        selector: 'type.name',
        sortable: true
    },
    {
        name: 'Category',
        selector: 'category.name',
        sortable: true
    },
    {
        name: 'Group',
        selector: 'group.name',
        sortable: true
    },
    {
        name: 'Value',
        selector: 'value',
        sortable: true
    },
    {
        name: 'Payment Date',
        selector: 'payment_date',
        sortable: true
    },
    {
        name: 'Expiration Date',
        selector: 'expiration_date',
        sortable: true
    }
]

class Table extends Component {
    render() {
        return (
        <DataTable
            columns={columns}
            data={this.props.orders}
            theme="custom"
        />
        )
    }
}

class Order extends Component {

    state = {
        orders: []
    }

    async componentDidMount(){
        const response = await api.get('orders')
        this.setState({ orders: response.data })
    }

    render(){
        return (<div className="container">

            <h1>Orders</h1>
            <Table orders={ this.state.orders }/>

        </div>)
    }

}

export default Order