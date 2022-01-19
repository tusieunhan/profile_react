import "./Footer.css";


const Footer = (props) => {
    const {isOpenPost, setOpenPost} = props;
    return ( 
        <footer>
            <div className="footer-title" onClick={()=>setOpenPost(!isOpenPost)}>
            {isOpenPost ? 'X' : '+'}
            </div>
        </footer>
     );
}
 
export default Footer;