import classes from './Footer.module.css';

const Footer = props => {
    let classFooter = [classes.Footer];
    props.type === 'home' ? classFooter.push(classes.FooterHome) : classFooter.push(classes.FooterAddItem);
    return (
        <footer className={classFooter.join(' ')}>
            <p>Designed and Developed By</p>
            <p>Anup Katnagallu</p>
        </footer>
    );
}

export default Footer;