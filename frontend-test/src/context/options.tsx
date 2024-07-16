import { createContext, ReactNode, useState, useEffect, Dispatch, SetStateAction } from "react";
import optionsData from "../data/options.json"

type Option = {
    title: string;
    desc: string;
};
  
type OptionsContextType = {
    options: Option[];
    activeOption: string | null;
    setActiveOption: Dispatch<SetStateAction<string | null>>;
    activeOptionsList: Option[];
    setActiveOptionsList: Dispatch<SetStateAction<Option[]>>;
    addOption: (option: Option) => void;
    editOption: (option: Option) => void;
    deleteOption: (title: string) => void;
  };

const OptionsContext = createContext<OptionsContextType | undefined>(undefined);

type ProviderProps = {
    children: ReactNode;
  };

function Provider({ children }: ProviderProps) {
    const [options, setOptions] = useState<Option[]>([]);
    const [activeOption, setActiveOption] = useState<string | null>(null);
    const [activeOptionsList, setActiveOptionsList] = useState<Option[]>([]);

    useEffect(() => {
      const storedOptions = localStorage.getItem('options');
      if (storedOptions) {
          setOptions(JSON.parse(storedOptions));
      } else {
          setOptions(optionsData);
          localStorage.setItem('options', JSON.stringify(optionsData));
      }
    }, []);
    const updateLocalStorage = (newOptions: Option[]) => {
      localStorage.setItem('options', JSON.stringify(newOptions));
    };

    const addOption = (option: Option) => {
      const newOptions = [...options, option];
      setOptions(newOptions);
      updateLocalStorage(newOptions);
    };

    const editOption = (updatedOption: Option) => {
        const newOptions = options.map(option =>
            option.title === updatedOption.title ? updatedOption : option
        );
        setOptions(newOptions);
        updateLocalStorage(newOptions);
        setActiveOptionsList([]);
    };

    const deleteOption = (title: string) => {
        const newOptions = options.filter(option => option.title !== title);
        setOptions(newOptions);
        updateLocalStorage(newOptions);
        setActiveOptionsList([]);
    };

    const valueToShare = {
        options,
        activeOption,
        setActiveOption,
        activeOptionsList,
        setActiveOptionsList,
        addOption,
        editOption,
        deleteOption,
    };
    
    return (
      <OptionsContext.Provider value={valueToShare}>
        { children }
      </OptionsContext.Provider>
    );
}

export { Provider };
export default OptionsContext;