import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './ItemDetails.module.css';

const ItemDetails = props => {
    return (
        <div className={classes.ItemDetails}>
        <Card>
            <h3>Realme 5 (Crystal Purple, 32GB) (3GB RAM)</h3>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlP6Vnf9aue8dVtdV__sgkAcnuHEpBbana8TJftcgXhILkJFlHh4IfzGdLu_rTL11V6Z0lrw&usqp=CAc' alt='Phone Img'/>
            <p><strong>Rs. 10,000</strong></p>
            <Button btnColor='brown'>Add to cart</Button>
        </Card>
        </div>
    );
}

export default ItemDetails;