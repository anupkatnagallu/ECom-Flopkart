import CartHeadingRow from '../../components/CartHeadingRow/CartHeadingRow';
import CartItemRow from '../../components/CartItemRow/CartItemRow';
import classes from './Cart.module.css';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../store/actions/actions';

const Cart = props => {
    const [cartItems, totalPrice] = useSelector(state => {
        return [state.cartItems, state.totalPrice];
    });

    const dispatch = useDispatch();

    const removeItem = (index, item) => dispatch({type: actions.REMOVE_CART_ITEM, index: index, item: item});

    const cartItemsUi = [];

    cartItems.forEach((item, index) => {
        cartItemsUi.push(<CartItemRow key={item.id * Math.random()} name={item.name} price={item.price} click={() => removeItem(index, item)}/>);
    });
    return (
        <div className={classes.Cart}>
            <h3>My Cart</h3>
            <CartHeadingRow />
            {cartItemsUi}
            <h2>Your total cart amount : {totalPrice}/-</h2>
        </div>
    );
}

export default Cart;