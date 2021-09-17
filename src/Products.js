import React from 'react';
import './index.css';

class Products extends React.PureComponent {
    state = {
        products: [],
    }

    componentDidMount() {
        this.setState({
            products: [
                {id: 1, name: 'Товар 1', price: 1000},
                {id: 2, name: 'Товар 2', price: 2000},
                {id: 3, name: 'Товар 3', price: 3000},
                {id: 4, name: 'Товар 4', price: 4000},
                {id: 5, name: 'Товар 5', price: 5000},
            ],
        })
    }

    create = (id, name, price) => {
        this.setState({
            products: [
                ...this.state.products,
                {
                    id: id,
                    name: name,
                    price: price
                }
            ]
        })
    }

    update = (id, name, price) => {
        this.setState({
            products: this.state.products.map(product => (
                product.id !== id ? product : {
                    id: id,
                    name: name,
                    price: price
                }
            ))
        })
    }

    delete = (targetId) => {
        this.setState({
            products: this.state.products.filter(({id}) => id !== targetId)
        })
    }

    render() {
        return (
            <table className="products">
                <thead>
                <tr>
                    <th className="products_th">#</th>
                    <th className="products_th">Название</th>
                    <th className="products_th">Цена</th>
                    <th className="products_th">Действия</th>
                </tr>
                </thead>
                <tbody>
                {this.state.products.map(product => (
                    <tr key={product.id}>
                        <td className="products_td">{product.id}</td>
                        <td className="products_td">{product.name}</td>
                        <td className="products_td">{product.price}</td>
                        <td className="products_td">
                            <button
                                className="products_btn"
                                onClick={() => this.delete(product.id)}
                            >Delete
                            </button>
                        </td>

                    </tr>
                ))}

                </tbody>
            </table>
        )
    }
}

export default Products;