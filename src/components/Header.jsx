import './header.css'
const Header = ({nameAccount}) => (
    <header>
    <nav>
        <ul className='container-list'>
            <li className='logo'>Reach to us !</li>
            <li className='account-text'>Account name: {nameAccount}</li>
        </ul>
    </nav>
    </header>
)
export default Header;