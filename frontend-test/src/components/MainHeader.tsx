import styles from '../assets/styles/components/MainHeader.module.scss';

interface MainHeaderProps {
    headerText: string;
}

const  MainHeader: React.FC<MainHeaderProps> = ({ headerText }) => {
    return (
        <div className={styles['main-header']}>
            <div className={styles['main-header__border']}></div>
            <h1>{headerText}</h1>
        </div>
    )
  }
  
export default MainHeader