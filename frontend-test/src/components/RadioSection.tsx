import styles from '../assets/styles/components/RadioSection.module.scss';
import OptionsContext from "../context/options";
import { useContext } from "react";

type RadioData = {
    title: string;
    desc: string;
};

type Props = {
    data: RadioData[];
};

const RadioSection: React.FC<Props> = ({ data }) => {
    const context = useContext(OptionsContext);

    if (!context) {
        return <p>Loading...</p>;
    }

    const { activeOption, setActiveOption } = context;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveOption(event.target.value);
    };

    return (
        <div className={styles['option-radio-inputs']}>
            {data.map((item, index) => (
                <div key={index} className={styles['option-radio-inputs__element']}>
                    <input type="radio" style={{ cursor: 'pointer' }} id={`radio-${index}`} name="radio-group" value={item.title} checked={activeOption === item.title} onChange={handleChange} />
                    <label style={{ cursor: 'pointer' }} htmlFor={`radio-${index}`}>
                        <strong>{item.title}</strong>
                    </label>
                </div>
            ))}
            <div className={styles['option-radio-inputs__element']}>
              <input type="radio" style={{ cursor: 'pointer' }} id={`radio-random`} name="radio-group" value={`random-value`} checked={activeOption === 'random-value'} onChange={handleChange}/>
              <label style={{ cursor: 'pointer' }} htmlFor={`radio-random`}>
                <strong>Opcja losowa</strong>
              </label>
            </div>
        </div>
    );
};

export default RadioSection