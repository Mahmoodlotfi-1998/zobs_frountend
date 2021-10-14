import React, {useState,Component} from 'react';
import { Cart } from '../components/cart'
import {cartStore} from "../api";

export class CartPage extends Component {

    state = {product:{}};

    componentDidMount() {
        this.setState({ product: cartStore.getState() });
        this.unsubscribe = cartStore.subscribe(() =>
            this.setState({ product: cartStore.getState() })
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    // alert(state.product);

    render() {
        return (
            <div className="mt-5">
                <Cart product={this.state.product} />
            </div>
        );
    }
}