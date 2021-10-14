import React from 'react';
import {cartStore, removeFromCard} from "../../api";


export function Cart({product}){

    // alert(product)

    if (!product.length || !product){
        return <div style={{marginTop:300,fontSize:50,direction:"rtl"}} className="text-center">سبد خرید خالیست.</div>
    }

    const removeHandler = (product) => {
        cartStore.dispatch(removeFromCard(product))
    }

    return <table className="table mt-5">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">pic</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">nums</th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        {product.map((product , index) =>
            <tr>
                <th scope="row">{index + 1}</th>
                <td><img width="50" src={product.pic} /></td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.quantitiy}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => removeHandler(product)}>remove</button>
                </td>

            </tr>
        )}

        </tbody>
    </table>
}