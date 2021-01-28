import Footer from '../../components/Footer/Footer';
import Search from '../../components/UI/Search/Search';
import Button from '../../components/UI/Button/Button';
import classes from './AddItem.module.css';

const AddItem = props => {
    return (
        <div>
            <div  className={classes.AddItem}>
            <div>
                <Search holder='Item Name' />
                <Search holder='Item Price' />
                <Search holder='Image URL' />
            </div>

            <Button btnColor='brown' addMargin>Add Item</Button>
            </div>

            <Footer type='addItem' />
        </div>
    )
}

export default AddItem;