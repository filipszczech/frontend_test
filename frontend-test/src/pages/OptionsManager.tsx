import styles from '../assets/styles/components/OptionsManager.module.scss';
import Button from "../components/Button";
import MainHeader from "../components/MainHeader";
import OptionsContext from "../context/options";
import { useContext, useState } from "react";

function OptionsManager() {
    const context = useContext(OptionsContext);

    if (!context) {
        return <p>Loading...</p>;
    }

    const { options, addOption, editOption, deleteOption } = context;
    const [newOption, setNewOption] = useState({ title: '', desc: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewOption(prev => ({ ...prev, [name]: value }));
    };

    const handleAddOption = () => {
        if (newOption.title && newOption.desc) {
            const optionExists = options.some(option => option.title === newOption.title);
            if (optionExists) {
                alert('Opcja o tym tytule już istnieje');
            } else {
                addOption(newOption);
                setNewOption({ title: '', desc: '' });
            }
        }
    };

    const handleEditOption = (title: string) => {
        const option = options.find(opt => opt.title === title);
        if (option) {
            const updatedDesc = prompt('Dodaj nowy opis', option.desc);
            if (updatedDesc !== null) {
                editOption({ title, desc: updatedDesc });
            }
        }
    };

    const handleDeleteOption = (title: string) => {
        if (window.confirm('Czy na pewno chcesz usunąć tę opcję?')) {
            deleteOption(title);
        }
    };

    return (
        <>
            <MainHeader headerText="Zarządzanie opcjami" />
            <div className={styles['edit-options-list']}>
                <div className={styles['edit-options-list__element']}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Tytuł"
                        value={newOption.title}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="desc"
                        placeholder="Opis"
                        value={newOption.desc}
                        onChange={handleInputChange}
                    />
                    <Button paddingX="2rem" paddingY="0.5rem" hoverColor='white' hoverBackgroundColor='orange' onClick={handleAddOption}>
                        Dodaj opcję
                    </Button>
                </div>
                {options.map(option => (
                    <div key={option.title} className={styles['edit-options-list__element']}>
                        <span>{option.title}</span>
                        <Button paddingX="2rem" paddingY="0.5rem" hoverColor='white' hoverBackgroundColor='orange' onClick={() => handleEditOption(option.title)}>
                            Edytuj
                        </Button>
                        <Button paddingX="2rem" paddingY="0.5rem" hoverColor='white' hoverBackgroundColor='orange' onClick={() => handleDeleteOption(option.title)}>
                            Usuń
                        </Button>
                    </div>
                ))}
            </div>
        </>
    )
  }
  
  export default OptionsManager
  