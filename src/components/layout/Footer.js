import {FaFacebook, FaInstagram} from 'react-icons/fa'
import {SiPicpay, SiGmail} from 'react-icons/si'
import styles from './Footer.module.css'

function Footer(){
    return (<footer className={styles.footer}>
         <ul className={styles.social_list}>
            <li>
                <FaFacebook /> facebook
            </li>
            <li>
                <FaInstagram /> instagram
            </li>
            <li>
                <SiPicpay /> picpay
            </li>
            <li>
                <SiGmail /> gmail
            </li>
        </ul>
        <p className={styles.copy_right}><span>Solidariti | Nos acompanhem nas nossas redes sociais</span> &copy; 2022</p>

    </footer>)
}

export default Footer