import styles from '../assets/styles/components/BlockGrid.module.scss';

interface BlockGridProps {
    children: React.ReactNode;
}

const BlockGrid: React.FC<BlockGridProps> = ({ children }) => {
    return <div className={styles['block-grid']}>
        {children}
    </div>;
};

export default BlockGrid;