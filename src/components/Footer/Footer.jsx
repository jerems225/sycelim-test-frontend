import './Footer.css';

const Footer = () => {

    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Hoazis Inc. All rights reserved.</p>
        </footer>
    )
}

export default Footer;