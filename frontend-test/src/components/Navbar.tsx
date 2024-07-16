import styles from '../assets/styles/components/Navbar.module.scss'
import { Link } from "react-router-dom";
import logo_test from '../assets/img/logo_test.svg';

type NavbarProps = {
  isNameVisible: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isNameVisible }) => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbar__logo}>
            <Link to="/" aria-label="Go to homepage">
              <img src={logo_test} alt="html 5 logo" /> 
            </Link>
        </div>
        <div className={styles.navbar__element}>
          <p>Zadanie rekrutacyjne</p>
          {isNameVisible && (
            <p>Filip Szczęch</p>
          )}
        </div>
    </div>
  )
}

export default Navbar
