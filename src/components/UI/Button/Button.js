import classes from './Button.module.css';

const Button = props => {
    const addClass = [classes.Button];
    props.btnColor === 'brown' ? addClass.push(classes.ButtonBrown) : addClass.push(classes.ButtonRed);
    if(props.addMargin) {
        addClass.push(classes.Margin);
    }
    
    return (
        <button className={addClass.join(' ')} onClick={props.click}>{props.children}</button>
    );
}

export default Button;