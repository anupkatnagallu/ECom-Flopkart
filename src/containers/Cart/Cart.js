import CartHeadingRow from '../../components/CartHeadingRow/CartHeadingRow';
import CartItemRow from '../../components/CartItemRow/CartItemRow';
import classes from './Cart.module.css';

const Cart = props => {
    return (
        <div className={classes.Cart}>
            <h3>My Cart</h3>
            <CartHeadingRow />
            <CartItemRow />
            <CartItemRow />
            <CartItemRow />

            <h2>Your total cart amount : 13500/-</h2>
        </div>
    );
}

export default Cart;