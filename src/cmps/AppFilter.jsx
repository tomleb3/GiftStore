import { Component } from 'react'

export class AppFilter extends Component {

    state = {
        filterBy: '',
    }

    onFilter = (ev) => {
        this.props.onSetFilter(ev.target.value)
        console.log(this.state)
    }

    // get productsForDisplay() {
    //     const { filterBy } = this.state
    //     const { products } = this.props
    //     // products.
    //     const filterRegex = new RegExp(filterBy, 'i')
    //     return this.props.products.filter(product => {
    //         // filterRegex.test(product.)
    //     })
    // }

    render() {
        return <div className="app-filter">
            <h4>Filter</h4>
            <form>
                <select name="gender" onChange={this.onFilter}>
                    <option value="">Both</option>
                    <option value="3">Him</option>
                    <option value="4">Her</option>
                </select>
                <select name="budget" onChange={this.onFilter}>
                    <option>All</option>
                    <option value="value1">Up to $25</option>
                    <option value="value2">$25-$50</option>
                    <option value="value3">$50-$75</option>
                    <option value="value4">$75-$100</option>
                    <option value="value5">$100+</option>
                </select>
            </form>
        </div>
    }
}