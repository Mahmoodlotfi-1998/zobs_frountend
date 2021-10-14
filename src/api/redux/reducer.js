import {ADD_TO_CART,REMOVE_FROM_CART} from "./action";

export function cartReducer(state = [],action){
    switch (action.type){
        case ADD_TO_CART:

            const product = state.find(item => item.id === action.payload.id)

            if (product){
                product.quantitiy +=1;
                const  products = state.filter(item => item.id !== action.payload.id)
                return [...products,product]
            }
            action.payload.quantitiy = 1;
            return [...state, action.payload];

        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload.id)

        default:
            return state;
    }
}