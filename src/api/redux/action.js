export const ADD_TO_CART = '[PRODUCT] ADD_RO_CARD';
export const REMOVE_FROM_CART = '[PRODUCT] REMOVE_FROM_CART';

export function addToCard (product){
    return {type: ADD_TO_CART , payload: product};

}export function removeFromCard (product){
    return {type: REMOVE_FROM_CART , payload: product};

}