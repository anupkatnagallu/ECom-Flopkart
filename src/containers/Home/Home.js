import Search from '../../components/UI/Search/Search';
import ItemDetails from '../../components/ItemDetails/ItemDetails';
import classes from './Home.module.css';
import Footer from '../../components/Footer/Footer';

const Home = props => {
    return (
        <div className={classes.Home}>
            <Search holder='Search Products' />
            <div className={classes.HomeItems}>
                <ItemDetails />
                <ItemDetails />
                <ItemDetails />

            </div>
            <Footer type='home'/>
        </div>
    );
}

export default Home;