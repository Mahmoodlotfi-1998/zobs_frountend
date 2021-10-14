import React,{Component} from 'react';
import {cartStore} from "../../api";


export class CartIcon extends Component{

    state = {};

    componentDidMount() {
        this.unsubscribe = cartStore.subscribe(() =>
            this.setState({ count: cartStore.getState().length })
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return <div>
            <img width={30} src="../../images/cart_shop.jpg" />
            {this.state.count > 0 &&
            <span className="badge" style={{background:'red',borderRadius:30,position:'absolute',marginTop:-10,marginLeft:-5}}>
                {this.state.count}
            </span>
            }
        </div>
    }
}