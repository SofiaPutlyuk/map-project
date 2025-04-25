import './footer.css'
import redCartoon from '../images/red_cartoon.png';
import greenCartoon from '../images/green_cartoon.png';
import yellowCartoon from '../images/yellow_cartoon.png';
import linkedIn from '../svg/linkedin.svg';
import twitter from '../svg/twitter.svg';
import facebook from '../svg/facebook.svg';
import pinterest from '../svg/pinterest.svg';
const Footer = () => (
    <footer>
    <div className='container-img'>
    <img src={redCartoon} alt='red-cartoon' className='red-cartoon' />
    <a href="https://careers.linkedin.com/Locations/NewYorkCity">
    <img src={linkedIn} alt='linkedin' />
    </a>
    <a  href="https://x.com/nycgov"> 
    <img src={twitter} alt='twitter' />
    </a>
    <a href="https://www.facebook.com/visitnewyorkcity/">
    <img src={facebook} alt='facebook' />
    </a>
    <a href="https://www.pinterest.com/search/pins/?q=new%20york%20map&rs=typed">
    <img src={pinterest} alt='pinterest' />
    </a>
    </div>
    <div className='container-cartoon'>
    <img src={greenCartoon} alt='green-cartoon' className='green-cartoon'/>
    <img src={yellowCartoon} alt='yellow-cartoon' className='yellow-cartoon'/>
    </div>
    </footer>
)
export default Footer;