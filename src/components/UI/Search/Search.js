import classes from './Search.module.css';

const Search = props => {
    return(
        <input className={classes.Search} placeholder={props.holder} value={props.value} onKeyUp={props.keyUp} onChange={props.changeHandler}/>
    );
}

export default Search;