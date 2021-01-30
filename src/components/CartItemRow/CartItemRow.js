import classes from './CartItemRow.module.css';
import Button from '../../components/UI/Button/Button';

const CartItemRow = props => {
    return (
        <div className={classes.CartItemRow}>
            <p className={classes.ItemName}>{props.name}</p>
            <p className={classes.ItemPrice}>Rs. {props.price}</p>
            <div  className={classes.ButtonDiv}>
                <Button btnColor='red' click={props.click}>DELETE</Button>
            </div>
        </div>
    );
}

export default CartItemRow;