import Footer from '../../components/Footer/Footer';
import Search from '../../components/UI/Search/Search';
import Button from '../../components/UI/Button/Button';
import classes from './AddItem.module.css';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import * as actions from '../../store/actions/actions';

const AddItem = props => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const dispatch = useDispatch();

    const addItem = item => dispatch({type: actions.ADD_ITEM, item: item});

    const addItemHandler = () => {
        addItem({
            id: randomNumber(),
            name: itemName,
            url: imageUrl,
            price: itemPrice
        });

        setItemName('');
        setItemPrice('');
        setImageUrl('');
    }

    const randomNumber = () => Math.floor(Math.random() * (1000 - 1) ) + 1;

    return (
        <div>
            <div  className={classes.AddItem}>
            <div>
                <Search holder='Item Name' value={itemName} changeHandler={event => setItemName(event.target.value)} />
                <Search holder='Item Price' value={itemPrice} changeHandler={event => setItemPrice(event.target.value)} />
                <Search holder='Image URL' value={imageUrl} changeHandler={event => setImageUrl(event.target.value)} />
            </div>

            <Button btnColor='brown' addMargin click={addItemHandler}>Add Item</Button>
            </div>

            <Footer type='addItem' />
        </div>
    )
}

export default AddItem;