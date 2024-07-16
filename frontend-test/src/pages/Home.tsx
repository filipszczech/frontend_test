import styles from '../assets/styles/components/Home.module.scss';
import MainHeader from "../components/MainHeader";
import BlockSection from "../components/BlockSection";
import BlockGrid from "../components/BlockGrid";
import RadioSection from "../components/RadioSection";
import Button from "../components/Button";
import OptionsContext from "../context/options";
import { useContext } from "react";

type Option = {
    title: string;
    desc: string;
};

function Home() {
    const context = useContext(OptionsContext);

    if (!context) {
        return <p>Loading...</p>;
    }

    const { options, activeOption, activeOptionsList, setActiveOptionsList } = context;

    const handleAddClick = () => {
        if (!activeOption) {
            alert('Wybierz najpierw opcję z listy!');
            return;
        }

        let optionToAdd: Option | undefined;

        if (activeOption === 'random-value') {
            const availableOptions = options.filter(option => 
                !activeOptionsList.some(activeOption => activeOption.title === option.title)
            );
            if (availableOptions.length === 0) {
                alert('Nie ma kolejnej opcji do dodania.');
                return;
            }
            const randomIndex = Math.floor(Math.random() * availableOptions.length);
            optionToAdd = availableOptions[randomIndex];
            console.log('option to add: ' + optionToAdd);
        } else {
            optionToAdd = options.find(option => option.title === activeOption);
            if (!optionToAdd) {
                alert('Wybrana opcja nie istnieje');
                return;
            }
        }

        if (optionToAdd && !activeOptionsList.some(option => option.title === optionToAdd!.title)) {
            setActiveOptionsList(prevList => [...prevList, optionToAdd!]);
        } else {
            alert('Ta opcja znajduje się już w liście.');
        }
    };
    const handleReplaceClick = () => {
        if (!activeOption) {
            alert('Wybierz najpierw opcję z listy!');
            return;
        }

        let optionToReplace: Option | undefined;

        if (activeOption === 'random-value') {
            const randomIndex = Math.floor(Math.random() * options.length);
            optionToReplace = options[randomIndex];
        } else {
            optionToReplace = options.find(option => option.title === activeOption);
            if (!optionToReplace) {
                alert('Wybrana opcja nie istnieje.');
                return;
            }
            if(activeOptionsList.some(option => option.title === optionToReplace?.title)) {
                alert('Wybrana opcja jest już aktywna.');
                return;
            }
        }

        setActiveOptionsList(optionToReplace ? [optionToReplace] : []);
    };

    return (
        <div>
            <MainHeader headerText="Strona główna" />
            <BlockGrid>
                <BlockSection headerText="blok pierwszy">
                    <RadioSection data = {options} />
                </BlockSection>
                <BlockSection headerText="blok drugi">
                    <div className={styles['button-container']}>
                        <Button width="8rem" hoverColor='#fff' hoverBackgroundColor='orange' onClick={handleReplaceClick}>
                            Zastąp
                        </Button>
                        <Button  width="8rem" hoverColor='#fff' hoverBackgroundColor='orange' onClick={handleAddClick}>
                            Doklej
                        </Button>
                    </div>
                </BlockSection>
                <BlockSection headerText="blok trzeci">
                    {activeOptionsList.length > 0 ? (
                        activeOptionsList
                            .slice()
                            .sort((a, b) => a.desc.localeCompare(b.desc))
                            .map((item, index) => (
                                <div key={index} className={styles['active-option-element']}>
                                    {item.desc}
                                </div>
                            )) 
                    ) : <div>Tu pojawi się wybrana treść.</div>}
                </BlockSection>
            </BlockGrid>
        </div>
    )
  }
  
  export default Home
  