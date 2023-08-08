import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logoicon.png'
import {BiShoppingBag} from 'react-icons/bi'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
            <Link to="/">
          <img src={logo} alt="Logoicon" />  </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                    <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/contact">Dúvidas Frequentes</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/company">Quem Somos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar