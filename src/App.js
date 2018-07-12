import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Table, Button} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            status: 'loading',
            cart: []
        };
    }


    componentDidMount() {
        axios.get('https://tesco-hackathon.herokuapp.com/api/cart/20').then(response => {
            console.log((response));
            this.setState({status: 'done', cart: response.data});
        });
    }

    render() {

        return (
            <div className="App">
                <h1>App Cart</h1>
                <h2>Items in the cart</h2>
                <p>current date is {this.state.date.toLocaleDateString()} </p>
                <p>status is : {this.state.status}</p>
                {this.createTable()}
            </div>
        );
    }

    removeAnItem(id) {
        this.state.cart.splice()
    }

    createTable() {
        if (this.state.cart.length > 0) {
            return (

                <div>
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>
                                name
                            </th>
                            <th>
                                price
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.cart.map((cart) => {
                                return (
                                    <tr key={cart.id}>
                                        <td>{cart.id}</td>
                                        <td>{cart.item_name}</td>
                                        <td>{cart.price}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    <Button>Checkout</Button>
                </div>

            );
        } else {
            <div/>
        }

    }
}

export default App;
