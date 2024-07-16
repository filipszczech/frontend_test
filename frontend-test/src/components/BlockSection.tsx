import styles from '../assets/styles/components/BlockSection.module.scss';

interface BlockSectionProps {
    children: React.ReactNode;
    headerText: string;
}

const truncateText = (text: string, wordLimit: number): string => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

const  BlockSection: React.FC<BlockSectionProps> = ({ children, headerText }) => {
  const truncatedHeaderText = truncateText(headerText, 5);
  return (
    <div className={styles['block-section']}>
        <h2>{truncatedHeaderText}</h2>
        { children }
    </div>
  )
}

export default BlockSection