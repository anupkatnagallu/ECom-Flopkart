import classes from './CartItemRow.module.css';
import Button from '../../components/UI/Button/Button';

const CartItemRow = props => {
    return (
        <div className={classes.CartItemRow}>
            <p className={classes.ItemName}>Realme 5 (Crystal Purple, 32GB) (3GB RAM)</p>
            <p className={classes.ItemPrice}>13500</p>
            <div  className={classes.ButtonDiv}>
                <Button btnColor='red'>DELETE</Button>
            </div>
        </div>
    );
}

export default CartItemRow;