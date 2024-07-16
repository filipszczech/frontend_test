import styles from '../assets/styles/components/Footer.module.scss';
import { SlArrowUp, SlArrowDown, SlArrowRight } from "react-icons/sl";
import Button from "../components/Button";
import { useState, useContext } from "react";
import OptionsContext from "../context/options";
import { Link } from "react-router-dom";

type FooterProps = {
    setIsNameVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isNameVisible: boolean;
};

const Footer: React.FC<FooterProps> = ({ setIsNameVisible, isNameVisible }) => {

    const context = useContext(OptionsContext);

    if (!context) {
        return <p>Loading...</p>;
    }

    const { setActiveOption, setActiveOptionsList } = context;

    let [isShowButtonClicked, setIsShowButtonClicked] = useState(false);

    const handleShowNameClick = () => {
        setIsNameVisible(prev => !prev);
    };

    const handleResetClick = () => {
        setActiveOption(null);
        setActiveOptionsList([]);
        setIsNameVisible(false);
    };

    const handleShowButtonsClick = () => {
        setIsShowButtonClicked(prev => !prev);
    };


    return (
        <footer className={styles.footer}>
            <div className={styles['footer-content']}>
                <div className={styles['footer__css-is-awesome']}>
                    <div className={styles['footer__css-is-awesome__border']}></div>
                    CSS<br></br>IS<br></br>AWESOME
                </div>
                <Button width="9rem" paddingY="0.25rem" hoverColor='white' hoverBackgroundColor='orange' onClick={handleShowButtonsClick}>
                    {isShowButtonClicked ? <p>ukryj</p> : <p>pokaż</p>}
                    {isShowButtonClicked ? <SlArrowDown color="white" /> : <SlArrowUp color="white" />}
                </Button>
                {isShowButtonClicked && (
                    <div className={styles['footer__buttons']}>
                        <Link to="/manager" aria-label="Go to option manager page" style={{ textDecoration: 'none' }}>
                            <Button width="100%" paddingX="3rem" paddingY="0.25rem" backgroundColor="white" hoverColor='orange' hoverBackgroundColor='white' color="black">
                                <p>MANAGER OPCJI</p>
                            </Button>
                        </Link>
                        <Button width="100%" paddingX="3rem" paddingY="0.25rem" backgroundColor="white" color="black" hoverColor='orange' hoverBackgroundColor='white' onClick={handleResetClick}>
                            <SlArrowRight color="black" />
                            <p>ZRESETUJ USTAWIENIA</p>
                        </Button>
                        <Button width="100%" paddingX="3rem" paddingY="0.25rem" backgroundColor="white" color="black" hoverColor='orange' hoverBackgroundColor='white' onClick={handleShowNameClick}>
                            <SlArrowRight color="black" />
                            {isNameVisible ? <p>UKRYJ DANE OSOBOWE</p> : <p>POKAŻ DANE OSOBOWE</p>}
                        </Button>
                    </div>
                )}
            </div>
        </footer>
    )
  }
  
  export default Footer
  