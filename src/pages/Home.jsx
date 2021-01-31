import { Component } from 'react'
import { storeService } from '../services/storeService.js'
import { ProductList } from '../cmps/ProductList.jsx'
import { AppFilter } from '../cmps/AppFilter.jsx'

export class Home extends Component {

    state = {
        Stores: [],
        Products: [],
        filteredProducts: []
        // filterBy
    }

    async componentDidMount() {
        const Stores = await storeService.query()
        let { Products, filteredProducts } = this.state
        Products = Stores.reduce((acc, store) => {
            store.Products.forEach(product => acc.push(product))
            return acc
        }, [])
        console.log(Products)
        filteredProducts = Products
        this.setState({ Stores, Products, filteredProducts })
    }

    onSetFilter = (value) => {
        let { Stores, Products, filteredProducts } = this.state
        filteredProducts = []
        Products.filter(product => {
            if (!value) filteredProducts.push(product)
            if (value.length <= 1) {
                product.ProductTags.filter(tag => {
                    if (tag === +value) filteredProducts.push(product)
                })
            }
            else {
                switch (value) {
                    case 'value1':
                        if (product.Price <= 25)
                            filteredProducts.push(product)
                        break
                    case 'value2':
                        if (product.Price > 25 && product.Price <= 50)
                            filteredProducts.push(product)
                        break
                    case 'value3':
                        if (product.Price > 50 && product.Price <= 75)
                            filteredProducts.push(product)
                        break
                    case 'value4':
                        if (product.Price > 75 && product.Price <= 100)
                            filteredProducts.push(product)
                        break
                    case 'value5':
                        if (product.Price > 100)
                            filteredProducts.push(product)
                        break
                    default:
                        filteredProducts.push(product)
                        break
                }
            }
        })
        this.setState({ filteredProducts })
    }

    render() {
        const { Stores, Products, filteredProducts } = this.state

        return <section className="home main-layout">
            <AppFilter products={Products} onSetFilter={this.onSetFilter} />
            <ProductList products={filteredProducts} />
        </section >
    }
}