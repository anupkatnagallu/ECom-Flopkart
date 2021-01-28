import classes from './CartHeadingRow.module.css';

const CartHeadingRow = props => {
    return (
        <div className={classes.CartHeadingRow}>
            <p className={classes.ItemName}>Item Name</p>
            <p className={classes.ItemPrice}>Item Price</p>
            <p className={classes.Action}>Action</p>
        </div>
    );
}

export default CartHeadingRow;