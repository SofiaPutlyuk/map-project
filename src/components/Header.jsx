import './header.css'
import { BiSolidDoorOpen } from "react-icons/bi";
const Header = ({nameAccount,cabinet}) => (
    <header>
    <nav>
        <ul className='container-list'>
            <li className='logo'>Reach to us !</li>
            <li className='account-text'>Account name: {nameAccount}</li>
            <button onClick={cabinet} className='btn-cabinet'>
                <p>Вийти з кабінету</p>
                <BiSolidDoorOpen className='icon-door'/>
            </button>
        </ul>
    </nav>
    </header>
)
export default Header;