import * as actions from '../actions/actions';

const initialState = {
    items: [
        {
            id: 988,
            name: 'Realme 5 (Crystal Purple, 32GB) (3GB RAM)',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlP6Vnf9aue8dVtdV__sgkAcnuHEpBbana8TJftcgXhILkJFlHh4IfzGdLu_rTL11V6Z0lrw&usqp=CAc',
            price: 14000
        },
        {
            id: 948,
            name: 'Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)',
            url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRjNgncfy3D6N4WlmJ_-UXL-gXRQ85CPWTrjFurxOiaNWZ2PBeE_yXNBkIaRm6a5-s9X20j7eGu&usqp=CAc',
            price: 23000
        },
        {
            id: 928,
            name: 'Mi 10i 5G (Pacific Sunrise, 8GB RAM, 128GB Storage)',
            url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUd3oIfHRDh6AWhPK2Ea5uKiIz5ZdTcCjr_qugtQkq9nbSPBlbgJZ_UHjo2PIEN2qWRySnVSIZ-ck&usqp=CAc',
            price: 24000
        }
    ],
    cartItems: [],
    totalPrice: 0
}

const addItem = (state, action) => {
    const initItems = [...state.items];
    initItems.push(action.item);
    return initItems;
}

const addCartItem = (state, action) => {
    let initState = {...state};
    let tP = initState.totalPrice;
    tP += Number(action.item.price);
    const initCartItems = [...initState.cartItems];
    initCartItems.push(action.item);
    return {
        initCartItems,
        tP
     };
}

const removeCartItem = (state, action) => {
    let initState = {...state};
    let tp = initState.totalPrice;
    tp -= Number(action.item.price);
    const cartItems = [...initState.cartItems];
    cartItems.splice(action.index, 1);
    return {
        cartItems,
        tp
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_ITEM:
            return {
                ...state,
                items: addItem(state, action)
            }
        case actions.ADD_CART_ITEM:
            const {initCartItems, tP} = addCartItem(state, action);
            return {
                ...state,
                cartItems: initCartItems,
                totalPrice: tP
            }
        case actions.REMOVE_CART_ITEM:
            const {cartItems, tp} = removeCartItem(state, action);
            return {
                ...state,
                cartItems: cartItems,
                totalPrice: tp
            }
        default: 
            return state;
    }
}

export default reducer;