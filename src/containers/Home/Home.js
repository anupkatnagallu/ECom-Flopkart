import Search from '../../components/UI/Search/Search';
import ItemDetails from '../../components/ItemDetails/ItemDetails';
import classes from './Home.module.css';
import Footer from '../../components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/actions';
import { useState } from 'react';

const Home = props => {
    const [searchItem, setSearchItem] = useState('');
    const [filterList, setFilterList] = useState([]);

    const items = useSelector(state => {
        return state.items;
    });

    const dispatch = useDispatch();

    const addCartItem = item => dispatch({ type: actions.ADD_CART_ITEM, item: item });

    const itemDetails = [];

    const filterItems = [];

    items.forEach(item => {
        itemDetails.push(<ItemDetails key={item.id} name={item.name} url={item.url} price={item.price} click={() => addCartItem(item)} />);
    });

    const filterHandler = () => {
        items.forEach(item => {
            if (searchItem !== '') {
                if (item.name.toLowerCase().includes(searchItem.toLowerCase())) {
                    filterItems.push(<ItemDetails key={item.id} name={item.name} url={item.url} price={item.price} click={() => addCartItem(item)} />);
                }
            }
        });
        setFilterList(filterItems);

    }

    let mainItemList = [];

    if(searchItem === '') {
        mainItemList = itemDetails;
    }else {
        mainItemList = filterList;
    }


    return (
        <div className={classes.Home}>
            <Search holder='Search Products' keyUp={filterHandler} changeHandler={event => setSearchItem(event.target.value)} value={searchItem} />
            <div className={classes.HomeItems}>
                {mainItemList}
            </div>
            <Footer type='home' />
        </div>
    );
}

export default Home;