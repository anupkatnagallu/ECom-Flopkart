import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './ItemDetails.module.css';

const ItemDetails = props => {
    return (
        <div className={classes.ItemDetails}>
        <Card>
            <h3>{props.name}</h3>
            <img src={props.url} alt='Phone Img'/>
            <p><strong>Rs. {props.price}</strong></p>
            <Button btnColor='brown' click={props.click}>Add to cart</Button>
        </Card>
        </div>
    );
}

export default ItemDetails;