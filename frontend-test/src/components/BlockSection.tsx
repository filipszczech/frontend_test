import styles from '../assets/styles/components/BlockSection.module.scss';

interface BlockSectionProps {
    children: React.ReactNode;
    headerText: string;
}

  const  BlockSection: React.FC<BlockSectionProps> = ({ children, headerText }) => {
  return (
    <div className={styles['block-section']}>
        <h2>{headerText}</h2>
        { children }
    </div>
  )
}

export default BlockSection