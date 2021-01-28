import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <header className={classes.Header}>
            <h2>Flopkart - ECom</h2>
            <div className={classes.MainNav}>
                <NavLink to='/home' className={classes.Nav} activeClassName={classes.Active}>Home</NavLink>
                <NavLink to='/additem' className={classes.Nav} activeClassName={classes.Active}>Add Item</NavLink>
            </div>
            <NavLink to='/cart' className={classes.Nav} activeClassName={classes.Active}>Cart: {0}</NavLink>

        </header>
    );
}

export default Header;