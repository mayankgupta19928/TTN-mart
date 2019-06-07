export function Additem (cart,price,stock){
    return {
        type: 'AdToCart',
        payload:cart,
        price,
        stock
    }
}

export function removeItem (cart){
    return {
        type: 'removeToCart',
        payload:cart
    }
}


export function createItem (item){
    return {
        type: 'CreateItem',
        payload:item
    }
}
